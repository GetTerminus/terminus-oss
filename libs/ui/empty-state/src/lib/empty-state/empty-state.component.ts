import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import type { TemplateRef } from '@angular/core';

@Component({
  selector: 'ts-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  host: { class: 'ts-empty-state' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsEmptyState',
})
export class TsEmptyStateComponent {
  /**
   * Define the empty state title
   */
  @Input()
  public title: string;

  /**
   * Pass in a custom SVG to display
   */
  @Input()
  public svgTemplate: TemplateRef<unknown>;
}
