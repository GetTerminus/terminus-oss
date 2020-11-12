import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import type { OnDestroy } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  Subscription,
  timer,
} from 'rxjs';

import { untilComponentDestroyed } from '@terminus/fe-utilities';

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
export const tsButtonActionTypes = [
  'Button',
  'Submit',
  'Menu',
  'Reset',
];

/**
 * Define the allowed {@link TsButtonComponent} action types
 */
export type TsButtonFunctionTypes
  = 'button'
  | 'search'
  | 'submit'
;
export const tsButtonFunctionTypes = [
  'button',
  'search',
  'submit',
];

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
  | 'alternate-primary'
;

/**
 * The list of supported theme names
 */
export const tsButtonThemes: ReadonlyArray<TsButtonThemeTypes> = [
  'default',
  'secondary',
  'warning',
  'alternate-primary',
];

/**
 * The default collapse delay in milliseconds
 *
 * @internal
 */
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
 *              [isSmall]="true"
 *              [showProgress]="true"
 *              tabIndex="2"
 *              textContent="Click Me!"
 *              theme="warning"
 *              (clicked)="myMethod($event)"
 * >Click Me!</ts-button>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-actions-button</example-url>
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
export class TsButtonComponent implements OnDestroy {
  /**
   * Store a reference to the collapsible subscription
   */
  public collapseSubscription$: Subscription | undefined;

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
   * Define the delay before the rounded button automatically collapses
   */
  @Input()
  public collapseDelay: number | undefined;

  /**
   * Define the collapsed value and trigger the delay if needed
   *
   * @param value
   */
  @Input()
  public set collapsed(value: boolean) {
    this.isCollapsed = value;
    this.cleanUpCollapseSubscription();
  }

  /**
   * Define the button format. {@link TsButtonFormatTypes}
   *
   * @param value
   */
  @Input()
  public set format(value: TsButtonFormatTypes) {
    this._format = value ? value : 'filled';

    // istanbul ignore else
    if (this._format === 'collapsible') {
      this.setUpCollapse();
    } else if (this.collapseDelay) {
      // If the format is NOT collapsible clean up any unneeded settings
      this.collapseDelay = undefined;
      // istanbul ignore else
      this.cleanUpCollapseSubscription();
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
   * Define if the button is the smaller format
   */
  @Input()
  public isSmall = false;

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
   * Define the checkbox text content.
   *
   * NOTE: This will not display if any content is passed in through <ng-content>
   */
  @Input()
  public textContent = '';

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
    public elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  /**
   * Clear any existing timeout
   */
  public ngOnDestroy(): void {
    this.cleanUpCollapseSubscription();
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
   * Set up the timer to collapse the button after a delay
   */
  private setUpCollapse(): void {
    // istanbul ignore else
    if (!this.collapseDelay) {
      this.collapseDelay = DEFAULT_COLLAPSE_DELAY_MS;
    }
    this.cleanUpCollapseSubscription();

    this.collapseSubscription$ = timer(this.collapseDelay)
      .pipe(untilComponentDestroyed(this))
      .subscribe(() => {
        this.isCollapsed = true;
        this.changeDetectorRef.detectChanges();
      });
  }

  /**
   * Clean up the collapse subscription
   */
  private cleanUpCollapseSubscription(): void {
    // istanbul ignore else
    if (this.collapseSubscription$) {
      this.collapseSubscription$.unsubscribe();
      this.collapseSubscription$ = undefined;
    }
  }
}
