import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import {
  TsScrollbarsComponent,
  TsScrollbarsModule,
} from '@terminus/ui-scrollbars';
import { TsSpacingModule } from '@terminus/ui-spacing';

const MODULE_METADATA = {
  imports: [
    TsScrollbarsModule,
    TsSpacingModule,
  ],
};

export default {
  title: 'Components/Structure/Scrollbars',
};

@Component({
  selector: 'ts-scrollbars-wrapper',
  styles: [
    `
    .scroll-container {
      height: 320px;
      outline: 1px solid lightblue;
      padding: 1em;
      width: 400px;
    }
    .ts-scrollbars p {
      margin-bottom: 2em;
    }
    .ts-scrollbars.nowrap p {
      white-space: nowrap;
    }
    .p1 {
      background-color: lightcoral;
    }
    `,
  ],
  template: `
    <div tsVerticalSpacing="large--0">
      <button (click)="scrollBottom()">Scroll to Bottom</button>
      <button (click)="scrollTop()">Scroll to Top</button>
      <button (click)="scrollToElement()">Scroll to Element (P1)</button>
      <br>
      <button (click)="scrollLeft()" *ngIf="noWrap">Scroll to Left</button>
      <button (click)="scrollRight()" *ngIf="noWrap">Scroll to Right</button>
    </div>

    <div class="scroll-container">
      <ts-scrollbars
        [class.nowrap]="noWrap"
        (scrollDown)="scrollDownEvent.emit($event)"
        (scrollLeft)="scrollLeftEvent.emit($event)"
        (scrollRight)="scrollRightEvent.emit($event)"
        (scrollUp)="scrollUpEvent.emit($event)"
        (scrollX)="scrollXEvent.emit($event)"
        (scrollY)="scrollYEvent.emit($event)"
        (xReachEnd)="xReachEndEvent.emit($event)"
        (xReachStart)="xReachStartEvent.emit($event)"
        (yReachEnd)="yReachEndEvent.emit($event)"
        (yReachStart)="yReachStartEvent.emit($event)"
        [isDisabled]="isDisabled"
      >
        <p>Nobis neque maxime incidunt reprehenderit. Sapiente laboriosam impedit excepturi. Odit corrupti voluptatibus ducimus harum.</p>
        <p>Repellendus maiores nemo quo sequi aut quisquam. Reprehenderit sequi eum ducimus voluptas. Tempora consectetur laudantium.</p>
        <p>Repellat ad architecto mollitia tempore. At eligendi ex nemo vel architecto repellendus. Autem quod tempora temporibus.</p>
        <p class="p1">P1: Nesciunt ut consequuntur fugit. Cupiditate velit expedita laborum. Cum enim praesentium voluptatum unde reiciendis
          assumenda.</p>
        <p>Pariatur magni quaerat sint. Repellendus nobis ex debitis cum est explicabo. Illum provident architecto rerum minima dicta.</p>
        <p>Nisi illum deleniti quasi debitis debitis ullam libero. Sapiente veniam eius saepe sit repellat pariatur. Eligendi laudantium
          debitis quibusdam aliquam laborum deserunt.</p>
        <p>Architecto qui at accusamus voluptate hic dolore. Ad cupiditate optio quo velit voluptas maiores. Natus molestias perspiciatis
          hic et laboriosam tempore.</p>
        <p>Cumque iure voluptatibus fugiat iusto. Ea facere rerum tenetur laborum. Odit facere ullam.</p>
        <p>Harum officia voluptas eum natus dolorem id. Numquam quasi culpa a eveniet consectetur. Ut rem voluptatem eius fuga.</p>
        <p>Quas provident pariatur consequatur ipsum debitis harum temporibus. Ipsam error delectus dicta nisi. Non facilis vitae
          repudiandae.</p>
      </ts-scrollbars>
    </div>
  `,
})
class ScrollbarsWrapper {
  @Input() isDisabled: boolean;
  @Input() noWrap: boolean;
  @ViewChild(TsScrollbarsComponent, { static: true })
  public scrollbars!: TsScrollbarsComponent;

  @Output() readonly scrollDownEvent = new EventEmitter<Event>();
  @Output() readonly scrollLeftEvent = new EventEmitter<Event>();
  @Output() readonly scrollRightEvent = new EventEmitter<Event>();
  @Output() readonly scrollUpEvent = new EventEmitter<Event>();
  @Output() readonly scrollXEvent = new EventEmitter<Event>();
  @Output() readonly scrollYEvent = new EventEmitter<Event>();
  @Output() readonly xReachEndEvent = new EventEmitter<Event>();
  @Output() readonly xReachStartEvent = new EventEmitter<Event>();
  @Output() readonly yReachEndEvent = new EventEmitter<Event>();
  @Output() readonly yReachStartEvent = new EventEmitter<Event>();

  scrollBottom() {
    this.scrollbars.scrollToBottom();
  }

  scrollLeft() {
    this.scrollbars.scrollToLeft();
  }

  scrollRight() {
    this.scrollbars.scrollToRight();
  }

  scrollTop() {
    this.scrollbars.scrollToTop();
  }

  scrollToElement() {
    this.scrollbars.scrollToElement('.p1');
  }
}

export const basic = () => ({
  moduleMetadata: MODULE_METADATA,
  component: ScrollbarsWrapper,
  props: {
    isDisabled: boolean('Disable scrollbars', false),
    noWrap: boolean('Stop content from wrapping (creates x-axis scrollbar)', false),
    scrollDownEvent: action('Scroll down'),
    scrollUpEvent: action('Scroll up'),
    scrollLeftEvent: action('Scroll left'),
    scrollRightEvent: action('Scroll right'),
    scrollXEvent: action('Scroll X'),
    scrollYEvent: action('Scroll Y'),
    xReachEndEvent: action('X reach end'),
    xReachStartEvent: action('X reach start'),
    yReachEndEvent: action('Y reach end'),
    yReachStartEvent: action('Y reach start'),
  },
});
basic.parameters = {
  // knobs: { disabled: true },
  // actions: { disabled: true },
};

