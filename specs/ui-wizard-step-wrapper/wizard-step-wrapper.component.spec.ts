import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { TsExpansionPanelModule } from '../../libs/ui/expansion-panel/src';
import { TsWizardStepWrapperModule } from '../../libs/ui/wizard-step-wrapper/src';
import { TsWizardStepWrapperComponent } from '../../libs/ui/wizard-step-wrapper/src/lib/wizard-step-wrapper/wizard-step-wrapper.component';

const BASIC_TEMPLATE = `
    <ts-wizard-step-wrapper
      [stepHeader]="stepHeader">
      <div>
        <span>Step Content</span>
      </div>
    </ts-wizard-step-wrapper>

    <ng-template #stepHeader>
        <span>Basic Step</span>
    </ng-template>
`;

const TEMPLATE_WITH_HEADER_ADDITIONS = `
`;

const TEMPLATE_WITH_FOOTER = `
`;

describe(`TsWizardStepWrapperComponent`, () => {
  let spectator: SpectatorHost<TsWizardStepWrapperComponent>;
  const createHost = createHostFactory({
    component: TsWizardStepWrapperComponent,
    imports: [
      BrowserAnimationsModule,
      TsExpansionPanelModule,
      TsWizardStepWrapperModule,
    ],
    declareComponent: false,
  });

  describe('emitters', () => {
    test('should emit on expanded toggled', () => {
      spectator = createHost(BASIC_TEMPLATE);
      let output;
      spectator.output('expandedToggled').subscribe(result => output = result);
      spectator.click(spectator.queryHost('.ts-wsp-step__trigger'));
      expect(output).toEqual(expect.objectContaining(true));
    });
  });
});
