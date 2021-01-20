import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
} from '@angular/core';
import type { AfterViewInit } from '@angular/core';

import { coerceBooleanProperty } from '@terminus/fe-utilities';

/**
 * Autofocus any focusable element on-load.
 *
 * Passing any truthy value OR an empty string will enable the autofocus.
 *
 * @example
 * <input type="text" tsAutofocus />
 * <button [tsAutofocus]="true">Click Me</button>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/utilities-autofocus</example-url>
 */
@Directive({ selector: '[tsAutofocus]' })
export class TsAutofocusDirective implements AfterViewInit {
  /**
   * Store the shouldFocus value
   */
  private shouldFocus!: boolean;

  /**
   * Define if the element should be focused after initialization
   *
   * @param value
   */
  @Input()
  public set tsAutofocus(value: string | boolean) {
    this.shouldFocus = coerceBooleanProperty(value);
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public elementRef: ElementRef,
  ) {}

  /**
   * Focus the input after the view has initialized
   */
  public ngAfterViewInit(): void {
    // istanbul ignore else
    if (this.shouldFocus) {
      const el = this.elementRef.nativeElement;
      el.focus();
      this.changeDetectorRef.detectChanges();
    }
  }
}
