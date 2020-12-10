import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import {
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsButtonModule } from '@terminus/ui-button';
import { TsLinkModule } from '@terminus/ui-link';
import {
  TsInfoCarouselComponent,
  TsInfoCarouselModule,
} from '@terminus/ui/info-carousel';

export default {
  title: 'Components/Structure/Info Carousel',
  component: TsInfoCarouselComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        TsInfoCarouselModule,
        TsLinkModule,
        TsButtonModule,
      ],
    }),
  ],
};

const PANELS = [
  {
    title: 'Title one',
    content: `Replicable corporate <a href="#">social responsibility</a> collective impact collaborate.`,
  },
  {
    title: 'Title two',
    content: `Entrepreneur, thought leader, data corporate social responsibility circular green space.`,
  },
  {
    title: 'Title three',
    content: `Optimism co-creation expose the truth best practices. Human-centered benefit corporation, energize empower segmentation.`,
  },
];

export const basic = () => ({
  template: `
    <ts-info-carousel [paginatorItemTitle]="paginatorItemTitle" (activePanelIndexChange)="panelChange($event)">
      <h4 tsInfoCarouselTitle><span class="fas fa-bolt"></span> {{ paginatorItemTitle }}</h4>

      <ng-container *ngFor="let panel of panels">
        <ng-container *tsInfoCarouselPanel>
          <h4 class="ts-info-carousel__item-title">{{ panel.title }}</h4>
          <div class="ts-info-carousel__item-content" [innerHTML]="panel.content"></div>
        </ng-container>
      </ng-container>
    </ts-info-carousel>
  `,
  props: {
    panels: PANELS.slice(),
    paginatorItemTitle: text('Item title', 'Insights'),
    panelChange: action('Active panel index change: '),
  },
});
basic.parameters = {
  docs: { iframeHeight: 200 },
};

export const nestedCustomComponents = () => ({
  template: `
    <ts-info-carousel [paginatorItemTitle]="paginatorItemTitle" [activePanelIndex]="activeIndex">
      <h4 tsInfoCarouselTitle><span class="fas fa-bolt"></span> Insights</h4>

      <ng-container *tsInfoCarouselPanel>
        <h4 class="ts-info-carousel__item-title">Title One</h4>
        <div class="ts-info-carousel__item-content">My content with a ts-button: <ts-button>My button</ts-button></div>
      </ng-container>

      <ng-container *tsInfoCarouselPanel>
        <h4 class="ts-info-carousel__item-title">Title Two</h4>
        <div class="ts-info-carousel__item-content">Content with a ts-link: <ts-link [destination]="['foo', 'bar']">My link</ts-link></div>
      </ng-container>
    </ts-info-carousel>
  `,
  props: {
    panels: PANELS.slice(),
    paginatorItemTitle: 'Insights',
    activeIndex: select('Active page index', [0, 1], 1),
  },
});
nestedCustomComponents.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 200 },
};
