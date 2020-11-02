import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';

/**
 * A badge component to use inside a {@link TsRadioButtonComponent}
 *
 * @example
 * <ts-radio-group visualFormat="segmented">
 *              <ts-radio-button value="one">
 *                One
 *                <ts-radio-button-badge>734</ts-radio-button-badge>
 *              </ts-radio-button>
 * </ts-radio-group>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-data-entry-radio-group-segmented-mode</example-url>
 */
@Component({
  selector: 'ts-radio-button-badge',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./radio-button-badge.component.scss'],
  host: { class: 'ts-radio-button-badge' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsRadioButtonBadge',
})
export class TsRadioButtonBadgeComponent {
  constructor(public elementRef: ElementRef) {}
}
