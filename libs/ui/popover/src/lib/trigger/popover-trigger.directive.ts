import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  Output,
  ViewContainerRef,
} from '@angular/core';
import type {
  AfterContentChecked,
  AfterContentInit,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
} from '@angular/core';
import {
  fromEvent,
  merge,
} from 'rxjs';
import { filter } from 'rxjs/operators';

import {
  KEYS,
  untilComponentDestroyed,
} from '@terminus/fe-utilities';
import { TsUILibraryError } from '@terminus/ui-utilities';

import {
  TsPopoverOptions,
  TsPopoverPosition,
  tsPopoverPositions,
  TsPopoverPositions,
  TsTriggers,
  TsTrigger,
} from '../popover-options';
import { TsPopoverComponent } from '../popover/popover.component';


// Unique ID for each instance
let nextUniqueId = 0;

/**
 * A directive that adds popover trigger functionality
 *
 * @example
 * <button
 *              [tsPopoverTrigger]="popper1"
 *              [defaultOpened]="defaultOpened"
 *              [hideOnBlur]="false"
 *              id="my-id"
 *              (popoverOnCreate)="myFunction($event)"
 *              (popoverOnShown)="myFunction($event)"
 *              (popoverOnHidden)="myFunction($event)"
 *              (popoverOnUpdate)="myFunction($event)"
 * />
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-structure-popover</example-url>
 */
@Directive({
  selector: 'tsPopoverTrigger, [tsPopoverTrigger]',
  host: { class: 'ts-popover-trigger' },
  exportAs: 'tsPopoverTrigger',
})
export class TsPopoverTriggerDirective implements OnInit, AfterContentInit, AfterContentChecked, OnChanges, OnDestroy {
  /**
   * Define mouse event click subscription.
   */
  private clickSubscription = (fromEvent<MouseEvent>(this.elementRef.nativeElement, 'click'))
    .pipe(untilComponentDestroyed(this)).subscribe(event => {
      this.toggle();
      event.stopPropagation();
      event.preventDefault();
    });

  /**
   * Define the mouse event subscription, defaults to click.
   */
  public eventSubscription = this.clickSubscription;

  /**
   * Define the UID
   */
  public readonly uid = `ts-popover-trigger-${nextUniqueId++}`;

  /**
   * Default options for popper
   *
   * We support click and hover triggers.
   */
  public static defaultOptions: TsPopoverOptions = {
    trigger: TsTriggers.CLICK || TsTriggers.HOVER,
    ariaRole: 'popover',
    placement: TsPopoverPositions.Bottom,
  };

  /**
   * Whether current popover is open or not.
   */
  public isOpen = false;

  /**
   * Utility getter to return the popover instance while we have to manage both formats.
   *
   * NOTE: This can be removed once `this.popover` has been removed.
   */
  public get popoverInstance(): TsPopoverComponent {
    // eslint-disable-next-line deprecation/deprecation
    return this.tsPopoverTrigger || this.popover;
  }

  /**
   * Whether popover is opened on load.
   */
  @Input()
  public defaultOpened = false;

  /**
   * Whether popover closes when click outside.
   */
  @Input()
  public hideOnBlur = true;

  /**
   * Define an ID for the directive
   *
   * @param value
   */
  @Input()
  public set id(value: string) {
    this._id = value || this.uid;
  }
  public get id(): string {
    return this._id;
  }
  protected _id: string = this.uid;

  /**
   * TsPopoverComponent provided as an input
   *
   * @deprecated Please pass the instance to the directive itself: `[tsPopoverTrigger]="myPopoverInstance"`
   */
  @Input()
  public popover!: TsPopoverComponent;

  /**
   * Set position of where popover opens
   *
   * @param value
   */
  @Input()
  public set position(value: TsPopoverPosition) {
    value = value || TsPopoverPositions.Bottom;
    if (tsPopoverPositions.indexOf(value) < 0) {
      throw new TsUILibraryError(`TsPopoverTriggerDirective: "${value}" is not an allowed position value.`);
    }
    this._position = value;
  }
  public get position(): TsPopoverPosition {
    return this._position;
  }
  public _position = TsPopoverPositions.Bottom;

  /**
   * Set trigger type of popover, i.e. click or hover
   */
  @Input()
  public set popoverTrigger(value: TsTrigger) {
    this._popoverTrigger = value;
    this.setUpListeners(this._popoverTrigger);
  }
  public get popoverTrigger(): TsTrigger {
    return this._popoverTrigger;
  }
  public _popoverTrigger: TsTrigger = 'click';

  /**
   * TsPopoverComponent provided as an input
   */
  @Input()
  public tsPopoverTrigger: TsPopoverComponent | undefined;

  /**
   * Emit when create popover.
   */
  @Output()
  public readonly popoverOnCreate = new EventEmitter<TsPopoverComponent>();

