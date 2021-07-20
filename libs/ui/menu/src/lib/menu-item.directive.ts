import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[tsMenuItem]' })
export class TsMenuItemDirective implements OnInit {
  /**
   * Define the type of menu item
   */
  @Input()
  public tsMenuItem: 'default' | 'transparent' = 'default';

  /**
   * Define if the menu item is disabled
   */
  @Input()
  public isDisabled = false;

  constructor(
    private renderer: Renderer2,
    public elementRef: ElementRef,
  ) {}

  public ngOnInit(): void {
    const rootElement = this.elementRef.nativeElement;

    this.renderer.addClass(rootElement, 'ts-menu__item');

    if (this.tsMenuItem === 'transparent') {
      this.renderer.addClass(rootElement, 'ts-menu__item--transparent');
    }

    if (this.isDisabled) {
      this.renderer.addClass(rootElement, 'ts-menu__item--disabled');
    }

    this.renderer.setProperty(rootElement, 'disabled', this.isDisabled);
  }
}
