import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';


/**
 * {@link TsExpansionPanelComponent} action row that will be rendered at the bottom of the panel.
 *
 * @example
 * <ts-expansion-panel>
 *               <ts-expansion-panel-trigger>
 *                 Panel trigger
 *               </ts-expansion-panel-trigger>
 *
 *               Panel content
 *
 *               <ts-expansion-panel-action-row>
 *                 <button>Next</button>
 *               </ts-expansion-panel-action-row>
 * </ts-expansion-panel>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-structure-expansion-panel</example-url>
 */
@Component({
  selector: 'ts-expansion-panel-action-row',
  template: `<ng-content></ng-content>`,
  host: { class: 'ts-expansion-panel__action-row' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsExpansionPanelActionRow',
})
export class TsExpansionPanelActionRowComponent {}
