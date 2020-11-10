import {
  ComponentPortal,
  DomPortalOutlet,
} from '@angular/cdk/portal';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostBinding,
  Injector,
  Input,
} from '@angular/core';
import type {
  OnDestroy,
  OnInit,
} from '@angular/core';

import { TsWindowService } from '@terminus/fe-utilities';

import { TsLoadingOverlayComponent } from './overlay/loading-overlay.component';

/**
 * A spinner overlay to demonstrate loading for async data.
 *
 * @example
 * <div [tsLoadingOverlay]="true"></div>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-feedback-loading-overlay</example-url>
 */
@Directive({ selector: '[tsLoadingOverlay]' })
export class TsLoadingOverlayDirective implements OnInit, OnDestroy {
  /**
   * A reference to the portal
   */
  private readonly loadingOverlayPortal: ComponentPortal<TsLoadingOverlayComponent>;

  /**
   * Reference to our portal host
   */
  private readonly bodyPortalHost: DomPortalOutlet;

  /**
   * Show or hide the loading overlay
   *
   * @param value
   */
  @Input()
  public set tsLoadingOverlay(value: boolean) {
    const shouldSet = value && (this.bodyPortalHost && !this.bodyPortalHost.hasAttached());

    if (shouldSet) {
      this.bodyPortalHost.attach(this.loadingOverlayPortal);
    } else {
      this.bodyPortalHost.detach();
    }
  }

  /**
   * Alias the position back onto the component as a style attribute
   */
  @HostBinding('style.position')
  public position!: string;

  constructor(
    private elementRef: ElementRef,
    private windowService: TsWindowService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {
    // Create the body portal host
    this.bodyPortalHost = new DomPortalOutlet(
      this.elementRef.nativeElement,
      this.componentFactoryResolver,
      this.appRef,
      this.injector,
    );

    // Create the component portal
    this.loadingOverlayPortal = new ComponentPortal(TsLoadingOverlayComponent);
  }

  /**
   * Determine and set the needed position
   */
  public ngOnInit(): void {
    // Determine the CSS position of the element
    const position = this.windowService.nativeWindow.getComputedStyle(this.elementRef.nativeElement).getPropertyValue('position');
    this.position = this.determinePosition(position);
  }

  /**
   * Destroy the portal host if it exists
   */
  public ngOnDestroy(): void {
    if (this.bodyPortalHost) {
      this.bodyPortalHost.dispose();
    }
  }

  // noinspection JSMethodCanBeStatic
  /**
   * Return the correct position
   *
   * @param position - The current position value
   * @returns The correct position value
   */
  private determinePosition(position: string): string {
    return (position === 'relative' || position === 'absolute') ? position : 'relative';
  }
}
