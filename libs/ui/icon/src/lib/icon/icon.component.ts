import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import {
  FaSymbol,
  FlipProp,
  IconProp,
  PullProp,
  RotateProp,
  SizeProp,
  Styles,
  Transform,
} from '@fortawesome/fontawesome-svg-core';


/**
 * This is the icon UI Component
 *
 * @example
 * <ts-icon
 *              [icon]="myIconReference"
 *              classes="foo bar"
 *              title="My title."
 *              [mask]="['fas', 'square']"
 *              [styles]="{'stroke': 'red', 'color': 'red'}"
 *              size="2x"
 *              pull="left"
 *              [border]="true"
 *              [inverse]="true"
 *              [symbol]="mySymbolReference"
 *              [fixedWidth]="true"
 *              flip="vertical"
 *              rotate="90"
 *              transform="shrink-9 left-4"
 *              [pulse]="true"
 *              [spin]="true"
 * ></ts-icon>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/icon</example-url>
 */
@Component({
  selector: 'ts-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  host: {
    class: 'ts-icon',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsIcon',
})
export class TsIconComponent {
  /**
   * Pass in the icon and optional prefix
   *
   * [icon]="myReferenceToImportedCopyIcon"
   */
  @Input()
  public icon: IconProp;

  /**
   * Add custom classes
   */
  @Input()
  public classes?: string[] = [];

  /**
   * The title attribute
   */
  @Input()
  public title?: string;

  /**
   * Add a mask
   *
   * See: https://fontawesome.com/how-to-use/on-the-web/styling/masking
   */
  @Input()
  public mask?: IconProp;

  /**
   * Add custom styles
   */
  @Input()
  public styles?: Styles;

  /**
   * Define the icon size
   *
   * See: https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons#scale
   */
  @Input()
  public size?: SizeProp = 'lg';

  /**
   * Wrap text around the icon
   *
   * See: https://fontawesome.com/how-to-use/on-the-web/styling/bordered-pulled-icons
   */
  @Input()
  public pull?: PullProp;
  @Input()
  public border?: boolean;

  @Input()
  public inverse?: boolean;

  @Input()
  public symbol?: FaSymbol;

  /**
   * Make icon fixed width
   *
   * See: https://fontawesome.com/how-to-use/on-the-web/styling/fixed-width-icons
   */
  @Input()
  public fixedWidth?: boolean;

  /**
   * Layout
   *
   * See: https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons
   * See: https://fontawesome.com/how-to-use/on-the-web/styling/power-transforms
   */
  @Input()
  public flip?: FlipProp;
  @Input()
  public rotate?: RotateProp;
  @Input()
  public transform?: string | Transform;

  /**
   * Animations
   *
   * See: https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons
   */
  @Input()
  public pulse?: boolean;
  @Input()
  public spin?: boolean;
}
