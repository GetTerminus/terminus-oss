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

  constructor(
    private renderer: Renderer2,
    public elementRef: ElementRef,
  ) {}

  public ngOnInit(): void {
    this.renderer.addClass(
      this.elementRef.nativeElement,
      this.tsMenuItem === 'transparent' ? 'ts-menu__item--transparent' : 'ts-menu__item',
    );
  }
}
