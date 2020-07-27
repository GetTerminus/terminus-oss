import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  isDevMode,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { TsWindowService } from '@terminus/ngx-tools/browser';


// Unique ID for each instance
let nextUniqueId = 0;

/**
 * Define the allowed {@link TsButtonComponent} action types
 */
export type TsButtonActionTypes
  = 'Button'
  | 'Submit'
  | 'Menu'
  | 'Reset'
;

/**
 * Define the allowed {@link TsButtonComponent} action types
 */
export type TsButtonFunctionTypes
  = 'button'
  | 'search'
  | 'submit'
;

/**
 * Define the allowed {@link TsButtonComponent} format types
 */
export type TsButtonFormatTypes
  = 'filled'
  | 'collapsible'
;

/**
 * @internal
 */
export const tsButtonFormatTypesArray: ReadonlyArray<TsButtonFormatTypes> = [
  'filled',
  'collapsible',
];

/**
 * Supported themes for buttons
 */
export type TsButtonThemeTypes
  = 'default'
  | 'secondary'
  | 'warning'
;

/**
 * The list of supported theme names
 */
export const tsButtonThemes: ReadonlyArray<TsButtonThemeTypes> = [
  'default',
  'secondary',
  'warning',
];

const DEFAULT_COLLAPSE_DELAY_MS = 4000;


/**
 * A presentational component to render a button
 *
 * @example
 * <ts-button
 *              actionName="Submit"
 *              buttonType="search"
 *              [collapsed]="false"
 *              collapseDelay="500"
 *              format="filled"
 *              [icon]="myIconReference"
 *              [isDisabled]="false"
 *              [showProgress]="true"
 *              tabIndex="2"
 *              theme="warning"
 *              (clicked)="myMethod($event)"
 * >Click Me!</ts-button>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/button</example-url>
 */
@Component({
  selector: 'ts-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: { class: 'ts-button' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsButton',
})
export class TsButtonComponent implements OnInit, OnDestroy {
  /**
   * Store a reference to the timeout needed for collapsible buttons
   */
  private collapseTimeoutId!: number;

  /**
   * Define the delay before the rounded button automatically collapses
   */
  public collapseDelay: number | undefined;

  /**
   * The flag that defines if the button is collapsed or expanded
   */
  public isCollapsed = false;

  /**
   * A flag to determine if click events should be intercepted.
   *
   * Set by {@link TsConfirmationDirective}
   */
  public interceptClick = false;

  /**
   * Store the original event from a click (used when `interceptClick` is true)
   *
   * @internal
   *
   * Used by {@link TsConfirmationDirective}
   */
  public originalClickEvent!:MouseEvent;

  /**
   * Define the default component ID
   */
  public readonly uid = `ts-button-${nextUniqueId++}`;

  /**
   * Getter returning a boolean based on both the component `isDisabled` flag and the FormControl's disabled status
   */
  public get shouldBeDisabled(): boolean {
    return this.isDisabled || this.showProgress;
  }

  /**
   * Provide access to the inner button element
   */
  @ViewChild('button', { static: true })
  public button!: ElementRef;

  /**
   * Define the action for the aria-label. {@link TsButtonActionTypes}
   */
  @Input()
  public actionName: TsButtonActionTypes = 'Button';

  /**
   * Define the button type. {@link TsButtonFunctionTypes}
   */
  @Input()
  public buttonType: TsButtonFunctionTypes = 'button';

  /**
   * Define the collapsed value and trigger the delay if needed
   *
   * @param value
   */
  @Input()
  public set collapsed(value: boolean) {
    this.isCollapsed = value;

    // If the value is `false` and a collapse delay is set
    if (!value && this.collapseDelay) {
      // Trigger the delayed close
      this.collapseWithDelay(this.collapseDelay);
    }
  }

  /**
   * Define the button format. {@link TsButtonFormatTypes}
   *
   * @param value
   */
  @Input()
  public set format(value: TsButtonFormatTypes) {
    this._format = value ? value : 'filled';

    if (this._format === 'collapsible') {
      if (!this.collapseDelay) {
        this.collapseDelay = DEFAULT_COLLAPSE_DELAY_MS;
      }
    } else if (this.collapseDelay) {
      // If the format is NOT collapsible, remove the delay
      this.collapseDelay = undefined;
    }
  }
  public get format(): TsButtonFormatTypes {
    return this._format;
  }
  private _format: TsButtonFormatTypes = 'filled';

  /**
   * Define an icon to include
   */
  @Input()
  public icon: IconProp | undefined;

  /**
   * Define if the button is disabled
   */
  @Input()
  public isDisabled = false;

  /**
   * Define an ID for the component
   *
   * @param value
   */
  @Input()
  public set id(value: string) {
    this._id = value || this.uid;
  }
  public get id(): string {
    return this._id;
  }
  protected _id: string = this.uid;

  /**
   * Define if the progress indicator should show
   */
  @Input()
  public showProgress = false;

  /**
   * Define the tabindex for the button
   */
  @Input()
  public tabIndex = 0;

  /**
   * Define the theme
   *
   * @param value - The theme name
   */
  @Input()
  public set theme(value: TsButtonThemeTypes) {
    this._theme = value ? value : 'default';
  }
  public get theme(): TsButtonThemeTypes {
    return this._theme;
  }
  private _theme: TsButtonThemeTypes = 'default';

  /**
   * Pass the click event through to the parent
   */
  @Output()
  public readonly clicked = new EventEmitter<MouseEvent>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private windowService: TsWindowService,
  ) {}

  /**
   * Collapse after delay (if set)
   */
  public ngOnInit(): void {
    if (this.collapseDelay) {
      this.collapseTimeoutId = this.collapseWithDelay(this.collapseDelay);
    }

    // If the format is `collapsible`, verify an `icon` is set
    if (this.format === 'collapsible' && !this.icon && isDevMode()) {
      throw new Error('`icon` must be defined for collapsible buttons.');
    }
  }

  /**
   * Clear any existing timeout
   */
  public ngOnDestroy(): void {
    // istanbul ignore else
    if (this.collapseTimeoutId) {
      this.windowService.nativeWindow.clearTimeout(this.collapseTimeoutId);
    }
  }

  /**
   * Handle button clicks
   *
   * @internal
   *
   * @param event - The MouseEvent
   */
  public clickedButton(event: MouseEvent): void {
    if (this.interceptClick) {
      // Save the original event but don't emit the originalClickEvent
      this.originalClickEvent = event;
    } else {
      // Allow the click to propagate
      this.clicked.emit(event);
    }
  }

  /**
   * Collapse the button after a delay
   *
   * NOTE: I'm not entirely sure why this `detectChanges` is needed. Supposedly zone.js should be patching setTimeout automatically.
   *
   * @param delay - The time to delay before collapsing the button
   * @returns The ID of the timeout
   */
  private collapseWithDelay(delay: number): number {
    return this.windowService.nativeWindow.setTimeout(() => {
      this.isCollapsed = true;
      this.changeDetectorRef.detectChanges();
    }, delay);
  }
}
