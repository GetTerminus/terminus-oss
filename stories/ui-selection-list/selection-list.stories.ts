import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  color,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';
import {
  delay,
  map,
  tap,
} from 'rxjs/operators';

import { untilComponentDestroyed } from '@terminus/fe-utilities';
import { TsInputModule } from '@terminus/ui-input';
import {
  TsOptionComponent,
  TsOptionModule,
} from '@terminus/ui-option';
import {
  TsSelectionListChange,
  TsSelectionListComponent,
  TsSelectionListModule,
  TsSelectionListPanelComponent,
  TsSelectionListTriggerDirective,
} from '@terminus/ui-selection-list';

import {
  State,
  STATES,
} from './data';

@Component({
  selector: 'ts-selection-list-wrapper',
  template: `
    <div style="margin-bottom:2rem;">
      <button (click)="seedSelections()">Seed initial selections</button>
    </div>
    <ts-selection-list
      [label]="label"
      [hint]="hint"
      [isDisabled]="isDisabled"
      [formControl]="formControl"
      [allowMultiple]="allowMultiple"
      [allowUserInput]="true"
      [reopenAfterSelection]="true"
      [displayFormatter]="formatter"
      [showProgress]="inProgress"
      (duplicateSelection)="duplicate.emit($event)"
      (selectionChange)="selectionChange.emit($event)"
      (queryChange)="queryHasChanged($event)"
      (closed)="closed.emit($event)"
      (opened)="opened.emit($event)"
      (optionSelected)="optionSelected.emit($event)"
      (optionDeselected)="optionDeselected.emit($event)"
    >
      <ts-option [value]="state" [option]="state" *ngFor="let state of results | async">{{ state.name }}</ts-option>
    </ts-selection-list>
  `,
})
class SelectionListWrapper implements OnInit, OnDestroy {
  @Input() public allowMultiple = true;
  @Input() public hint: string;
  @Input() public isDisabled: boolean;
  @Input() public label: string;
  @Input() public emulateLongQuery: boolean;
  @Input() public formControl = new FormControl('');
  public inProgress: boolean;
  public states = STATES.slice();
  public query$ = new BehaviorSubject('');
  public results: Observable<State[]> | undefined;
  @Output() public readonly opened = new EventEmitter<void>();
  @Output() public readonly closed = new EventEmitter<void>();
  @Output() public readonly queryChange = new EventEmitter<string>();
  @Output() public readonly duplicate = new EventEmitter<TsSelectionListChange>();
  @Output() public readonly selectionChange = new EventEmitter<TsSelectionListChange>();
  @Output() public readonly optionSelected = new EventEmitter<TsSelectionListChange>();
  @Output() public readonly optionDeselected = new EventEmitter<TsSelectionListChange>();

  public ngOnInit() {
    this.results = this.query$
      .pipe(
        untilComponentDestroyed(this),
        tap(() => {
          this.inProgress = true;
        }),
        delay(this.emulateLongQuery ? 2000 : 0),
        tap(() => {
          this.inProgress = false;
        }),
        map(query => this.queryStates(query)),
      );
  }

  public ngOnDestroy(): void {}

  public seedSelections(selections: State[] = STATES.slice(0, 8)): void {
    this.formControl.setValue(selections);
  }

  public queryStates(query: string): State[] {
    if (query) {
      query = query.toLowerCase();
      const letters = query.split('').map(l => `${l}.*`).join('');
      const regex = new RegExp(letters, 'ig');
      return this.states.filter(s => !!s.name.match(regex));
    }
    // if no query, return first 10 states
    return STATES.slice(0, 10);
  }

  public queryHasChanged(query: string): void {
    this.query$.next(query);
    this.queryChange.emit(query);
  }

  public formatter(value: State): string {
    return value.name;
  }
}

export default {
  title: 'Components/Data Entry/Selection List',
  component: TsSelectionListComponent,
  subcomponents: {
    TsOptionComponent,
    TsSelectionListPanelComponent,
    TsSelectionListTriggerDirective,
  },
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        TsOptionModule,
        TsSelectionListModule,
        TsInputModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `
    <div style="margin-bottom: 2rem;">
      <ts-selection-list
        [allowMultiple]="allowMultiple"
        [label]="label"
        [hint]="hint"
        [formControl]="formControl"
        [allowUserInput]="false"
      >
        <ts-option [value]="f" [option]="f" *ngFor="let f of fruit">{{ f }}</ts-option>
      </ts-selection-list>
    </div>
    <div>
      <ts-selection-list
        [allowMultiple]="allowMultiple"
        [label]="label"
        [hint]="hint"
        [formControl]="formControl"
        [allowUserInput]="false"
        [isDisabled]="true"
      >
        <ts-option [value]="f" [option]="f" *ngFor="let f of fruit">{{ f }}</ts-option>
      </ts-selection-list>
    </div>
  `,
  props: {
    hint: text('Hint', 'Select an option..'),
    label: text('Label', 'Select fruit'),
    formControl: new FormControl(['Grape']),
    allowMultiple: boolean('Allow multiple selections', false),
    fruit: ['Apple', 'Grape', 'Peach', 'Pear', 'Banana'],
  },
});
basic.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 340 },
};

