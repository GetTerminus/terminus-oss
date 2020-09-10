import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  date,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsInputModule } from '@terminus/ui-input';
import { TsSpacingModule } from '@terminus/ui-spacing';
import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';
import {
  TsValidatorsModule,
  TsValidatorsService,
} from '@terminus/ui-validators';

export default {
  title: 'Utilities/Input Validation/Universal',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        TsInputModule,
        TsSpacingModule,
        TsValidatorsModule,
        TsValidationMessagesModule,
      ],
    }),
  ],
};

type UniversalDemos
  = 'equalToControl'
  | 'inCollection'
  | 'password'
;

@Component({
  selector: 'ts-universal-wrapper',
  template: `
    <style>
    </style>
    <div *ngIf="demo === 'equalToControl'">
      <div fxLayout="row" fxLayoutGap="2em">
        <ts-input
          fxFlex
          [formControl]="compare1Control"
          [validateOnChange]="true"
          label="Input 1"
        ></ts-input>
        <ts-input
          fxFlex
          [formControl]="compare2Control"
          [validateOnChange]="true"
          label="Input 2"
        ></ts-input>
      </div>
    </div>

    <div *ngIf="demo === 'inCollection'" fxLayout="row" fxLayoutGap="4rem">
      <div fxFlex>
        <ts-input
          [formControl]="inCollectionShallowControl"
          [validateOnChange]="true"
          hint="Input a value that exists"
          label="Verify in shallow collection"
        ></ts-input>

        <div>
          Shallow collection:
          <pre>{{ this.shallowCollection | json }}</pre>
        </div>
      </div>

      <div fxFlex>
        <ts-input
          [formControl]="inCollectionDeepControl"
          [validateOnChange]="true"
          hint="Input a value that exists"
          label="Verify in deep collection"
        ></ts-input>

        <div>
          Deep collection:
          <pre>{{ this.deepCollection | json }}</pre>
        </div>
      </div>
    </div>

    <div *ngIf="demo === 'password'">
      <div fxLayout="row" fxLayoutGap="1rem">
<pre fxFlex>
// Valid passwords:
7GmfvH
V9Cpp7RGB9
29N74UV9ogt2UKpT3pZN3oLngp8Trkk4mCZfCgdE
FQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xNFQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdN
</pre>

        <pre fxFlex>
// Invalid passwords:
MA9Lv
xnhoQzDwAv
yGiUf>DfQ2
FQ49j BQ29
FQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdNFQ49j6BQ2BqerBnFMkeL7hfMw83fVsseAMV9xDJrTWd9J8xsdN1
</pre>
      </div>

      <ts-input
        [formControl]="passwordControl"
        [validateOnChange]="true"
        label="Password"
      ></ts-input>
    </div>
  `,
})
class UniversalWrapper implements OnInit {
  @Input() public demo: UniversalDemos;
  deepCollection = [
    {
      name: 'clementine',
      id: 1,
    },
    {
      name: 'pear',
      id: 2,
    },
    {
      name: 'watermelon',
      id: 3,
    },
  ];
  shallowCollection = this.deepCollection.slice().map(c => c.name);
  myCollectionFn = a => a.name;
  compare1Control = new FormControl('foo');
  compare2Control = new FormControl('fo');
  inCollectionShallowControl = new FormControl('carrot', [this.validatorsService.inCollection(this.shallowCollection)]);
  inCollectionDeepControl = new FormControl('carrot', [this.validatorsService.inCollection(this.deepCollection, this.myCollectionFn)]);
  passwordControl = new FormControl('123', [this.validatorsService.password()]);

  constructor(private validatorsService: TsValidatorsService) {}

  ngOnInit(): void {
    this.compare1Control.setValidators([
      this.validatorsService.equalToControl(this.compare2Control),
    ]);

    this.compare2Control.setValidators([
      this.validatorsService.equalToControl(this.compare1Control),
    ]);
  }
}

export const equalToControl = () => ({
  component: UniversalWrapper,
  props: {
    demo: 'equalToControl',
  },
});
equalToControl.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
};

export const inCollection = () => ({
  component: UniversalWrapper,
  props: {
    demo: 'inCollection',
  },
});
inCollection.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
  docs: { iframeHeight: 420 },
};

export const password = () => ({
  component: UniversalWrapper,
  props: {
    demo: 'password',
  },
});
password.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
  docs: { iframeHeight: 260 },
};
