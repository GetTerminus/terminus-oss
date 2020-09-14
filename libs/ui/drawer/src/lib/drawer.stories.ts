import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  select,
  text,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsDrawerComponent,
  TsDrawerContainerComponent,
  TsDrawerContentComponent,
  TsDrawerFooterComponent,
  TsDrawerHeaderComponent,
  TsDrawerModes,
  TsDrawerModule,
  TsDrawerPosition,
} from '@terminus/ui-drawer';
import { TsSpacingModule } from '@terminus/ui-spacing';

export default {
  title: 'Components/Structure/Drawer',
  component: TsDrawerComponent,
  subcomponents: {
    TsDrawerContainerComponent,
    TsDrawerContentComponent,
    TsDrawerHeaderComponent,
    TsDrawerFooterComponent,
  },
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        TsDrawerModule,
        TsSpacingModule,
      ],
    }),
  ],
};

@Component({
  selector: 'ts-drawer-wrapper',
  styles: [
    `
      .fake-content-wrapper {
      }
      .fake-content-wrapper > div {
        margin: 1rem;
      }
      .fake-content {
        outline: 2px solid lightblue;
      }
      .fake-content::before {
        content: "";
        display: block;
        position: relative;
        padding-top: 70%;
        width: 100%;
      }
      .fake-content.full::before {
        padding-top: 40%;
      }
      .fake-content.half {
        width: 48%;
      }
      .fake-content-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .drawer-container {
        height: 600px;
        outline: 3px solid #b55949;
      }
      .my-drawer,
      ts-drawer-header,
      ts-drawer-footer {
        padding: .5em;
      }
    `,
  ],
  template: `
    <ts-drawer-container
      class="drawer-container"
      [hasBackdrop]="hasBackdrop"
      (backdropClick)="myBackdropClick($event)"
      #drawerContainer
    >
      <ts-drawer
        #drawer
        [collapsedSize]="collapsedSize"
        [expandedSize]="expandedSize"
        [isExpanded]="expanded"
        [position]="position"
        [mode]="mode"
        (expandedChange)="expandedChange.emit($event)"
        (isExpanded)="isExpanded.emit($event)"
        (expandedStart)="expandedStart.emit($event)"
        (closed)="closed.emit($event)"
        (collapsedStart)="collapsedStart.emit($event)"
        (positionChanged)="positionChanged.emit($event)"

      >
        <ts-drawer-header [style.width]="expandedSize">
          <h4>HEADER</h4>
        </ts-drawer-header>

        <div class="my-drawer" [style.width]="expandedSize">
          <div class="inner">
            <div class="inner-content">
              <p>Here is my standard panel content.</p>
              <p>Consequatur fugiat eius placeat tenetur consectetur labore. Laborum architecto animi. Inventore quod unde ea quae doloribus
                maxime.</p>
              <div>
                <button>Foo</button>
                <button>Bar</button>
              </div>
              <p>Consequatur fugiat eius placeat tenetur consectetur labore. Laborum architecto animi. Inventore quod unde ea quae doloribus
                maxime.</p>
              <p>Consequatur fugiat eius placeat tenetur consectetur labore. Laborum architecto animi. Inventore quod unde ea quae doloribus
                maxime.</p>
              <div>
                <button>Foo</button>
                <button>Bar</button>
              </div>
              <p>Consequatur fugiat eius placeat tenetur consectetur labore. Laborum architecto animi. Inventore quod unde ea quae doloribus
                maxime.</p>
            </div>
          </div>

        </div>

        <ts-drawer-footer [style.width]="expandedSize">
          <h4>THIS IS MY FOOTER</h4>
        </ts-drawer-footer>
      </ts-drawer>

      <ts-drawer-content>
        <div>
          <div tsVerticalSpacing style="text-align:center;">
            This is the standard page content...
            <div *ngIf="hasBackdrop">
              Example using custom callback to close the drawer on backdrop click.
            </div>
            <br>
            <button (click)="drawer.toggle()">Toggle drawer</button>
          </div>
          <div class="fake-content-wrapper">
            <div class="fake-content full"></div>
            <div class="fake-content-row">
              <div class="fake-content half"></div>
              <div class="fake-content half"></div>
            </div>
          </div>
        </div>
      </ts-drawer-content>
    </ts-drawer-container>
  `,
})
class DrawerWrapper {
  @Input() collapsedSize: string;
  @Input() expanded: boolean;
  @Input() expandedSize: string;
  @Input() hasBackdrop: boolean;
  @Input() mode: TsDrawerModes;
  @Input() position: TsDrawerPosition;
  @Input() role: string;
  @Output() readonly backdropClicked = new EventEmitter<void>();
  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly collapsedStart = new EventEmitter<void>();
  @Output() readonly expandedChange = new EventEmitter<boolean>();
  @Output() readonly expandedStart = new EventEmitter<void>();
  @Output() readonly isExpanded = new EventEmitter<void>();
  @Output() readonly positionChanged = new EventEmitter<void>();

  @ViewChild('drawer')
  public drawer: TsDrawerComponent;

  myBackdropClick(): void {
    if (this.hasBackdrop) {
      this.drawer.toggle();
      this.backdropClicked.emit();
    }
  }
}

export const basic = () => ({
  component: DrawerWrapper,
  props: {
    collapsedSize: text('Collapsed size', '0'),
    expandedSize: text('Expanded size', '15rem'),
    position: select('Drawer position', ['start', 'end'], 'start'),
    role: text('Drawer aria role', ''),
    expandedChange: action('Expanded change'),
    isExpanded: action('Expanded'),
    expandedStart: action('Expanded start'),
    closed: action('Closed'),
    collapsedStart: action('Collapsed start'),
    positionChanged: action('Position changed'),
  },
});
basic.parameters = {
  docs: { iframeHeight: 660 },
};

export const mode = () => ({
  component: DrawerWrapper,
  props: {
    expanded: true,
    collapsedSize: '0',
    expandedSize: '15rem',
    position: select('Drawer position', ['start', 'end'], 'start'),
    mode: select('Mode', ['overlay', 'push'], 'overlay'),
  },
});
mode.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 660 },
};

export const withBackdrop = () => ({
  component: DrawerWrapper,
  props: {
    expanded: true,
    hasBackdrop: true,
    collapsedSize: '0',
    expandedSize: '15rem',
    position: 'end',
    backdropClicked: action('Backdrop clicked'),
  },
});
mode.parameters = {
  knobs: { disabled: true },
  docs: { iframeHeight: 660 },
};