  /**
   * Emit when popover is shown.
   */
  @Output()
  public readonly popoverOnShown = new EventEmitter<TsPopoverComponent>();

  /**
   * Emit when popover is hidden.
   */
  @Output()
  public readonly popoverOnHidden = new EventEmitter<TsPopoverComponent>();

  /**
   * Emit when popover is updated.
   */
  @Output()
  public readonly popoverOnUpdate = new EventEmitter<TsPopoverComponent>();

  /**
   * Register the click to decide whether it's inside the element or out.
   *
   * @param targetElement
   */
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    const clickedInside = this.popoverInstance.elementRef.nativeElement.contains(targetElement);
    // istanbul ignore else
    if (!clickedInside && this.hideOnBlur) {
      this.hide();
    }
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
    public elementRef: ElementRef,
  ) {
    /**
     * Listen to `keydown` events outside the zone so that change detection is not run every
     * time a key is pressed. Re-enter the zone only if the `ESC` key is pressed
     */
    this.ngZone.runOutsideAngular(() => {
      // eslint-disable-next-line deprecation/deprecation
      (fromEvent<KeyboardEvent>(this.elementRef.nativeElement, 'keydown'))
        .pipe(
          filter(event => event.code === KEYS.ESCAPE.code),
          untilComponentDestroyed(this),
        ).subscribe(event => this.ngZone.run(() => {
          this.hide();
          event.stopPropagation();
          event.preventDefault();
        }));
    });
  }

  /**
   * When directive initiated, it assigns a reference to popover component and also register on click event.
   */
  public ngOnInit(): void {
    this.popoverInstance.referenceObject = this.viewContainerRef.element.nativeElement;
    this.setContentProperties(this.popoverInstance);
  }

  /**
   * After the default change detector has completed checking all content, it decides on popover status based on defaultOpened input.
   */
  public ngAfterContentInit(): void {
    // istanbul ignore else
    if (this.defaultOpened) {
      this.show();
    }
    if (this.popoverTrigger && !this.eventSubscription) {
      this.setUpListeners(this._popoverTrigger);
    }
  }

  /**
   * Once content is initialized and checked, assign custom id to popover id
   */
  public ngAfterContentChecked(): void {
    // istanbul ignore else
    if (this.popoverInstance) {
      this.popoverInstance.id = this.id;
    }
  }

  /**
   * When changes happen, assign current position value to popover's popoverOption
   *
   * @param changes - SimpleChange
   */
  public ngOnChanges(changes: {[propertyName: string]: SimpleChange}): void {
    // istanbul ignore else
    if (changes.position && this.popoverInstance) {
      this.popoverInstance.popoverOptions.placement = changes.position.currentValue;
    }
  }

  /**
   * Needed for `untilComponentDestroyed`
   */
  public ngOnDestroy(): void {}

  /**
   * Set popover options
   *
   * @param popperRef - TsPopoverComponent
   */
  public setContentProperties(popperRef: TsPopoverComponent): void {
    popperRef.popoverOptions = {
      ...TsPopoverTriggerDirective.defaultOptions,
      placement: this.position,
    };
    popperRef.onHidden
      .pipe(untilComponentDestroyed(this))
      .subscribe(_ => this.popoverOnUpdate.emit(this.popoverInstance));
  }

  /**
   * Toggle between show and hide.
   */
  public toggle(): void {
    this.isOpen ? this.hide() : this.show();
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Hide the popover.
   */
  public hide(): void {
    this.isOpen = false;
    this.popoverInstance.hide();
    this.popoverOnHidden.emit(this.popoverInstance);
  }

  /**
   * Show the popover.
   */
  public show(): void {
    this.isOpen = true;
    this.popoverInstance.show(this.popoverInstance.popoverOptions);
    this.popoverOnShown.emit(this.popoverInstance);
  }

  /**
   * Set up listeners based on the trigger type
   *
   * @param trigger - The selected trigger event
   */
  private setUpListeners(trigger: TsTrigger): void {
    // istanbul ignore else
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
    // istanbul ignore else
    if (trigger === TsTriggers.CLICK) {
      this.eventSubscription = (fromEvent<MouseEvent>(this.elementRef.nativeElement, 'click'))
        .pipe(untilComponentDestroyed(this)).subscribe(event => {
          this.toggle();
          event.stopPropagation();
          event.preventDefault();
        });
    } else if (trigger === TsTriggers.HOVER) {
      const events = [
        'mouseenter',
        'mouseleave',
        'touchcancel',
        'touchend',
      ];
      const eventStreams = events.map(ev => fromEvent(this.elementRef.nativeElement, ev));
      this.eventSubscription = merge(...eventStreams).pipe(untilComponentDestroyed(this)).subscribe(() => {
        this.toggle();
      });
    }
  }
}
