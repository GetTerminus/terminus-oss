import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons/faCaretDown';
import { faEllipsisH } from '@fortawesome/pro-solid-svg-icons/faEllipsisH';

import {
  TsButtonThemeTypes,
} from '@terminus/ui-button';

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
 *              theme="secondary"
 *              triggerType="utility"
 * >Select Item</ts-menu>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/menu</example-url>
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
export class TsMenuComponent implements AfterViewInit, OnInit {
  /**
   * Define the default icon for the trigger button
   */
  private TRIGGER_ICON_DEFAULT = faCaretDown;

  /**
   * Define the utility icon for the trigger button
   */
  private TRIGGER_ICON_UTILITY = faEllipsisH;

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
   * The icon to be used in the trigger button
   */
  public triggerIcon!: IconDefinition;

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
   * Define the menu theme
   */
  @Input()
  public theme: TsButtonThemeTypes = 'default';

  /**
   * Define the type of trigger {@link TsMenuTriggerTypes}
   *
   * - 'utility' will expose a simple fab trigger: `⋮`
   * - 'default' will expose a standard {@link TsButtonComponent}
   */
  @Input()
  public triggerType: TsMenuTriggerTypes = 'default';

  /**
   * Set the triggerIcon based on the triggerType
   */
  public ngOnInit(): void {
    this.triggerIcon = (this.triggerType === 'default')
      ? this.TRIGGER_ICON_DEFAULT : this.TRIGGER_ICON_UTILITY;
  }

  /**
   * After the view has initialized, open the menu if it is defaulted to 'open'
   */
  public ngAfterViewInit(): void {
    if (this.defaultOpened) {
      this.trigger.openMenu();
    }
  }
}
