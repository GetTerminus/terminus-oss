import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ts-sidenav-section-break',
  template: `<hr class="ts-sidenav-section-break">`,
  styleUrls: ['./sidenav-section-break.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsSidenavSectionBreak',
})
export class TsSidenavSectionBreakComponent {}
