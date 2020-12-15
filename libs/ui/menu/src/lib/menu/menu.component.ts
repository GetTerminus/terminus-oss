import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import type {
  AfterViewInit,
  TemplateRef,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

import type { TsButtonThemeTypes } from '@terminus/ui-button';

/**
 * Define the allowed X positions for a menu
 */
export type TsMenuPositionTypesX
  = 'before'
  | 'after'
;

/**
 * Define the allowed Y positions for a menu
 */
export type TsMenuPositionTypesY
  = 'above'
  | 'below'
;

/**
 * Define the allowed trigger types for a menu
 */
export type TsMenuTriggerTypes
  = 'default'
  | 'utility'
;

/**
 * A presentational component to render a dropdown menu.
 *
 * @example
 * <ts-menu
 *              [defaultOpened]="false"
 *              [isDisabled]="false"
 *              [menuItemsTemplate]="myTemplate"
 *              menuPositionX="20px"
 *              menuPositionY="20px"
 *              triggerTheme="secondary"
 *              triggerType="utility"
 * >Select Item</ts-menu>
 *
 * <ng-template #myTemplate>
 *              <ts-button>Button One</ts-button>
 *              <ts-link>Link One</ts-link>
 * </ng-template>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-actions-menu</example-url>
 */
@Component({
  selector: 'ts-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    'class': 'ts-menu',
    '[class.ts-menu--disabled]': 'isDisabled',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsMenu',
})
export class TsMenuComponent implements AfterViewInit {
  /**
   * Return if the current menu is a utility menu
   */
  public get isUtilityMenu(): boolean {
    return this.triggerType === 'utility';
  }

  /**
   * Define if the menu should overlap the trigger
   */
  public shouldOverlapTrigger = false;

  /**
   * Provide access to the trigger
   */
  @ViewChild(MatMenuTrigger)
  public trigger!: MatMenuTrigger;

  /**
   * Define if the menu should be opened by default
   */
  @Input()
  public defaultOpened = false;

  /**
   * Define if the menu should be disabled
   */
  @Input()
  public isDisabled = false;

  /**
   * Allow a custom template for menu items
   */
  @Input()
  public menuItemsTemplate!: TemplateRef<ElementRef>;

  /**
   * Define the X menu position
   */
  @Input()
  public menuPositionX: TsMenuPositionTypesX = 'after';

  /**
   * Define the Y menu position
   */
  @Input()
  public menuPositionY: TsMenuPositionTypesY = 'below';

  /**
   * Define the theme for the menu trigger
   */
  @Input()
  public triggerTheme: TsButtonThemeTypes = 'default';

  /**
   * Define the type of trigger {@link TsMenuTriggerTypes}
   *
   * - 'utility' will expose a simple fab trigger: `⋮`
   * - 'default' will expose a standard {@link TsButtonComponent}
   */
  @Input()
  public triggerType: TsMenuTriggerTypes = 'default';

  /**
   * After the view has initialized, open the menu if it is defaulted to 'open'
   */
  public ngAfterViewInit(): void {
    if (this.defaultOpened) {
      this.trigger.openMenu();
    }
  }
}
