import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TsTooltipComponent } from '@terminus/ui-tooltip';
import { TsUILibraryError } from '@terminus/ui-utilities';

/**
 * Helper function to display the tooltip
 *
 * @param fixture - the fixture with a tooltip
 */
export function getTooltipText(fixture: ComponentFixture<any>): string | null {
  const tooltipComponent = getTooltipComponent(fixture);
  tooltipComponent.showTooltip();
  fixture.detectChanges();
  const matTooltipEl = document.querySelector('.mat-tooltip');
  return matTooltipEl.textContent;
}

/**
 * Get tooltip component
 *
 * @param fixture - the fixture with a tooltip
 * @returns tooltip component
 */
export function getTooltipComponent(fixture): TsTooltipComponent {
  const debugElement = fixture.debugElement.queryAll(By.css('ts-tooltip'));
  if (!debugElement) {
    throw new TsUILibraryError(`Tooltip fixture did not find any tooltip debug element`);
  }
  return debugElement[0].componentInstance;
}
