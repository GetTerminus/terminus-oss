import {
  AfterContentInit,
  Component,
} from '@angular/core';
import { action } from '@storybook/addon-actions';
import {
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  createKeyboardEvent,
  typeInElement,
} from '@terminus/fe-testing';
import { KEYS } from '@terminus/fe-utilities';
import {
  TsCSVEntryComponent,
  TsCSVEntryModule,
} from '@terminus/ui-csv-entry';
import { TsValidatorsService } from '@terminus/ui-validators';

export default {
  title: 'Components/Data Entry/CSV Entry',
  component: TsCSVEntryComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [TsCSVEntryModule],
    }),
  ],
};

export const basic = () => ({
  component: TsCSVEntryComponent,
  props: {
    blobGenerated: action('Generated file blob'),
  },
});
basic.parameters = {
  knobs: { disabled: true },
  docs: { iframeHeight: 300 },
};

export const customFooterContent = () => ({
  template: `
    <ts-csv-entry [columnCount]="cols" [footerDirection]="dir">
      <button>My custom footer button!</button>
    </ts-csv-entry>
  `,
  props: {
    cols: 3,
    dir: select('footerDirection', ['ltr', 'rtl'], 'ltr'),
  },
});
customFooterContent.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 300 },
};

export const customRowAndColumnCount = () => ({
  component: TsCSVEntryComponent,
  props: {
    columnCount: 4,
    rowCount: 6,
  },
});
customRowAndColumnCount.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 370 },
};

export const fullWidth = () => ({
  component: TsCSVEntryComponent,
  props: {
    columnCount: 1,
    fullWidth: true,
  },
});
fullWidth.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 300 },
};

export const staticHeaders = () => ({
  component: TsCSVEntryComponent,
  props: {
    columnHeaders: ['Header One', 'Header Two'],
  },
});
staticHeaders.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 300 },
};

@Component({
  selector: 'ts-csv-entry-wrapper',
  template: `<ts-csv-entry [columnValidators]="columnValidators"></ts-csv-entry>`,
})
class TsCSVEntryWrapper implements AfterContentInit {
  columnValidators = [null, this.validatorsService.url()];

  get element(): HTMLInputElement {
    return document.querySelectorAll("[id$='r_1Xc_1']")[0] as HTMLInputElement;
  }

  constructor(public validatorsService: TsValidatorsService) {}

  ngAfterContentInit(): void {
    // Fake user input to trigger a validation message
    setTimeout(() => {
      typeInElement('foo', this.element);
      const keyboardEvent = createKeyboardEvent('keyup', KEYS.ENTER);
      this.element.dispatchEvent(keyboardEvent);
    }, 10);
  }
}

export const columnValidation = () => ({
  component: TsCSVEntryWrapper,
});
columnValidation.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 300 },
};
