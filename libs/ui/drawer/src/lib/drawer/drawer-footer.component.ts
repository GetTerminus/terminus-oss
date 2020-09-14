import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

/**
 * The footer component for the {@link TsDrawerComponent}
 *
 * @example
 * <ts-drawer-footer>
 *              My content.
 * </ts-drawer-footer>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-structure-drawer</example-url>
 */
@Component({
  selector: 'ts-drawer-footer',
  templateUrl: './drawer-header-footer.component.html',
  styleUrls: ['./drawer.component.scss'],
  host: { class: 'ts-drawer-footer' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsDrawerFooter',
})
export class TsDrawerFooterComponent { }
