import { ConnectionPositionPair } from '@angular/cdk/overlay';
import type { CdkOverlayOrigin } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Host,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import type {
  OnDestroy,
  OnInit,
} from '@angular/core';
import type { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { untilComponentDestroyed } from '@terminus/fe-utilities';

import { tsSidenavPanelAnimations } from '../sidenav-panel.animations';
import { TsSidenavComponent } from '../sidenav/sidenav.component';

// Unique ID for each instance
let nextUniqueId = 0;

/**
 * Define the available notification states for {@link TsSidenavTriggerComponent}
 */
export type TS_SIDENAV_PANEL_NOTIFICATION_STATE
  = 'off'
  | 'amber'
  | 'red'
;

/**
 * Define the available panel types for {@link TsSidenavTriggerComponent}
 */
export type TS_SIDENAV_PANEL_TYPES
  = 'popout'
  | 'drawer'
  | undefined
;

/**
 * Define the structure for panel offset settings used in {@link TsSidenavTriggerComponent}
 */
export interface TS_SIDENAV_PANEL_OFFSETS {
  x: number;
  y: number;
}

/**
 * Default panel offsets for the `popout` type of panel
 */
export const tsSidenavPanelOffsetPopoutDefault = {
  x: 10,
  y: 0,
};

/**
 * Default panel offsets for the `drawer` type of panel
 */
export const tsSidenavPanelOffsetDrawerDefault = {
  x: 0,
  y: 0,
};

/**
 * A trigger for the {@link TsSidenavComponent}
 *
 * @example
 * <ts-sidenav-trigger
 *              [defaultOpen]="true"
 *              id="my-id"
 *              [isPanelOpen]="true"
 *              panelType="drawer"
 *              [statusFormGroup]="myToggleFormGroup"
 * >
 *              <button>...</button>
 * </ts-sidenav-trigger>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-navigation-sidenav</example-url>
 */
@Component({
  selector: 'ts-sidenav-trigger',
  templateUrl: './sidenav-trigger.component.html',
  styleUrls: ['./sidenav-trigger.component.scss'],
  host: {
    'class': 'ts-sidenav-trigger',
    '[class.ts-sidenav-trigger--popout]': 'panelType === "popout"',
    '[class.ts-sidenav-trigger--drawer]': 'panelType === "drawer"',
    '[class.ts-sidenav-trigger--amber]': 'statusCode === "amber"',
    '[class.ts-sidenav-trigger--red]': 'statusCode === "red"',
    '[attr.tabindex]': '-1',
    '[attr.id]': 'id',
    '(focus)': 'focusTrigger()',
  },
  animations: [
    tsSidenavPanelAnimations.transformPanel,
    tsSidenavPanelAnimations.transformDrawer,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsSidenavTrigger',
})
export class TsSidenavTriggerComponent implements OnInit, OnDestroy {
  /**
   * Define the default component UID
   */
  public readonly uid = `ts-sidenav-trigger-${nextUniqueId++}`;

  /**
   * Store the panel positions for this instance
   */
  public panelPositions: ConnectionPositionPair[];

  /**
   * Define custom panel offsets
   */
  public panelOffsets: { x: number, y: number } = {
    x: 0,
    y: 0,
  };

  /**
   * Store the current status code
   */
  public statusCode: TS_SIDENAV_PANEL_NOTIFICATION_STATE = 'off';

  /**
   * Store the status FormGroup value changes subscription
   */
  private statusFormGroupSubscription: Subscription | undefined;

  /**
   * The value of the panel's transform-origin property
   */
  public transformOrigin = 'top';

  /**
   * Define reference to the CdkOverlayOrigin element
   */
  @ViewChild('triggerItem')
  public triggerItem: CdkOverlayOrigin;

  /**
   * Define if the panel should default to the open state
   */
  @Input()
  public defaultOpen = false;

  /**
   * Define the component ID
   */
  @Input()
  public set id(value: string) {
    this._id = value ? value : this.uid;
  }
  public get id(): string {
    return this._id;
  }
  private _id: string = this.uid;

  /**
   * Define if the panel is open
   */
  @Input()
  public set isPanelOpen(value: boolean) {
    this._isPanelOpen = value;
    // istanbul ignore else
    if (value && this.panelType) {
      this.renderer.addClass(this.elementRef.nativeElement, 'ts-sidenav-trigger--open');
    } else if (this.elementRef?.nativeElement?.classList.contains('ts-sidenav-trigger--open')) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'ts-sidenav-trigger--open');
    }
  }
  public get isPanelOpen(): boolean {
    return this._isPanelOpen;
  }
  private _isPanelOpen = false;

  /**
   * Define the panel type
   */
  @Input()
  public set panelType(value: TS_SIDENAV_PANEL_TYPES) {
    this._panelType = value;
    this.panelPositions = TsSidenavTriggerComponent.determinePanelPositions(value);
    this.panelOffsets = TsSidenavTriggerComponent.determinePanelOffsets(value);
  }
  public get panelType(): TS_SIDENAV_PANEL_TYPES {
    return this._panelType;
  }
  private _panelType: TS_SIDENAV_PANEL_TYPES;

  /**
   * Define the FormGroup for the status controls
   */
  @Input()
  public set statusFormGroup(value: FormGroup | undefined) {
    // istanbul ignore else
    if (value) {
      this._statusFormGroup = value;
      this.listenForStatusChanges();
      this.statusCode = TsSidenavTriggerComponent.determineStatusCode(value.value);
    }
  }
  public get statusFormGroup(): FormGroup | undefined {
    return this._statusFormGroup;
  }
  private _statusFormGroup: FormGroup | undefined;

  constructor(
    private renderer: Renderer2,
    public elementRef: ElementRef,
    @Host() public hostSidenav: TsSidenavComponent,
  ) {}

  /**
   * Set up default open state and wire up animation listener
   */
  public ngOnInit(): void {
    if (this.defaultOpen) {
      this.open();
    }
  }

  /**
   * Needed for `untilComponentDestroyed`
   */
  public ngOnDestroy(): void {}

  /**
   * Toggle the panel state
   *
   * @param event
   */
  @HostListener('click', ['$event'])
  public toggle(event?: Event): void {
    // istanbul ignore else
    if (event) {
      event.stopPropagation();
    }
    this.isPanelOpen ? this.close() : this.open();
  }

  /**
   * Open the panel
   */
  public open(): void {
    this.isPanelOpen = true;
  }

  /**
   * Close the panel
   */
  public close(): void {
    // istanbul ignore else
    if (this.isPanelOpen) {
      this.isPanelOpen = false;
    }
  }

  /**
   * Focus the underlying interaction element
   */
  public focusTrigger(): void {
    const button = this.elementRef.nativeElement.querySelector('button');
    const link = this.elementRef.nativeElement.querySelector('a');
    (button || link).focus();
  }

  /**
   * Wire up listener for status changes
   */
  private listenForStatusChanges(): void {
    this.statusFormGroupSubscription = this.statusFormGroup.valueChanges.pipe(untilComponentDestroyed(this)).subscribe(changes => {
      this.statusCode = TsSidenavTriggerComponent.determineStatusCode(changes);
    });
  }

  /**
   * Determine the correct panel positions
   *
   * @param panelType - The current panel type
   * @returns An array of ConnectionPositionPairs
   */
  private static determinePanelPositions(panelType: TS_SIDENAV_PANEL_TYPES): ConnectionPositionPair[] {
    if (panelType === 'drawer') {
      return [
        new ConnectionPositionPair({
          originX: 'end',
          originY: 'top',
        }, {
          overlayX: 'start',
          overlayY: 'top',
        }),
      ];
    }

    return [
      new ConnectionPositionPair({
        originX: 'end',
        originY: 'top',
      }, {
        overlayX: 'start',
        overlayY: 'top',
      }),
    ];
  }

  /**
   * Determine the correct status code
   *
   * @param value - The FormGroup for the toggles
   * @returns The current status
   */
  private static determineStatusCode(value: Record<string, boolean>): TS_SIDENAV_PANEL_NOTIFICATION_STATE {
    const allTrue = Object.values(value).every(c => c);
    const someTrue = Object.values(value).some(c => c);
    return allTrue ? 'red' : someTrue ? 'amber' : 'off';
  }

  /**
   * Determine the correct panel offset
   *
   * @param panelType - The type of panel
   * @returns A defined panel offset group
   */
  private static determinePanelOffsets(panelType: TS_SIDENAV_PANEL_TYPES): TS_SIDENAV_PANEL_OFFSETS {
    return panelType === 'drawer' ? tsSidenavPanelOffsetDrawerDefault : tsSidenavPanelOffsetPopoutDefault;
  }
}
