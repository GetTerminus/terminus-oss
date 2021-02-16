import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import type { OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import type {
  FormControl,
  FormGroup,
} from '@angular/forms';

import { debounce } from '@terminus/fe-utilities';
import type {
  TsButtonActionTypes,
  TsButtonFunctionTypes,
  TsButtonThemeTypes,
} from '@terminus/ui-button';

import { TS_SEARCH_DEFAULT_OPTIONS } from '../ui-search.token';

/**
 * Define the user object interface
 */
export interface TsSearchResponse {
  /**
   * The search query
   */
  query: string;
}

/**
 * Define component default options interface
 */
export interface TsSearchDefaultOptions {
  debounceTime: number;
}

const INPUT_MINIMUM_LENGTH = 2;

/**
 * A presentational component to render a search form
 *
 * @example
 * <ts-search
 *              [autoSubmit]="true"
 *              buttonTheme="default"
 *              initialValue="My starting value"
 *              inputError="Special characters not supported"
 *              inputHint="Enter at least 17 characters"
 *              inputLabel="Search for a tactic"
 *              [isDisabled]="false"
 *              [isFocused]="false"
 *              [isSubmitting]="false"
 *              [noValidationOrHint]="true"
 *              [userCanClear]="true"
 *              (changed)="doSomething($event)"
 *              (cleared)="doSomething()"
 *              (submitted)="doSomething($event)"
 * ></ts-search>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-actions-search</example-url>
 */
@Component({
  selector: 'ts-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  host: { class: 'ts-search' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsSearch',
})
export class TsSearchComponent implements OnInit {
  /**
   * Define the button action label
   */
  public buttonAction: TsButtonActionTypes = 'Submit';

  /**
   * Define the button type
   */
  public buttonType: TsButtonFunctionTypes = 'search';

  /**
   * Get a reference to the search form control
   */
  public get searchFormControl(): FormControl | null {
    return this.searchForm.get('query') as FormControl;
  }

  /**
   * Define a helper to return the current query string. If current form value length below minimum length, set the query to empty string
   */
  public get currentQuery(): string {
    return this.searchForm.value.query
      && this.searchForm.value.query.length >= this.queryMinLength ? this.searchForm.value.query.trim() : '';
  }

  /**
   * Define a debounced method to emit the submission event
   */
  public debouncedEmit = debounce<TsSearchComponent>(this.emitSubmit, this.config.debounceTime);

  /**
   * Define the regular expression to validate the query
   */
  public inputPatternRegex = '[a-zA-Z0-9_ ]*';

  /**
   * Define the minimum length of a valid query
   */
  public queryMinLength = INPUT_MINIMUM_LENGTH;

  /**
   * Initialize the form
   */
  public searchForm: FormGroup = this.formBuilder.group({
    query: [
      null,
      [Validators.pattern(this.inputPatternRegex)],
    ],
  });

  /**
   * Store the search query
   */
  public query = '';

  /**
   * Define if the input should automatically submit values as typed
   */
  @Input()
  public autoSubmit = false;

  /**
   * Define an initial value for the search input
   */
  @Input()
  public initialValue: string | undefined;

  /**
   * Define an error message for the input
   */
  @Input()
  public inputError: string;

  /**
   * Define the hint text below the input
   */
  @Input()
  public inputHint = 'Enter at least two letters.';

  /**
   * Define the primary label for the input
   */
  @Input()
  public inputLabel = 'Search';

  /**
   * Define if the search should be disabled
   */
  @Input()
  public isDisabled = false;

  /**
   * Define if the search input should be focused initially
   */
  @Input()
  public isFocused = false;

  /**
   * Define if the search is currently submitting a query
   */
  @Input()
  public isSubmitting = false;

  /**
   * Define whether formControl needs a validation or a hint
   */
  @Input()
  public noValidationOrHint = false;

  /**
   * Define the button theme
   */
  @Input()
  public buttonTheme: TsButtonThemeTypes = 'default';

  /**
   * Define if the user can clear the search input
   */
  @Input()
  public userCanClear = true;

  /**
   * The event to emit when the internal input value is changed
   */
  @Output()
  public readonly changed = new EventEmitter<string>();

  /**
   * The event to emit when the internal input value is cleared
   */
  @Output()
  public readonly cleared = new EventEmitter<boolean>();

  /**
   * The event to emit when the form is submitted
   */
  @Output()
  public readonly submitted = new EventEmitter<TsSearchResponse>();

  constructor(
    @Inject(TS_SEARCH_DEFAULT_OPTIONS) public config: TsSearchDefaultOptions,
    private formBuilder: FormBuilder,
  ) { }

  /**
   * Seed the value if needed on initialization
   */
  public ngOnInit(): void {
    // istanbul ignore else
    if (this.initialValue) {
      this.searchForm.patchValue({ query: this.initialValue });
    }
  }

  /**
   * Fire events as needed after keyup events
   */
  public keyup(): void {
    this.changed.emit(this.currentQuery);

    // NOTE: We need to check for a valid query here.
    // istanbul ignore else
    if (this.autoSubmit && this.searchForm.valid) {
      this.debouncedEmit(this);
    }
  }

  /**
   * Emit the submitted event
   *
   * NOTE: This wrapper is needed so that we can pass the query value to the emitter
   */
  private emitSubmit(): void {
    this.submitted.emit({ query: this.currentQuery });
  }
}
