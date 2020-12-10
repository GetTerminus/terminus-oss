import {
  animate,
  AnimationBuilder,
  style,
} from '@angular/animations';
import type {
  AnimationFactory,
  AnimationPlayer,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import type { AfterViewInit } from '@angular/core';

import { coerceNumberProperty } from '@terminus/fe-utilities';
import type { TS_PAGINATOR_PAGE } from '@terminus/ui-paginator';

import { TsInfoCarouselPanelContentDirective } from '../info-carousel-panel-content.directive';
import { TsInfoCarouselPanelDirective } from '../info-carousel-panel.directive';

// Unique ID for each instance
let nextUniqueId = 0;

/**
 * A simple carousel for text and DOM content.
 *
 * @example
 * <ts-info-carousel
 *              activePanelIndex="2"
 *              paginatorItemTitle="Insights"
 *              id="carousel-3"
 *              (activePanelIndexChange)="myChangeEvent($event)"
 * >
 *              <h4 tsInfoCarouselTitle><span class="fas fa-bolt"></span> Insights</h4>
 *
 *              <ng-container *ngFor="let panel of panels">
 *                <ng-container *tsInfoCarouselPanel>
 *                   <h4 class="ts-info-carousel__item-title">{{ panel.title }}</h4>
 *                  <div class="ts-info-carousel__item-content" [innerHTML]="panel.content"></div>
 *                </ng-container>
 *              </ng-container>
 * </ts-info-carousel>
 */
@Component({
  selector: 'ts-info-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  host: { class: 'ts-info-carousel' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsInfoCarousel',
})
export class TsInfoCarouselComponent implements AfterViewInit {
  /**
   * Store a reference to the current active page for the {@link TsPaginatorComponent}
   */
  public activePage: TS_PAGINATOR_PAGE;

  /**
   * Store the needed width for items
   */
  public itemWidth: number;

  /**
   * Store a reference to the panel animation player
   */
  public player: AnimationPlayer;

  /**
   * Store an array representing the list of panels for the {@link TsPaginatorComponent}
   */
  public paginatorPages: TS_PAGINATOR_PAGE[] = [];

  /**
   * Define a default duration for animations
   */
  public timing = '200ms';

  /**
   * Define the default component ID
   */
  public readonly uid = `ts-info-carousel-${nextUniqueId++}`;

  /**
   * Return the paginator summary string
   */
  public get paginatorSummary(): string {
    return `${this.activePage.pageDisplay} of ${this.paginatorPages.length} ${this.paginatorItemTitle || 'items'}`;
  }

  /**
   * Store a reference to the panels
   */
  @ContentChildren(TsInfoCarouselPanelDirective)
  public items : QueryList<TsInfoCarouselPanelDirective>;

  /**
   * Store a reference to the actual panel elements
   */
  @ViewChildren(TsInfoCarouselPanelContentDirective, { read: ElementRef })
  private itemsElements: QueryList<ElementRef>;

  /**
   * Store a reference to the inner carousel element
   */
  @ViewChild('carousel')
  private carousel : ElementRef;

  /**
   * Define the index of the currently active panel
   */
  @Input()
  public set activePanelIndex(value: number) {
    this._activePanelIndex = coerceNumberProperty(value);
    this.activePage = this.paginatorPages[value];
  }
  public get activePanelIndex(): number {
    return this._activePanelIndex;
  }
  private _activePanelIndex = 0;

  /**
   * Define an ID for the component
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
   * Define a title for the {@link TsPaginatorComponent}
   */
  @Input()
  public paginatorItemTitle: string;

  /**
   * Emit the active panel index when it changes
   */
  @Output()
  public readonly activePanelIndexChange = new EventEmitter<number>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private animationBuilder: AnimationBuilder,
    private zone: NgZone,
    public elementRef: ElementRef,
  ) {}

  /**
   * Set up initial dimensions, observers, paginator pages, and active page
   */
  public ngAfterViewInit(): void {
    this.itemWidth = this.elementRef.nativeElement.getBoundingClientRect().width;
    this.paginatorPages = Array.from(Array(this.items.length)).map((_, i) => ({
      pageNumber: i,
      pageDisplay: i + 1,
    }));
    this.activePage = this.paginatorPages[this.activePanelIndex];
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Move to the previous panel
   */
  public previous(): void {
    // istanbul ignore else
    if (this.activePanelIndex !== 0) {
      this.activePanelIndex = ((this.activePanelIndex - 1) + this.items.length) % this.items.length;
      const myAnimation = this.createAnimationFactory(this.activePanelIndex * this.itemWidth);
      this.player = myAnimation.create(this.carousel.nativeElement);
      this.player.play();
      this.activePanelIndexChange.emit(this.activePanelIndex);
    }
  }

  /**
   * Move to the next panel
   */
  public next(): void {
    // istanbul ignore else
    if (this.activePanelIndex !== (this.items.length - 1)) {
      this.activePanelIndex = ((this.activePanelIndex + 1) + this.items.length) % this.items.length;
      const myAnimation = this.createAnimationFactory(this.activePanelIndex * this.itemWidth);
      this.player = myAnimation.create(this.carousel.nativeElement);
      this.player.play();
      this.activePanelIndexChange.emit(this.activePanelIndex);
    }
  }

  /**
   * Move directly to a specific panel
   *
   * @param desiredIndex - The index of the desired panel
   * @param timing - The desired duration of the animation
   */
  public pageClicked(desiredIndex: number, timing?: string): void {
    this.activePanelIndex = (desiredIndex + this.items.length) % this.items.length;
    const myAnimation = this.createAnimationFactory((this.activePanelIndex * this.itemWidth), timing);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
    this.activePanelIndexChange.emit(this.activePanelIndex);
  }

  /**
   * Update the width and height of the carousel panels if the window is resized
   */
  @HostListener('window:resize')
  public onResize(): void {
    this.zone.run(() => {
      this.itemWidth = this.elementRef.nativeElement.getBoundingClientRect().width;
      this.pageClicked(this.activePanelIndex, '50ms');
    });
  }

  /**
   * Create an animation factory to move panels
   *
   * @param distance - The distance to move the carousel
   * @param timing - The desired duration of the animation. Default is '200ms'
   * @returns The AnimationFactory
   */
  private createAnimationFactory(distance: number, timing = this.timing): AnimationFactory {
    return this.animationBuilder.build([
      animate(timing, style({ transform: `translateX(-${distance}px)` })),
    ]);
  }
}
