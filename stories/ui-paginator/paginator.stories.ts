import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TS_PAGINATOR_PAGE,
  TsPaginatorComponent,
  TsPaginatorModule,
} from '@terminus/ui-paginator';

export default {
  title: 'Components/Navigation/Paginator',
  component: TsPaginatorComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        TsPaginatorModule,
      ],
    }),
  ],
};

const myPagesArray: TS_PAGINATOR_PAGE[] = Array.from(Array(12)).map((v, i) => ({
  pageNumber: i,
  pageDisplay: i + 1,
}));

@Component({
  selector: 'ts-paginator-wrapper',
  template: `
    <ts-paginator
      [isPreviousDisabled]="disablePrev"
      [isNextDisabled]="disableNext"
      [activePage]="activePage"
      [pages]="pages"
      [paginatorSummary]="paginatorSummary"
      [isSimpleMode]="simpleMode"
      (previousPageClicked)="previous()"
      (nextPageClicked)="next()"
      (pageClicked)="pageClicked($event)"
    ></ts-paginator>
  `,
})
class TsPaginatorWrapper {
  @Input()
  public set activePageIndex(value: number) {
    this._activePageIndex = value;
    this.activePage = this.pages[value];
    this.changeDetectorRef.detectChanges();
  }
  public get activePageIndex(): number {
    return this._activePageIndex;
  }
  private _activePageIndex = 0;

  @Input() disablePrev = false;
  @Input() disableNext = false;
  @Input() pages: TS_PAGINATOR_PAGE[];
  @Input() activePage: TS_PAGINATOR_PAGE;
  @Input() paginatorSummary: string;
  @Input() simpleMode = false;
  @Output() readonly previousPage = new EventEmitter<boolean>();
  @Output() readonly nextPage = new EventEmitter<boolean>();

  previous() {
    this.activePageIndex = this.findIndexByProperty(this.pages, 'pageNumber', this.activePageIndex - 1);
    this.activePage = this.pages[this.activePageIndex];
    this.previousPage.emit();
  }

  next() {
    this.activePageIndex = this.findIndexByProperty(this.pages, 'pageNumber', this.activePageIndex + 1);
    this.activePage = this.pages[this.activePageIndex];
    this.nextPage.emit();
  }

  pageClicked(n: number) {
    this.activePageIndex = n;
    this.activePage = this.pages[n];
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public findIndexByProperty(array: unknown[], property: string, value: number | string): number {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][property] === +value) {
        return i;
      }
    }
    return -1;
  }
}

export const basic = () => ({
  component: TsPaginatorWrapper,
  props: {
    pages: myPagesArray,
    paginatorSummary: text('Summary', '1 – 25 of 461 Opportunities'),
    activePageIndex: number('Active page index', 0),
    disablePrev: boolean('Disable previous', false),
    disableNext: boolean('Disable next', false),
    simpleMode: boolean('Simple mode', false),
    previousPage: action('Previous page clicked'),
    nextPage: action('Next page clicked'),
  },
});

export const simpleMode = () => ({
  component: TsPaginatorWrapper,
  props: {
    pages: myPagesArray,
    paginatorSummary: text('Summary', '1 – 25 of 461 Opportunities'),
    activePageIndex: number('Active page index', 0),
    disablePrev: boolean('Disable previous', false),
    disableNext: boolean('Disable next', false),
    simpleMode: boolean('Simple mode', false),
    previousPage: action('Previous page clicked'),
    nextPage: action('Next page clicked'),
  },
});
simpleMode.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
};
