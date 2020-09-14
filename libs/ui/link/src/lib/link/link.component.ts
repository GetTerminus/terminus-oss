import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLink';

import { isString } from '@terminus/fe-utilities';
import { TsStyleThemeTypes } from '@terminus/ui-utilities';

/**
 * Standard link component
 *
 * @example
 * <ts-link
 *              [destination]="['your/', 'path/']"
 * >My link</ts-link>
 *
 * <ts-link
 *              destination="http://google.com"
 *              fragment="myElementId"
 *              [isExternal]="true"
 *              tabIndex="2"
 * >My link</ts-link>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-navigation-link</example-url>
 */
@Component({
  selector: 'ts-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  host: { class: 'ts-link' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsLink',
})
export class TsLinkComponent {
  public iconExternal = faExternalLink;

  /**
   * Define the route needed when only using a fragment
   */
  public localRoute = ['.'];

  /**
   * Decide whether an external icon should be shown
   */
  public showExternalIcon = true;

  /**
   * Define the link's destination
   *
   * @param value
   */
  @Input()
  public set destination(value: string | string[] | undefined) {
    if (isString(value) && (value.includes('mailto') || value.includes('tel'))) {
      this.showExternalIcon = false;
    }
    this._destination = value;
  }
  public get destination(): string | string[] | undefined {
    return this._destination;
  }
  public _destination: string | string[] | undefined;

  /**
   * Define the link's fragment
   */
  @Input()
  public fragment: string | undefined;

  /**
   * Define if the link is to an external page
   */
  @Input()
  public isExternal = false;

  /**
   * Define the tabindex
   */
  @Input()
  public tabIndex = 0;
}
