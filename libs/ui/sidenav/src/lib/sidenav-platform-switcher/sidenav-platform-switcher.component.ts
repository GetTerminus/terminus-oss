import { Overlay } from '@angular/cdk/overlay';
import type {
  ConnectedPosition,
  OverlayRef,
} from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { tsSidenavPanelAnimations } from '../sidenav-panel.animations';

// Unique ID for each instance
let nextUniqueId = 0;

/**
 * Define the base of a switcher item for {@link TsSidenavPlatformSwitcherComponent}
 */
export interface TS_SIDENAV_PLATFORM_SWITCHER_ITEM_BASE {
  title: string;
  iconClasses: string;
}

/**
 * Define the form of a switcher item with an external destination for {@link TsSidenavPlatformSwitcherComponent}
 */
export interface TS_SIDENAV_PLATFORM_SWITCHER_LINK extends TS_SIDENAV_PLATFORM_SWITCHER_ITEM_BASE {
  url: string;
}

/**
 * Define the form of a switcher item with a local destination for {@link TsSidenavPlatformSwitcherComponent}
 */
export interface TS_SIDENAV_PLATFORM_SWITCHER_ROUTE extends TS_SIDENAV_PLATFORM_SWITCHER_ITEM_BASE {
  route: string;
}

/**
 * Define a single section of the {@link TsSidenavPlatformSwitcherComponent}
 */
export interface TS_SIDENAV_PLATFORM_SWITCHER_SECTION {
  title: string;
  children: (TS_SIDENAV_PLATFORM_SWITCHER_LINK | TS_SIDENAV_PLATFORM_SWITCHER_ROUTE)[],
}

/**
 * Definition for the entire {@link TsSidenavPlatformSwitcherComponent} contents
 */
export type TS_SIDENAV_PLATFORM_SWITCHER_CONTENT = TS_SIDENAV_PLATFORM_SWITCHER_SECTION[];

/**
 * A platform switcher component used within {@link TsSidenavComponent}
 *
 * @internal
 *
 * @example
 * <ts-sidenav-platform-switcher
 *              currentTitle="My title"
 *              id="my-id"
 *              [isPanelOpen]="true"
 *              [switcherContent]="mySwitcherContent"
 * ></ts-sidenav-platform-switcher>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-navigation-sidenav</example-url>
 */
@Component({
  selector: 'ts-sidenav-platform-switcher',
  templateUrl: './sidenav-platform-switcher.component.html',
  styleUrls: ['./sidenav-platform-switcher.component.scss'],
  host: {
    'class': 'ts-sidenav-platform-switcher',
    '[class.ts-sidenav-platform-switcher--active]': 'isPanelOpen',
    '[attr.id]': 'id',
    '(click)': 'toggle()',
  },
  animations: [
    tsSidenavPanelAnimations.transformPanel,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsSidenavPlatformSwitcher',
})
export class TsSidenavPlatformSwitcherComponent {
  /**
   * Define the default component UID
   */
  public readonly uid = `ts-sidenav-platform-switcher-${nextUniqueId++}`;

  /**
   * Store the overlay reference
   */
  public overlayRef: OverlayRef | null;

  /**
   * Define the X offset for the panel
   */
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  public offsetX = 2;

  /**
   * Define the Y offset for the panel
   */
  public offsetY = 0;

  /**
   * The value of the panel's transform-origin property
   */
  public transformOrigin = 'top';

  /**
   * Define the panel positions
   */
  public positions: ConnectedPosition[] = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    },
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom',
    },
  ];

  /**
   * Define the current platform title
   */
  @Input()
  public currentTitle: string;

  /**
   * Define the component ID
   *
   * NOTE: There is no fallback defined since the ID is set by {@link TsSidenavComponent} it can never be undefined.
   */
  @Input()
  public set id(value: string) {
    this._id = value;
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
  }
  public get isPanelOpen(): boolean {
    return this._isPanelOpen;
  }
  private _isPanelOpen = false;

  /**
   * Define the contents for the switcher panel
   */
  @Input()
  public switcherContent: TS_SIDENAV_PLATFORM_SWITCHER_CONTENT;

  constructor(
    public overlay: Overlay,
    public elementRef: ElementRef,
  ) {}

  /**
   * Toggle the panel state
   */
  public toggle(): void {
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
}
