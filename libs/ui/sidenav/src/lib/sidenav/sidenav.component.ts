import { ConnectionPositionPair } from '@angular/cdk/overlay';
import type { CdkOverlayOrigin } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  Optional,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { tsSidenavPanelAnimations } from '../sidenav-panel.animations';
import type { TS_SIDENAV_PLATFORM_SWITCHER_CONTENT } from '../sidenav-platform-switcher/sidenav-platform-switcher.component';

/**
 * Define the user object structure for {@link TsSidenavComponent}
 */
export interface TS_SIDENAV_USER {
  name: string;
  email: string;
  imageUrl?: string;
  // Allow the consumer to pass in a larger object as long as it contains what we need
  [key: string]: unknown;
}

/**
 * Define the object structure for the {@link TsSidenavComponent} default options
 */
export interface TsSidenavDefaultOptions {
  profileRoute?: string;
  signOutRoute?: string;
  academyUrl?: string;
  knowledgeBaseUrl?: string;
}

/**
 * Injection token to be used to override the default options for {@link TsSidenavComponent}
 */
export const TS_SIDENAV_DEFAULT_OPTIONS =
  new InjectionToken<TsSidenavDefaultOptions>('ts-sidenav-default-options', {
    providedIn: 'root',
    factory: TS_SIDENAV_DEFAULT_OPTIONS_FACTORY,
  });

/**
 * Factory for default {@link TsSidenavComponent} options
 *
 * NOTE: Lambdas are not supported so we are disabling the prefer-arrow rule
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function TS_SIDENAV_DEFAULT_OPTIONS_FACTORY(): TsSidenavDefaultOptions {
  return {
    profileRoute: '/profile',
    signOutRoute: '/sign-out',
    academyUrl: 'https://academy.terminus.com',
    knowledgeBaseUrl: 'https://support.terminus.com',
  };
}

// Unique ID for each instance
let nextUniqueId = 0;

/**
 * A vertical navigation component that supports popouts and drawers
 *
 * @example
 * <ts-sidenav
 *              id="my-id"
 *              switcherCurrentTitle="My title"
 *              [switcherContent]="mySwitcherContent"
 *              [user]="currentUserObject"
 * >
 *              <ts-sidenav-trigger>...</ts-sidenav-trigger>
 *              <ts-sidenav-section-break></ts-sidenav-section-break>
 *              <ts-sidenav-trigger>...</ts-sidenav-trigger>
 * </ts-sidenav>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-navigation-sidenav</example-url>
 */
@Component({
  selector: 'ts-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  host: {
    'class': 'ts-sidenav',
    '[attr.id]': 'id',
  },
  animations: [
    tsSidenavPanelAnimations.transformPanel,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsSidenav',
})
export class TsSidenavComponent {
  /**
   * Define the default component UID
   */
  public readonly uid = `ts-sidenav-${nextUniqueId++}`;

  /**
   * Store the fallback text for when no user image exists
   */
  public userImageFallbackText: string | unknown;

  /**
   * Define the panel positions for the user menu
   */
  public userPanelPositions = [
    new ConnectionPositionPair({
      originX: 'end',
      originY: 'bottom',
    }, {
      overlayX: 'start',
      overlayY: 'bottom',
    }),
  ];

  /**
   * Determine the height of the sidenav
   */
  public get height(): number {
    return this.elementRef.nativeElement.clientHeight;
  }

  /**
   * Define reference to the CdkOverlayOrigin element for drawer panels
   *
   * Used by {@link TsSidenavTriggerComponent} when `panelType = drawer`
   */
  @ViewChild('triggerNav')
  public triggerNav: CdkOverlayOrigin;

  /**
   * Define the component ID
   */
  @Input()
  public set id(value: string) {
    this._id = value ? value : this.uid;
  }
  public get id(): string {
    return this._id;
  }
  private _id: string = this.uid;

  /**
   * Define if the platform switcher panel should be open
   */
  @Input()
  public isPlatformSwitcherOpen = false;

  /**
   * Define if the user panel is open
   */
  @Input()
  public isUserPanelOpen = false;

  /**
   * Define the current title for the {@link TsSidenavPlatformSwitcherComponent}
   */
  @Input()
  public switcherCurrentTitle: string;

  /**
   * Define the content to display in {@link TsSidenavPlatformSwitcherComponent}
   */
  @Input()
  public switcherContent: TS_SIDENAV_PLATFORM_SWITCHER_CONTENT;

  /**
   * Define the current user
   */
  @Input()
  public set user(value: TS_SIDENAV_USER) {
    this._user = value;
    this.userImageFallbackText = value ? value.name.substring(0, 1) : /* istanbul ignore next - Unreachable */ '';
  }
  public get user(): TS_SIDENAV_USER {
    return this._user;
  }
  private _user: TS_SIDENAV_USER;

  constructor(
    public elementRef: ElementRef,
    @Optional() @Inject(TS_SIDENAV_DEFAULT_OPTIONS) public options: TsSidenavDefaultOptions,
  ) {}
}
