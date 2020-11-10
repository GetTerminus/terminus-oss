import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { faLockAlt } from '@fortawesome/pro-solid-svg-icons';

/**
 * Define the allowed aspect ratios. Used in {@link TsCardComponent}
 */
export type TsAspectRatioTypes
  = '16:9'
  | '4:3'
  | '3:2'
  | '5:4'
  | '1:1'
;
export const tsCardAspectRatioTypes: TsAspectRatioTypes[] = [
  '16:9',
  '4:3',
  '3:2',
  '5:4',
  '1:1',
];

/**
 * Define allowed border sides. Used in {@link TsCardComponent}. Border color determined by the theme.
 */
export type TsCardBorderOptions
  = 'none'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom';
export const tsCardBorderOptionsList: TsCardBorderOptions[] = [
  'none',
  'left',
  'right',
  'top',
  'bottom',
];

/**
 * Unique ID for each instance
 */
let nextUniqueId = 0;

/**
 * A presentational card with menu and interaction support.
 *
 * @example
 * <ts-card
 *              aspectRatio="3:5"
 *              border="right"
 *              [centeredContent]="true"
 *              [isDisabled]="true"
 *              [flat]="true"
 *              id="my-id"
 *              [supportsInteraction]="true"
 *              [utilityMenuTemplate]="myTemplate"
 * >Here is my card!</ts-card>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-structure-card</example-url>
 */
@Component({
  selector: 'ts-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsCard',
})
export class TsCardComponent {
  /**
   * Icon for disabled cards
   */
  public lockIcon = faLockAlt;

  /**
   * Define the default component ID
   */
  protected uid = `ts-card-${nextUniqueId++}`;

  /**
   * Expose the aspect ratio as a percentage
   */
  public aspectRatioPadding!: string;

  /**
   * Getter to return a border class if the border is set
   */
  public get borderClass(): string {
    return (!this.border || this.border === 'none') ? '' : `c-card--border-${this.border}`;
  }

  /**
   * Define if the card should conform to a fixed aspect ratio
   *
   * @param value - The aspect ratio. See {@link TsAspectRatioTypes} for possible values.
   */
  @Input()
  public set aspectRatio(value: TsAspectRatioTypes) {
    const x: number = parseInt(value.split(':')[0], 10);
    const y: number = parseInt(value.split(':')[1], 10);
    const percentageMultiplier = 100;
    const percentage: number = (y / x) * percentageMultiplier;
    const percentageMaxLength = 2;
    this.aspectRatioPadding = `${percentage.toFixed(percentageMaxLength)}%`;
  }

  /**
   * Define if a border should be present on the card. {@link TsCardBorderOptions}
   *
   * @param value
   */
  @Input()
  public set border(value: TsCardBorderOptions) {
    this._border = value ? value : 'none';
  }
  public get border(): TsCardBorderOptions {
    return this._border;
  }
  private _border: TsCardBorderOptions = 'none';

  /**
   * Define if the card should center child content
   */
  @Input()
  public centeredContent = false;

  /**
   * Add a persistent top-level class
   */
  @HostBinding('class') public classList = 'ts-card';

  /**
   * Allow consumer to define class(es)
   */
  @Input()
  public set class(value: string) {
    this.classList += ` ${value}`;
  }
  public get class(): string {
    return this._class;
  }
  private _class: string;

  /**
   * Define if the card should have the second level of shadow
   */
  @Input()
  public elevation2 = false;

  /**
   * Define if the card is disabled
   */
  @Input()
  public isDisabled = false;

  /**
   * Define if the card should not have a drop shadow
   */
  @Input()
  public flat = false;

  /**
   * Define an ID for the component
   *
   * @param value
   */
  @Input()
  public set id(value: string) {
    this._id = value || this.uid;
  }
  public get id(): string {
    return this._id;
  }
  protected _id: string = this.uid;

  /**
   * Define if the card should support interaction (via hover)
   *
   * NOTE: This only alters style; not functionality
   */
  @Input()
  public supportsInteraction = false;

  /**
   * Allow a custom utility menu to be added
   */
  @Input()
  public utilityMenuTemplate: TemplateRef<ElementRef> | undefined;
}
