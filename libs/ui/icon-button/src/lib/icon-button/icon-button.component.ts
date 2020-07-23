import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  TsButtonActionTypes,
  TsButtonFunctionTypes,
} from '@terminus/ui-button';
import { TsStyleThemeTypes } from '@terminus/ui-utilities';

/**
 * This is the icon-button UI Component
 *
 * @example
 * <ts-icon-button
 *              actionName="Menu"
 *              buttonType="button"
 *              [isDisabled]="false"
 *              tabIndex="2"
 *              [icon]="myIconReference"
 *              (clicked)="myMethod($event)"
 * ></ts-icon-button>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/icon-button</example-url>
 */
@Component({
  selector: 'ts-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  host: { class: 'ts-icon-button' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsIconButton',
})
export class TsIconButtonComponent {
  /**
   * Getter to return the native element
   */
  public get hostElement(): ElementRef {
    return this.elementRef.nativeElement;
  }

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
   * Define the icon
   */
  @Input()
  public icon: IconProp | undefined;

  /**
   * Define if the button is disabled
   */
  @Input()
  public isDisabled = false;

  /**
   * Define the tabindex for the button
   */
  @Input()
  public tabIndex = 0;

  /**
   * Define the theme
   */
  @Input()
  public theme: TsStyleThemeTypes = 'primary';

  /**
   * Pass the click event through to the parent
   */
  @Output()
  public readonly clicked: EventEmitter<MouseEvent> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

}
