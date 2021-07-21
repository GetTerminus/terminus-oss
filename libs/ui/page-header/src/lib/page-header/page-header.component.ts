import { ConnectionPositionPair, CdkOverlayOrigin } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

/**
 * Static route for breadcrumb inside {@link TsPageHeaderComponent}
 */
export interface TS_PAGE_HEADER_STATIC_BREADCRUMB {
  display: string;
  [key: string]: unknown;
}

/**
 * Route for breadcrumb inside {@link TsPageHeaderComponent}
 */
export interface TS_PAGE_HEADER_ROUTE extends TS_PAGE_HEADER_STATIC_BREADCRUMB {
  route: string | string[];
}

/**
 * Single metadata item inside {@link TsPageHeaderComponent}
 */
export interface TS_PAGE_HEADER_METADATA {
  key: string;
  value: string;
  url?: string;
}

/**
 * Allowed header route types for {@link TsPageHeaderComponent}
 */
export type TS_PAGE_HEADER_ROUTES = (TS_PAGE_HEADER_ROUTE | TS_PAGE_HEADER_STATIC_BREADCRUMB)[];

/**
 * A higher-order page header component for standard pages.
 *
 * @example
 * <ts-page-header
 *              [breadcrumbs]="myBreadcrumbs"
 *              [lastUpdatedDate]="myDate"
 *              [isPanelOpen]="true"
 *              [pageMenuContents]="myMenuLinks"
 *              title="My page title!"
 *              titleLevel="h2"
 * ></ts-page-header>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-structure-page-header</example-url>
 */
@Component({
  selector: 'ts-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  host: { class: 'ts-page-header' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsPageHeader',
})
export class TsPageHeaderComponent {
  /**
   * Define the panel positions for the page menu
   */
  public panelPositions = [
    new ConnectionPositionPair({
      originX: 'start',
      originY: 'bottom',
    }, {
      overlayX: 'start',
      overlayY: 'top',
    }),
  ];

  /**
   * Return the width of the title
   */
  public get titleWidth(): number {
    const caretWidth = 26;
    return parseInt(this.trigger.elementRef.nativeElement.offsetWidth, 10) + caretWidth;
  }

  /**
   * Define access to the title trigger element
   */
  @ViewChild('trigger', { static: true })
  public trigger!: CdkOverlayOrigin;

  /**
   * Define the array of breadcrumbs
   */
  @Input()
  public breadcrumbs: ReadonlyArray<TS_PAGE_HEADER_ROUTE | TS_PAGE_HEADER_STATIC_BREADCRUMB>;

  /**
   * Define the date when the page was last updated
   */
  @Input()
  public lastUpdatedDate: string | Date;

  /**
   * Define if the title panel is open
   */
  @Input()
  public isPanelOpen = false;

  /**
   * Define the pairs of metadata to display below the title
   */
  @Input()
  public metadata: ReadonlyArray<TS_PAGE_HEADER_METADATA>;

  /**
   * Define the array of pages that will populate the title dropdown
   */
  @Input()
  public pageMenuContents: ReadonlyArray<TS_PAGE_HEADER_ROUTE> | undefined;

  /**
   * Define the page title
   */
  @Input()
  public title: string;

  /**
   * Define the semantic level of the title
   */
  @Input()
  public titleLevel: 'h1' | 'h2' | 'h3' = 'h1';

  constructor(public elementRef: ElementRef) {}

  /**
   * Toggle the open state of the panel
   */
  public togglePanel(): void {
    // istanbul ignore else
    if (this.pageMenuContents && this.pageMenuContents.length) {
      this.isPanelOpen = !this.isPanelOpen;
    }
  }
}
