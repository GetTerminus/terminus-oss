import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { action } from '@storybook/addon-actions';
import {
  array,
  boolean,
  withKnobs,
} from '@storybook/addon-knobs';
import {
  Observable,
  of,
} from 'rxjs';

import {
  TsRadioChange,
  TsRadioFormatFn,
  TsRadioGroupComponent,
  TsRadioGroupModule,
  TsRadioOption,
} from '@terminus/ui-radio-group';

const DEMO_ITEMS: TsRadioOption[] = [
  {
    foo: 'foo_value',
    bar: 'Foo Display',
    bing: 'Some helper text for my item',
  },
  {
    foo: 'bar_value',
    bar: 'Bar Display',
    bing: 'Some helper text for my item',
    disabled: false,
  },
  {
    foo: 'baz_value',
    bar: 'Baz Display',
    bing: 'Some helper text for my item',
  },
];

export default {
  title: 'Components/Data Entry/Radio Group',
  decorators: [withKnobs],
};

@Component({
  selector: 'ts-radio-wrapper',
  template: `
    <ts-radio-group
      [options]="items$ | async"
      [formatUILabelFn]="uiFormatter"
      [formatUISubLabelFn]="uiSubFormatter"
      [formatModelValueFn]="modelFormatter"
      [formControl]="myControl"
      [isDisabled]="isDisabled"
      (selectionChange)="selectionChange.emit($event)"
    ></ts-radio-group>
  `,
})
class RadioWrapper {
  uiFormatter: TsRadioFormatFn = v => v.bar;
  uiSubFormatter: TsRadioFormatFn = v => v.bing;
  modelFormatter: TsRadioFormatFn = v => v.foo;
  items$: Observable<TsRadioOption[]> = of(DEMO_ITEMS);
  myControl = new FormControl('foo_value', [Validators.required]);

  @Input() public isDisabled = false;
  @Output() public readonly selectionChange = new EventEmitter<TsRadioChange>();
}

const MODULE_METADATA = {
  imports: [
    FlexLayoutModule.withConfig({ useColumnBasisZero: false }),
    FormsModule,
    ReactiveFormsModule,
    TsRadioGroupModule,
  ],
  declarations: [RadioWrapper],
};

export const basicWithSubLabel = () => ({
  moduleMetadata: MODULE_METADATA,
  component: RadioWrapper,
  props: {
    isDisabled: boolean('isDisabled', false),
    selectionChange: action('DEMO: Radio change: '),
  },
});

export const themes = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsRadioGroupComponent,
  template: `
    <div fxLayout="row" fxLayoutGap="4em">
      <div>
        Primary:
        <ts-radio-group
          [options]="['one', 'two', 'three']"
          [formControl]="formControl"
        ></ts-radio-group>
      </div>

      <div>
        Accent:
        <ts-radio-group
          theme="accent"
          [options]="['one', 'two', 'three']"
          [formControl]="formControl"
        ></ts-radio-group>
      </div>

      <div>
        Warn:
        <ts-radio-group
          theme="warn"
          [options]="['one', 'two', 'three']"
          [formControl]="formControl"
        ></ts-radio-group>
      </div>
    </div>
  `,
  props: {
    formControl: new FormControl('one'),
  },
});
themes.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const visual = () => ({
  moduleMetadata: MODULE_METADATA,
  component: TsRadioGroupComponent,
  template: `
    Visual:
    <ts-radio-group
      [isVisual]="true"
      [options]="options"
      [formControl]="formControl"
    ></ts-radio-group>
    Visual (small):
    <ts-radio-group
      [isVisual]="true"
      [small]="true"
      [options]="options"
      [formControl]="formControl"
    ></ts-radio-group>
  `,
  props: {
    options: array('Options', ['one', 'two', 'three']),
    formControl: new FormControl('one'),
  },
});
visual.parameters = {
  actions: { disabled: true },
};
