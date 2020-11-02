import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';

import {
  TsRadioButtonBadgeComponent,
  TsRadioGroupModule,
} from '@terminus/ui-radio-group';

describe(`TsRadioButtonBadgeComponent`, () => {
  let spectator: Spectator<TsRadioButtonBadgeComponent>;
  let rootElement: HTMLElement;
  const createComponent = createComponentFactory({
    component: TsRadioButtonBadgeComponent,
    imports: [TsRadioGroupModule],
    declareComponent: false,
  });

  beforeEach(() => {
    spectator = createComponent();
    rootElement = spectator.component.elementRef.nativeElement;
  });

  test(`should exist`, () => {
    expect(rootElement.classList).toContain('ts-radio-button-badge');
  });
});
