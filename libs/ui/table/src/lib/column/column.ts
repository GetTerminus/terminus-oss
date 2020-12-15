import { CdkColumnDef } from '@angular/cdk/table';
import {
  Directive,
  ElementRef,
  Input,
} from '@angular/core';

/**
 * Allowed column alignments
 */
export type TsTableColumnAlignment
  = 'left'
  | 'center'
  | 'right'
;

/**
 * An array of the allowed {@link TsTableColumnAlignment} for checking values
 */
export const tsTableColumnAlignmentTypesArray: TsTableColumnAlignment[] = [
  'left',
  'center',
  'right',
];

/**
 * Column definition for the {@link TsTableComponent}.
 *
 * Defines a set of cells available for a table column.
 */
@Directive({
  selector: '[tsColumnDef]',
  providers: [
    {
      provide: CdkColumnDef,
      useExisting: TsColumnDefDirective,
    },
    {
      provide: 'MAT_SORT_HEADER_COLUMN_DEF',
      useExisting: TsColumnDefDirective,
    },
  ],
})
export class TsColumnDefDirective extends CdkColumnDef {

  /**
   * Define a unique name for this column
   *
   * NOTE: We must rename here so that the property matches the extended CdkColumnDef class
   *
   * FIXME:
   * `ERROR in /Users/bc/code/Terminus/terminus-oss/libs/ui/table/src/lib/column/column.ts
   *  ERROR in /Users/bc/code/Terminus/terminus-oss/libs/ui/table/src/lib/column/column.ts(51,10):
   *  TS2610: 'name' is defined as an accessor in class 'CdkColumnDef', but is overridden here in 'TsColumnDefDirective' as an instance
   *  property.`
   */
  // @ts-ignore - See above
  // @Input('tsColumnDef') public name!: string;

  @Input('tsColumnDef')
  public set columnName(value: string) {
    this.name = value;
  }
  public get columnName(): string {
    return this.name;
  }


  /**
   * Define an alignment type for the cell.
   */
  @Input()
  public alignment: TsTableColumnAlignment | undefined;

  /**
   * Define if a column's contents should wrap when long
   */
  @Input()
  public noWrap = true;

  /**
   * Define if the column should stick to the start
   */
  @Input()
  public sticky = false;

  constructor(public elementRef: ElementRef) {
    super();
  }
}
