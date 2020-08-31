import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
} from '@angular/forms';
import {
  DomSanitizer,
  SafeHtml,
} from '@angular/platform-browser';
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLink';
import { faGripLines } from '@fortawesome/pro-solid-svg-icons/faGripLines';
import { faTable } from '@fortawesome/pro-solid-svg-icons/faTable';
import {
  merge,
  Observable,
  of,
} from 'rxjs';
import {
  catchError,
  map,
  startWith,
  switchMap,
} from 'rxjs/operators';

import { untilComponentDestroyed } from '@terminus/fe-utilities';
import {
  TsPaginatorComponent,
  TsPaginatorMenuItem,
} from '@terminus/ui-paginator';
import { TsSortDirective } from '@terminus/ui-sort';
import {
  TsColumn,
  TsTableColumnsChangeEvent,
  TsTableComponent,
  TsTableDataSource,
  TsTableDensity,
} from '@terminus/ui-table';

/**
 * Extend the TsColumn interface with properties our component needs
 */
export interface CustomColumn extends TsColumn {
  // The UI text for the column dropdown
  display: string;
  // The associated FormControl
  control: FormControl;
  // The column name
  name: string;
  // The column width
  width: number;
}

interface GithubApi {
  items: GithubIssue[];
  // NOTE: Format controlled by GitHub
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_count: number;
}

interface GithubIssue {
  // NOTE: Format controlled by GitHub
  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at: string;
  number: string;
  state: string;
  title: string;
  comments: string;
}

/**
 * An example database that the data source uses to retrieve data for the table.
 */
class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  public getRepoIssues(sort: string, order: string, page: number, perPage: number): Observable<GithubApi> {
    console.log('Hitting the GitHub API');
    const href = `https://api.github.com/search/issues`;
    const requestUrl = `${href}?q=repo:GetTerminus/terminus-ui`;
    const requestParams = `&sort=${sort}&order=${order}&page=${page + 1}&per_page=${perPage}`;
    return this.http.get<GithubApi>(`${requestUrl}${requestParams}`);
  }
}

@Component({
  selector: 'ts-table-wrapper',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableWrapper implements OnInit, AfterViewInit, OnDestroy {
  @Input() public density: TsTableDensity;
  @Input() public firstSticky: boolean;
  @Input() public lastSticky: boolean;
  @Input() public firstColumnNoWrap = true;

  @Input() public columnsSource: CustomColumn[] = [];
  @Input() public headerSticky: boolean;
  @Input() public footerSticky: boolean;
  @Input() public constrainContainer: boolean;
  @Input() public isExpandable: boolean;
  public expandedRow: string | null = null;
  public savedResponse: GithubApi | null = null;
  public useCachedData = true;
  public allPossibleColumns: CustomColumn[];
  public columnsForm = this.formBuilder.group({});
  public exampleDatabase!: ExampleHttpDao;
  public dataSource = new TsTableDataSource<GithubIssue>();
  public resultsLength = 0;
  public visibleColumns: TsColumn[] = [];
  public allFormControlChanges$: Observable<any>;
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  public latestCreationDate = new Date(2020, 2, 23);
  public iconExternal = faExternalLink;
  public iconTable = faTable;
  public iconDrag = faGripLines;

  @ViewChild(TsSortDirective, { static: true })
  public sort!: TsSortDirective;

  @ViewChild('myTable', { static: false })
  public readonly myTable!: TsTableComponent;

  @Output() public readonly columnsChange = new EventEmitter<TsTableColumnsChangeEvent>();

  constructor(
    private domSanitizer: DomSanitizer,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.allPossibleColumns = this.columnsSource.slice();
    this.allFormControlChanges$ = merge(...this.allPossibleColumns.map(c => c.control && c.control.valueChanges));
    this.setVisibleColumns();
  }

  public ngAfterViewInit(): void {
    this.setUpTable();

    this.allFormControlChanges$.pipe(untilComponentDestroyed(this)).subscribe(() => {
      this.setVisibleColumns();
    });
  }

  // NOTE: Needed for untilComponentDestroyed
  public ngOnDestroy(): void {}

  public setVisibleColumns(): void {
    console.log('this.setVisibleColumns: ', this.visibleColumns, this.allPossibleColumns);
    this.visibleColumns = this.allPossibleColumns.filter(c => c.control && c.control.value);
  }

  /**
   * Set up the database, sorting and API calls
   */
  public setUpTable(): void {
    this.exampleDatabase = new ExampleHttpDao(this.http);

    // Fetch new data anytime the sort is changed, the page is changed, or the records shown per
    // page is changed
    merge(this.sort.sortChange)
      .pipe(
        startWith({}),
        switchMap(() => {
          if (this.useCachedData && this.savedResponse && this.savedResponse.items) {
            return of(this.savedResponse);
          }
          return this.exampleDatabase.getRepoIssues(
            this.sort.active,
            this.sort.direction,
            // Page number:
            1,
            // Per page:
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            10,
          );
        }),
        map(data => {
          // console.log('Demo: fetched data: ', data);
          this.savedResponse = data;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          console.warn('GitHub API rate limit has been reached!');
          return of([]);
        }),
      ).subscribe(data => {
        this.dataSource.data = data;
      });
  }

  public clearCachedData(): void {
    this.savedResponse = null;
  }

  /**
   * Sanitize HTML content before injecting it
   *
   * @param content - The HTML to sanitize
   * @returns The safe HTML
   */
  public sanitize(content): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(content);
  }

  /**
   * Reorder columns list when a list item is dropped
   *
   * @param event - The drop event
   */
  public columnDropped(event: CdkDragDrop<string[]>): void {
    const columns = this.allPossibleColumns.slice();
    moveItemInArray(columns, event.previousIndex, event.currentIndex);

    this.allPossibleColumns = columns;
    this.setVisibleColumns();
    this.changeDetectorRef.detectChanges();
  }

  public trackBy(index: number, item: GithubIssue): string {
    return item.number;
  }

  public expand(row) {
    console.log('expand: ', row);
    if (row && row.id) {
      this.expandedRow = (this.expandedRow === row.id) ? null : row.id;
    }
  }
}
