import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import type {
  TsButtonActionTypes,
  TsButtonFunctionTypes,
} from '@terminus/ui-button';

/**
 * A round button that only contains an icon.
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
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-actions-icon-button</example-url>
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
  public get hostElement(): HTMLElement {
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
   * Pass the click event through to the parent
   */
  @Output()
  public readonly clicked = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) {}

}
