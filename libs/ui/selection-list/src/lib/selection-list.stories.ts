import {
  Component,
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
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
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
import { TsOptionModule } from '@terminus/ui-option';
import {
  TsSelectionListChange,
  TsSelectionListModule,
} from '@terminus/ui-selection-list';
import { TsStyleThemeTypes } from '@terminus/ui-utilities';

// TODO: Move data when removing existing demos app
import {
  State,
  STATES,
} from '../../../../../apps/showcase-ui/src/app/components/selection-list/data';

export default {
  title: 'Components/Selection List',
  decorators: [withKnobs],
};

const MODULE_IMPORTS = [
  BrowserAnimationsModule,
  ReactiveFormsModule,
  TsOptionModule,
  TsSelectionListModule,
];

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
      [allowMultiple]="true"
      [allowUserInput]="true"
      [reopenAfterSelection]="true"
      [displayFormatter]="formatter"
      [theme]="theme"
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
  @Input() public hint: string;
  @Input() public isDisabled: boolean;
  @Input() public label: string;
  @Input() public theme: TsStyleThemeTypes;
  @Input() public emulateLongQuery: boolean;

  public inProgress: boolean;
  public states = STATES.slice();
  public formControl = new FormControl('');
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
        delay(this.emulateLongQuery ? 6000 : 0),
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
    query = query.toLowerCase();
    console.log('query: ', query);
    if (query) {
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

export const userInput = () => ({
  moduleMetadata: { imports: [...MODULE_IMPORTS] },
  component: SelectionListWrapper,
  props: {
    emulateLongQuery: boolean('emulateLongQuery', true),
    hint: text('Hint', 'Begin typing to search..'),
    isDisabled: boolean('isDisabled', false),
    label: text('Label', 'Select states'),
    theme: select('theme', ['primary', 'accent', 'warn'], 'primary'),
    closed: action('Closed'),
    duplicate: action('Duplicate selection'),
    opened: action('Opened'),
    queryChange: action('Query changed'),
    selectionChange: action('Selection changed'),
    optionSelected: action('Option selected'),
    optionDeselected: action('Option deselected'),
  },
});

