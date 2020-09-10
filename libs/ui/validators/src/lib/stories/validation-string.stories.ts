import {
  Component,
  Input,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsInputModule } from '@terminus/ui-input';
import { TsValidationMessagesModule } from '@terminus/ui-validation-messages';
import {
  TsValidatorsModule,
  TsValidatorsService,
} from '@terminus/ui-validators';

export default {
  title: 'Utilities/Input Validation/String',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        TsInputModule,
        TsValidatorsModule,
        TsValidationMessagesModule,
      ],
    }),
  ],
};

type StringDemos
  = 'lowercase'
  | 'uppercase'
  | 'domain'
  | 'url'
;

@Component({
  selector: 'ts-string-wrapper',
  template: `
    <div *ngIf="demo === 'lowercase'">
      <ts-input [formControl]="lowercaseControl" [validateOnChange]="true" hint="Must contain at least 4 lowercase"></ts-input>
    </div>

    <div *ngIf="demo === 'uppercase'">
      <ts-input [formControl]="uppercaseControl" [validateOnChange]="true" hint="Must contain at least 4 uppercase"></ts-input>
    </div>

    <div *ngIf="demo === 'domain'">
      <div fxLayout="row" fxLayoutGap="1rem">
<pre fxFlex>
  // Valid domains:
  foo.com
  foo.com/blah_blah_(wikipedia)
  www.example.com/foo/?bar=baz&inga=42&quux
  userid:password@example.com:8080/
  ⌘.ws
  oo.bar/baz
  foo.bar/?q=Test%20URL-encoded%20stuff
  223.255.255.254
  </pre>

        <pre fxFlex>
  // Invalid domains:
  http://
  http://foo.bar?q=Spaces should be encoded
  rdar://1234
  1.1.1.1.1
  .www.foo.bar./
    shouldfail.com
  </pre>
      </div>
      <ts-input [formControl]="domainControl" [validateOnChange]="true" label="Domain"></ts-input>
    </div>

    <div *ngIf="demo === 'url'">
      <div fxLayout="row" fxLayoutGap="1rem">
<pre fxFlex>
// Valid URLs:
http://foo.com
http://foo.com/blah_blah_(wikipedia)
https://www.example.com/foo/?bar=baz&inga=42&quux
http://userid:password@example.com:8080/
http://⌘.ws
ftp://foo.bar/baz
http://foo.bar/?q=Test%20URL-encoded%20stuff
http://223.255.255.254
</pre>

        <pre fxFlex>
// Invalid URLs:
http://
http://foo.bar?q=Spaces should be encoded
foo.com
rdar://1234
http://1.1.1.1.1
http://.www.foo.bar./
http:// shouldfail.com
</pre>
      </div>
      <ts-input [formControl]="urlControl" [validateOnChange]="true" label="Url"></ts-input>
    </div>
  `,
})
class StringWrapper {
  lowercaseControl = new FormControl('abcDEFGH', [this.validatorsService.lowercase(4)]);
  uppercaseControl = new FormControl('ABCdefgh', [this.validatorsService.uppercase(4)]);
  domainControl = new FormControl('1.1.1.1.1', [this.validatorsService.domain()]);
  urlControl = new FormControl('foo.com', [this.validatorsService.url()]);
  @Input() public demo: StringDemos;

  constructor(private validatorsService: TsValidatorsService) {}
}

export const lowercase = () => ({
  component: StringWrapper,
  props: {
    demo: 'lowercase',
  },
});
lowercase.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
};

export const uppercase = () => ({
  component: StringWrapper,
  props: {
    demo: 'uppercase',
  },
});
uppercase.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
};

export const domain = () => ({
  component: StringWrapper,
  props: {
    demo: 'domain',
  },
});
domain.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
  docs: { iframeHeight: 320 },
};

export const url = () => ({
  component: StringWrapper,
  props: {
    demo: 'url',
  },
});
url.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  a11y: { disabled: true },
  docs: { iframeHeight: 320 },
};
