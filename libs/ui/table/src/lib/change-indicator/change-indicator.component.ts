import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

/**
 * The type to define whether a change is good or bad. Used by {@link TsChangeIndicatorComponent}
 */
export type TS_CHANGE_SENTIMENT
  = 'positive'
  | 'negative'
;


// Unique ID for each instance
let nextUniqueId = 0;

/**
 * A change indicator to show the sentiment of a value change.
 *
 * @example
 * <ts-change-indicator
 *              sentiment="negative"
 * >
 *              42%
 * </ts-change-indicator>
 */
@Component({
  selector: 'ts-change-indicator',
  templateUrl: './change-indicator.component.html',
  styleUrls: ['./change-indicator.component.scss'],
  host: { class: 'ts-change-indicator' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsChangeIndicator',
})
export class TsChangeIndicatorComponent {
  /**
   * Define the default component ID
   */
  public readonly uid = `ts-change-indicator-${nextUniqueId++}`;

  /**
   * Define the sentiment of the change
   */
  @Input()
  public sentiment: TS_CHANGE_SENTIMENT = 'positive';

  /**
   * Define an ID for the component
   */
  @Input()
  public set id(value: string) {
    this._id = value || this.uid;
  }
  public get id(): string {
    return this._id;
  }
  protected _id: string = this.uid;
}