export const userInputSingle = () => ({
  component: SelectionListWrapper,
  props: {
    allowMultiple: false,
    emulateLongQuery: boolean('Emulate long-running query', false),
    hint: 'Begin typing to search..',
    isDisabled: boolean('Disabled', false),
    label: 'Select states',
    closed: action('Closed'),
    duplicate: action('Duplicate selection'),
    opened: action('Opened'),
    queryChange: action('Query changed'),
    selectionChange: action('Selection changed'),
    optionSelected: action('Option selected'),
    optionDeselected: action('Option deselected'),
    formControl: new FormControl(STATES.slice(0, 4)),
  },
});
userInputSingle.parameters = {
  docs: { iframeHeight: 340 },
};

export const userInputMultiple = () => ({
  component: SelectionListWrapper,
  props: {
    emulateLongQuery: boolean('Emulate long-running query', false),
    hint: 'Begin typing to search..',
    isDisabled: boolean('Disabled', false),
    label: 'Select states',
    closed: action('Closed'),
    duplicate: action('Duplicate selection'),
    opened: action('Opened'),
    queryChange: action('Query changed'),
    selectionChange: action('Selection changed'),
    optionSelected: action('Option selected'),
    optionDeselected: action('Option deselected'),
    formControl: new FormControl(STATES.slice(0, 4)),
  },
});
userInputMultiple.parameters = {
  docs: { iframeHeight: 340 },
};

export const disabledMultiple = () => ({
  component: SelectionListWrapper,
  props: {
    hint: 'Begin typing to search..',
    isDisabled: boolean('Disabled', true),
    label: 'Select states',
    formControl: new FormControl(STATES.slice(0, 4)),
  },
});
disabledMultiple.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 340 },
};

export const error = () => ({
  template: `
    <div style="margin-bottom: 2rem;">
      <ts-selection-list
        [label]="label"
        [hint]="hint"
        [formControl]="formControl"
        [allowUserInput]="false"
        errorMessage="At least one option must be selected"
      >
        <ts-option [value]="f" [option]="f" *ngFor="let f of fruit">{{ f }}</ts-option>
      </ts-selection-list>
    </div>
    <div>
      <ts-selection-list
        [label]="label"
        [hint]="hint"
        [formControl]="formControl"
        [allowUserInput]="false"
        [isDisabled]="true"
        errorMessage="At least one option must be selected"
      >
        <ts-option [value]="f" [option]="f" *ngFor="let f of fruit">{{ f }}</ts-option>
      </ts-selection-list>
    </div>
  `,
  props: {
    hint: 'Select an option..',
    label: 'Select fruit',
    formControl: new FormControl([]),
    fruit: ['Apple', 'Grape', 'Peach', 'Pear', 'Banana'],
  },
});
error.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 340 },
};

@Component({
  selector: 'ts-selection-list-wrapper-css',
  template: `
    <ts-selection-list
      label="Select a state"
      [allowMultiple]="false"
      [allowUserInput]="false"
      [formControl]="myCtrl"
    >
      <ts-option [value]="f" [option]="f" *ngFor="let f of fruit">{{ f }}</ts-option>
    </ts-selection-list>
  `,
})
class SelectionListWrapperCss implements OnInit {
  defaultColor = 'pink';
  colorVariable = '--ts-sl-backdrop-backgroundColor';
  public myCtrl = new FormControl(['peach']);
  @Input() public fruit: ReadonlyArray<string>;
  @Input()
  public set color(value: string) {
    this._color = value ? value : this.defaultColor;
    this.setColor(this._color);
  }
  public get color(): string {
    return this._color;
  }
  private _color = this.defaultColor;

  constructor(public elementRef: ElementRef) {}

  public ngOnInit(): void {
    setTimeout(() => {
      this.elementRef.nativeElement.querySelector('.ts-selection-list-trigger').click();
    }, 10);
  }

  setColor(colorName: string): void {
    document.documentElement.style.setProperty(this.colorVariable, colorName);
  }
}

export const customBackdropColor = () => ({
  component: SelectionListWrapperCss,
  props: {
    hint: 'Begin typing to search..',
    label: 'Select states',
    formControl: new FormControl(['peach']),
    fruit: ['apple', 'grape', 'peach', 'pear', 'banana'],
    color: color('Backdrop color', 'rgba(138, 8, 192, .4)'),
  },
});
disabledMultiple.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 340 },
};

export const alignmentWithInput = () => ({
  template: `
  <div style="display: flex;">
    <ts-input
      placeholder="Foo"
      label="My input"
      hint="My hint!"
    ></ts-input>
    <ts-selection-list
      [label]="label"
      [hint]="hint"
      [formControl]="formControl"
    >
      <ts-option [value]="state" [option]="state" *ngFor="let state of results | async">{{ state.name }}</ts-option>
    </ts-selection-list>
  </div>
  `,
  props: {
    hint: 'Select an option..',
    label: 'Select states',
    formControl: new FormControl(['Grape']),
    fruit: ['Apple', 'Grape', 'Peach', 'Pear', 'Banana'],
  },
});
alignmentWithInput.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 340 },
};

