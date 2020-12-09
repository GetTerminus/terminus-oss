import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import type { OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Subscription,
} from 'rxjs';
import type { ObservableInput } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import {
  inputHasChanged,
  untilComponentDestroyed,
} from '@terminus/fe-utilities';

/**
 * The structure of a {@link TsPaginatorComponent} page
 */
export interface TS_PAGINATOR_PAGE {
  pageNumber: number | string;
  pageDisplay: number | string;
  [key: string]: unknown;
}

/**
 * A paginator component for tabular data.
 *
 * @example
 * <ts-paginator
 *              [activePage]="2"
 *              [isSimpleMode]="true"
 *              [isPreviousDisabled]="true"
 *              [isNextDisabled]="true"
 *              nextPageTooltip="View next results"
 *              [pages]="myPagesArray"
 *              paginatorSummary="1 - 25 of 212 Accounts"
 *              previousPageTooltip="View previous results"
 *              (previousPageClicked)="myMethod()"
 *              (nextPageClicked)="myMethod()"
 *              (pageClicked)="myMethod($event)"
 * ></ts-paginator>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-navigation-paginator</example-url>
 */
@Component({
  selector: 'ts-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  host: {
    'class': 'ts-paginator',
    '[class.ts-paginator--simple]': 'isSimpleMode',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsPaginator',
})
export class TsPaginatorComponent implements OnInit, OnChanges, OnDestroy {
  public pages$ = new BehaviorSubject<TS_PAGINATOR_PAGE[]>([]);
  public activePageIndex$ = new BehaviorSubject<number>(0);
  public templateDisablePrevious$ = new BehaviorSubject<boolean>(false);
  public templateDisableNext$ = new BehaviorSubject<boolean>(false);
  private subscription: Subscription;
  private isPreviousDisabled$ = new BehaviorSubject<boolean>(false);
  private isNextDisabled$ = new BehaviorSubject<boolean>(false);

  /**
   * Define the active page
   */
  @Input()
  public set activePage(value: TS_PAGINATOR_PAGE) {
    this._activePage = value ? value : (this.pages && this.pages[0]);
    this.activePageIndex$.next(this.findIndexByProperty(this.pages, 'pageNumber', this._activePage.pageNumber));
    this.changeDetectorRef.detectChanges();
  }
  public get activePage(): TS_PAGINATOR_PAGE {
    return this._activePage;
  }
  private _activePage: TS_PAGINATOR_PAGE;

  /**
   * Allow manual override of disabled state
   */
  @Input()
  public set isPreviousDisabled(value: boolean) {
    this.isPreviousDisabled$.next(value);
  }
  public get isPreviousDisabled(): boolean {
    return this.isPreviousDisabled$.getValue();
  }

  /**
   * Allow manual override of disabled state
   */
  @Input()
  public set isNextDisabled(value: boolean) {
    this.isNextDisabled$.next(value);
  }
  public get isNextDisabled(): boolean {
    return this.isNextDisabled$.getValue();
  }

  /**
   * Define the array of pages
   */
  @Input()
  public set pages(value: TS_PAGINATOR_PAGE[]) {
    this._pages = value ? value : [];
    this.pages$.next(this._pages);
  }
  public get pages(): TS_PAGINATOR_PAGE[] {
    return this._pages;
  }
  private _pages: TS_PAGINATOR_PAGE[] = [];

  /**
   * Define the message to display before the paginator buttons
   */
  @Input()
  public paginatorSummary: string;

  /**
   * Define the tooltip message for the previous page tooltip
   */
  @Input()
  public previousPageTooltip = 'Previous';

  /**
   * Define the tooltip message for the next page tooltip
   */
  @Input()
  public nextPageTooltip = 'Next';

  /**
   * Determine if the paginator should be in 'simple' mode
   *
   * Simple mode hides all page buttons.
   */
  @Input()
  public isSimpleMode = false;

  /**
   * Emit an event when previous page button clicked
   */
  @Output()
  public readonly previousPageClicked = new EventEmitter<void>();

  /**
   * Emit an event when next page button clicked
   */
  @Output()
  public readonly nextPageClicked = new EventEmitter<void>();

  /**
   * Emit an event when a page button is clicked
   */
  @Output()
  public readonly pageClicked = new EventEmitter<number>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  /**
   * Set up subscriptions
   */
  public ngOnInit(): void {
    this.setUpSubscriptions();
  }

  /**
   * Set the active page index if the 'activePage' changes
   *
   * @param changes - The SimpleChanges object
   */
  public ngOnChanges(changes: SimpleChanges): void {
    // istanbul ignore else
    if (inputHasChanged(changes, 'activePage') && changes.activePage.firstChange && this.pages.length) {
      this.activePageIndex$.next(this.findIndexByProperty(this.pages, 'pageNumber', changes.activePage.currentValue.pageNumber));
    }
  }

  /**
   * Needed for 'untilComponentDestroyed'
   */
  public ngOnDestroy(): void {}

  /**
   * Set up subscriptions to watch the activePageIndex and button disable streams
   */
  private setUpSubscriptions(): void {
    // istanbul ignore if
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = combineLatest<
      ObservableInput<number>,
      ObservableInput<boolean>,
      ObservableInput<boolean>,
      ObservableInput<TS_PAGINATOR_PAGE[]>
    >([
      this.activePageIndex$,
      this.isPreviousDisabled$,
      this.isNextDisabled$,
      this.pages$,
    ]).pipe(
      distinctUntilChanged(),
      untilComponentDestroyed(this),
    ).subscribe(([pageIndex, isPreviousDisabled, isNextDisabled]) => {
      this.templateDisablePrevious$.next((pageIndex === 0 || isPreviousDisabled));
      this.templateDisableNext$.next(pageIndex === (this.pages.length - 1) || isNextDisabled);
    });
  }

  /**
   * Find the index of an object within an array based on an object property
   *
   * @param array - The array to search
   * @param property - The property within the object to use in the comparison
   * @param value - The value to match
   * @returns The found index number
   */
  public findIndexByProperty(array: unknown[], property: string, value: number | string): number {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][property] === +value) {
        return i;
      }
    }
    return -1;
  }
}
