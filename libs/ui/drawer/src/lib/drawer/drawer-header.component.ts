import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

/**
 * The header component for the {@link TsDrawerComponent}
 *
 * @example
 * <ts-drawer-header>
 *              My content.
 * </ts-drawer-header>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-structure-drawer</example-url>
 */
@Component({
  selector: 'ts-drawer-header',
  templateUrl: './drawer-header-footer.component.html',
  styleUrls: ['./drawer.component.scss'],
  host: { class: 'ts-drawer-header' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsDrawerHeader',
})
export class TsDrawerHeaderComponent { }
