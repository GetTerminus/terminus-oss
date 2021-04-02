import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { TsLinkModule } from '@terminus/ui-link';
import {
  TsSidenavPlatformSwitcherComponent,
  TsSidenavSectionBreakComponent,
  TsSidenavTriggerComponent,
  TsSidenavModule,
  TsSidenavComponent,
  TsSidenavDefaultOptions,
} from '@terminus/ui-sidenav';
import type {
  TS_SIDENAV_PLATFORM_SWITCHER_CONTENT,
  TS_SIDENAV_USER,
} from '@terminus/ui-sidenav';
import { TsToggleModule } from '@terminus/ui-toggle';
import { TsTooltipModule } from '@terminus/ui-tooltip';

export default {
  title: 'Components/Navigation/Sidenav',
  component: TsSidenavComponent,
  subcomponents: {
    TsSidenavTriggerComponent,
    TsSidenavPlatformSwitcherComponent,
    TsSidenavSectionBreakComponent,
  },
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        TsLinkModule,
        TsSidenavModule,
        TsToggleModule,
        TsTooltipModule,
      ],
    }),
  ],
};

const USER_MOCK: TS_SIDENAV_USER = {
  name: 'Eliza Doolittle',
  email: 'eliza.doolittle@terminus.com',
};
const USER_MOCK_WITH_IMAGE: TS_SIDENAV_USER = {
  name: 'Eliza Doolittle',
  email: 'eliza.doolittle@terminus.com',
  imageUrl: 'https://picsum.photos/id/1025/150/150/',
};
const SWITCHER_CONTENT_MOCK: TS_SIDENAV_PLATFORM_SWITCHER_CONTENT = [
  {
    title: 'Account Engagement Hub',
    children: [
      {
        title: 'Data Studio',
        url: 'https://data-studio.terminusplatform.com',
        iconClasses: 'fas fa-shapes',
      },
      {
        title: 'Measurement Studio',
        url: 'https://measurement-studio.terminusplatform.com',
        iconClasses: 'fas fa-chart-pie',
      },
    ],
  },
  {
    title: 'Channels',
    children: [
      {
        title: 'Ad Experiences',
        url: 'https://ads.terminusplatform.com',
        iconClasses: 'fas fa-clone',
      },
      {
        title: 'Email Experiences',
        url: 'https://email.terminusplatform.com',
        iconClasses: 'fas fa-paper-plane',
      },
      {
        title: 'Chat Experiences',
        url: 'https://chat.terminusplatform.com',
        iconClasses: 'fas fa-comment-alt',
      },
      {
        title: 'Web Experiences',
        url: 'https://web.terminusplatform.com',
        iconClasses: 'fas fa-window-maximize',
      },
    ],
  },
  {
    title: 'Platform',
    children: [
      {
        title: 'Platform',
        url: 'https://terminusplatform.com',
        iconClasses: 'fas fa-compress',
      },
    ],
  },
];
const SIDENAV_OPTIONS_MOCK: TsSidenavDefaultOptions = {
  profileRoute: '/profile',
  signOutRoute: '/sign-out',
  academyUrl: 'https://academy.terminus.com',
  knowledgeBaseUrl: 'https://support.terminus.com',
  communityUrl: 'https://terminus.zendesk.com/hc/en-us/community/topics',
};

export const basic = () => ({
  template: `
  <style>
    ::ng-deep .sb-show-main {
      padding: 0 !important;
    }
    .sidenav-demo-container {
      background-color: #f1f2f4;
      display: flex;
      height: 100%;
    }
    .sidenav-wrapper {
      flex-shrink: 0;
      overflow: hidden;
    }
    .sidenav-demo-text {
      flex: 1;
      overflow-y: scroll;
      padding: 1em;
    }
    .sidenav-demo-text:focus {
      outline: 0;
    }
    .sidenav-demo-text p {
      margin-bottom: 2rem;
      max-width: 400px;
    }
  </style>

  <!-- This represents the top level page wrapper -->
  <div class="sidenav-demo-container">
    <!-- This is a wrapper around just the sidenav; this helps control flexbox and overflow behaviors -->
    <div class="sidenav-wrapper">
      <ts-sidenav
        [user]="userObject === 'user' ? user : userWithImage"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
      >
        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="ABM Scorecard" tooltipPosition="after">
            <a routerLink="/scorecard"><span class="fas fa-analytics"></span><span class="sr-only">ABM Scorecard</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer">
          <ts-tooltip tooltipValue="Dashboards" tooltipPosition="after">
            <button><span class="fas fa-tachometer"></span><span class="sr-only">Dashboards</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Dashboards</div>
            <ul>
              <li class="ts-sidenav-bold-title">Dashboards Section 1</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li><hr></li>
              <li class="ts-sidenav-bold-title">Dashboards Section 2</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 3</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 4</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer">
          <ts-tooltip tooltipValue="Reports" tooltipPosition="after">
            <button><span class="fas fa-table"></span><span class="sr-only">Reports</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Settings</div>
            <ul>
              <li><a href="#" class="ts-sidenav-panel-action">Configuration</a></li>
              <li><hr></li>
              <li><a href="#" class="ts-sidenav-panel-action">Permissions</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Stages</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Pages and Features</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Data Hygiene</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Campaign Scoring</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Digital Attribution Snippet</a></li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-section-break></ts-sidenav-section-break>

        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="Internal Configuration" tooltipPosition="after">
            <a routerLink="/configuration"><span class="fas fa-tools"></span><span class="sr-only">Internal Configuration</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout">
          <ts-tooltip tooltipValue="Switch User" tooltipPosition="after">
            <button><span class="fas fa-people-arrows"></span><span class="sr-only">Switch User</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Switch User Menu</div>
            <ul>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout" [statusFormGroup]="toggleForm">
          <ts-tooltip tooltipValue="Do Not Disturb" tooltipPosition="after">
            <button><span class="fas fa-moon"></span><span class="sr-only">Do Not Disturb</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-section-title">Do Not Disturb</div>
            <div class="ts-sidenav-panel-section-subtitle">Preferences</div>
            <hr>
            <form [formGroup]="toggleForm">
              <ul>
                <li><ts-toggle class="ts-sidenav-panel-action" formControlName="acme" labelPosition="before">ACME Co.</ts-toggle></li>
                <li>
                  <ts-toggle class="ts-sidenav-panel-action" formControlName="ajax" labelPosition="before">AJAX Corporation</ts-toggle>
                </li>
              </ul>
            </form>
          </div>
        </ts-sidenav-trigger>
      </ts-sidenav>
    </div>
    <!-- For a11y, scrollable content needs to be accessible via tabbing -->
    <div class="sidenav-demo-text" tabindex="0">
      <p>
        Optimism co-creation expose the truth greenwashing best practices. Human-centered benefit corporation, energize empower
        segmentation. Mass incarceration our work milestones invest our work uplift. Entrepreneur, thought leader, data corporate social
        responsibility circular greenwashing green space blended value scalable ecosystem NGO design thinking thought leadership justice.
      </p>
      <p>
        Thought leadership overcome injustice capacity building sustainable indicators compassion fairness low-hanging fruit correlation
        granular change-makers segmentation. Social entrepreneurship policymaker granular strengthening infrastructure empathetic movements
        collaborative cities venture philanthropy. Invest social entrepreneur B-corp when program area fairness white paper technology
        disrupt optimism.
      </p>
      <p>
        Theory of change disrupt mobilize thought provoking, collaborative consumption rubric human-centered, incubator
        policymaker society movements synergy resilient. Inspiring innovation strategize capacity building; uplift thought leader. Social
        intrapreneurship, capacity building, circular paradigm progress shared vocabulary accessibility social innovation peaceful do-gooder
        inclusive. Peaceful collaborate NGO accessibility; our work.
      </p>
      <p>
        Replicable corporate social responsibility collective impact collaborate, academic overcome injustice issue outcomes storytelling
        inclusion. Scalable, progress game-changer; living a fully ethical life, systems thinking dynamic state of play outcomes but
        cultivate circular relief our work. Mobilize society; rubric; resilient outcomes indicators catalyze shared value triple bottom
        line.
      </p>
      <p>
        Catalyze families bandwidth impact investing inspiring program areas paradigm because philanthropy inspiring. Collaborative
        consumption and; compassion, collaborative cities then ideate rubric. Granular triple bottom line social enterprise scale and impact
        innovate communities. Problem-solvers thought partnership living a fully ethical life transparent the resistance initiative. B-corp
        the grit; impact investing think tank revolutionary, triple bottom line activate indicators.
      </p>
    </div>
  </div>
  `,
  props: {
    userObject: select('User object', ['user', 'user-with-image'], 'user'),
    user: USER_MOCK,
    userWithImage: USER_MOCK_WITH_IMAGE,
    switcherContent: SWITCHER_CONTENT_MOCK,
    currentTitle: text('Current title', 'Measurement Studio'),
    acmeModel: true,
    ajaxModel: false,
    toggleForm: new FormGroup({
      acme: new FormControl(true),
      ajax: new FormControl(false),
    }),
  },
});
basic.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 600 },
};

export const platformSwitcherMenu = () => ({
  template: `
  <style>
    ::ng-deep .sb-show-main {
      padding: 0 !important;
    }
    .sidenav-demo-container {
      background-color: #f1f2f4;
      display: flex;
      height: 100%;
    }
    .sidenav-wrapper {
      flex-shrink: 0;
      overflow: hidden;
    }
    .sidenav-demo-text {
      flex: 1;
      overflow-y: scroll;
      padding: 1em;
    }
    .sidenav-demo-text:focus {
      outline: 0;
    }
    .sidenav-demo-text p {
      margin-bottom: 2rem;
      max-width: 400px;
    }
  </style>

  <!-- This represents the top level page wrapper -->
  <div class="sidenav-demo-container">
    <!-- This is a wrapper around just the sidenav; this helps control flexbox and overflow behaviors -->
    <div class="sidenav-wrapper">
      <ts-sidenav
        [user]="user"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
        [isPlatformSwitcherOpen]="true"
      >
        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="ABM Scorecard" tooltipPosition="after">
            <a routerLink="/scorecard"><span class="fas fa-analytics"></span><span class="sr-only">ABM Scorecard</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer" [defaultOpen]="false">
          <ts-tooltip tooltipValue="Dashboards" tooltipPosition="after">
            <button><span class="fas fa-tachometer"></span><span class="sr-only">Dashboards</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Dashboards</div>
            <ul>
              <li class="ts-sidenav-bold-title">Dashboards Section 1</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li><hr></li>
              <li class="ts-sidenav-bold-title">Dashboards Section 2</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 3</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 4</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer">
          <ts-tooltip tooltipValue="Reports" tooltipPosition="after">
            <button><span class="fas fa-table"></span><span class="sr-only">Reports</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Settings</div>
            <ul>
              <li><a href="#" class="ts-sidenav-panel-action">Configuration</a></li>
              <li><hr></li>
              <li><a href="#" class="ts-sidenav-panel-action">Permissions</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Stages</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Pages and Features</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Data Hygiene</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Campaign Scoring</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Digital Attribution Snippet</a></li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-section-break></ts-sidenav-section-break>

        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="Internal Configuration" tooltipPosition="after">
            <a routerLink="/configuration"><span class="fas fa-tools"></span><span class="sr-only">Internal Configuration</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout">
          <ts-tooltip tooltipValue="Switch User" tooltipPosition="after">
            <button><span class="fas fa-people-arrows"></span><span class="sr-only">Switch User</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Switch User Menu</div>
            <ul>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout" [statusFormGroup]="toggleForm">
          <ts-tooltip tooltipValue="Do Not Disturb" tooltipPosition="after">
            <button><span class="fas fa-moon"></span><span class="sr-only">Do Not Disturb</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-section-title">Do Not Disturb</div>
            <div class="ts-sidenav-panel-section-subtitle">Preferences</div>
            <hr>
            <form [formGroup]="toggleForm">
              <ul>
                <li><ts-toggle class="ts-sidenav-panel-action" formControlName="acme" labelPosition="before">ACME Co.</ts-toggle></li>
                <li>
                  <ts-toggle class="ts-sidenav-panel-action" formControlName="ajax" labelPosition="before">AJAX Corporation</ts-toggle>
                </li>
              </ul>
            </form>
          </div>
        </ts-sidenav-trigger>
      </ts-sidenav>
    </div>
    <!-- For a11y, scrollable content needs to be accessible via tabbing -->
    <div class="sidenav-demo-text" tabindex="0">
      <p>
        Optimism co-creation expose the truth greenwashing best practices. Human-centered benefit corporation, energize empower
        segmentation. Mass incarceration our work milestones invest our work uplift. Entrepreneur, thought leader, data corporate social
        responsibility circular greenwashing green space blended value scalable ecosystem NGO design thinking thought leadership justice.
      </p>
      <p>
        Thought leadership overcome injustice capacity building sustainable indicators compassion fairness low-hanging fruit correlation
        granular change-makers segmentation. Social entrepreneurship policymaker granular strengthening infrastructure empathetic movements
        collaborative cities venture philanthropy. Invest social entrepreneur B-corp when program area fairness white paper technology
        disrupt optimism.
      </p>
      <p>
        Theory of change disrupt mobilize thought provoking, collaborative consumption rubric human-centered, incubator
        policymaker society movements synergy resilient. Inspiring innovation strategize capacity building; uplift thought leader. Social
        intrapreneurship, capacity building, circular paradigm progress shared vocabulary accessibility social innovation peaceful do-gooder
        inclusive. Peaceful collaborate NGO accessibility; our work.
      </p>
      <p>
        Replicable corporate social responsibility collective impact collaborate, academic overcome injustice issue outcomes storytelling
        inclusion. Scalable, progress game-changer; living a fully ethical life, systems thinking dynamic state of play outcomes but
        cultivate circular relief our work. Mobilize society; rubric; resilient outcomes indicators catalyze shared value triple bottom
        line.
      </p>
      <p>
        Catalyze families bandwidth impact investing inspiring program areas paradigm because philanthropy inspiring. Collaborative
        consumption and; compassion, collaborative cities then ideate rubric. Granular triple bottom line social enterprise scale and impact
        innovate communities. Problem-solvers thought partnership living a fully ethical life transparent the resistance initiative. B-corp
        the grit; impact investing think tank revolutionary, triple bottom line activate indicators.
      </p>
    </div>
  </div>
  `,
  props: {
    user: USER_MOCK,
    switcherContent: SWITCHER_CONTENT_MOCK,
    currentTitle: 'Measurement Studio',
    acmeModel: true,
    ajaxModel: false,
    toggleForm: new FormGroup({
      acme: new FormControl(true),
      ajax: new FormControl(false),
    }),
  },
});
platformSwitcherMenu.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 600 },
};

export const popoutPanel = () => ({
  template: `
  <style>
    ::ng-deep .sb-show-main {
      padding: 0 !important;
    }
    .sidenav-demo-container {
      background-color: #f1f2f4;
      display: flex;
      height: 100%;
    }
    .sidenav-wrapper {
      flex-shrink: 0;
      overflow: hidden;
    }
    .sidenav-demo-text {
      flex: 1;
      overflow-y: scroll;
      padding: 1em;
    }
    .sidenav-demo-text:focus {
      outline: 0;
    }
    .sidenav-demo-text p {
      margin-bottom: 2rem;
      max-width: 400px;
    }
  </style>

  <!-- This represents the top level page wrapper -->
  <div class="sidenav-demo-container">
    <!-- This is a wrapper around just the sidenav; this helps control flexbox and overflow behaviors -->
    <div class="sidenav-wrapper">
      <ts-sidenav
        [user]="user"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
      >
        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="ABM Scorecard" tooltipPosition="after">
            <a routerLink="/scorecard"><span class="fas fa-analytics"></span><span class="sr-only">ABM Scorecard</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer">
          <ts-tooltip tooltipValue="Dashboards" tooltipPosition="after">
            <button><span class="fas fa-tachometer"></span><span class="sr-only">Dashboards</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Dashboards</div>
            <ul>
              <li class="ts-sidenav-bold-title">Dashboards Section 1</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li><hr></li>
              <li class="ts-sidenav-bold-title">Dashboards Section 2</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 3</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 4</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer">
          <ts-tooltip tooltipValue="Reports" tooltipPosition="after">
            <button><span class="fas fa-table"></span><span class="sr-only">Reports</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Settings</div>
            <ul>
              <li><a href="#" class="ts-sidenav-panel-action">Configuration</a></li>
              <li><hr></li>
              <li><a href="#" class="ts-sidenav-panel-action">Permissions</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Stages</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Pages and Features</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Data Hygiene</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Campaign Scoring</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Digital Attribution Snippet</a></li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-section-break></ts-sidenav-section-break>

        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="Internal Configuration" tooltipPosition="after">
            <a routerLink="/configuration"><span class="fas fa-tools"></span><span class="sr-only">Internal Configuration</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout" [defaultOpen]="true">
          <ts-tooltip tooltipValue="Switch User" tooltipPosition="after">
            <button><span class="fas fa-people-arrows"></span><span class="sr-only">Switch User</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Switch User Menu</div>
            <ul>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout" [statusFormGroup]="toggleForm">
          <ts-tooltip tooltipValue="Do Not Disturb" tooltipPosition="after">
            <button><span class="fas fa-moon"></span><span class="sr-only">Do Not Disturb</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-section-title">Do Not Disturb</div>
            <div class="ts-sidenav-panel-section-subtitle">Preferences</div>
            <hr>
            <form [formGroup]="toggleForm">
              <ul>
                <li><ts-toggle class="ts-sidenav-panel-action" formControlName="acme" labelPosition="before">ACME Co.</ts-toggle></li>
                <li>
                  <ts-toggle class="ts-sidenav-panel-action" formControlName="ajax" labelPosition="before">AJAX Corporation</ts-toggle>
                </li>
              </ul>
            </form>
          </div>
        </ts-sidenav-trigger>
      </ts-sidenav>
    </div>
    <!-- For a11y, scrollable content needs to be accessible via tabbing -->
    <div class="sidenav-demo-text" tabindex="0">
      <p>
        Optimism co-creation expose the truth greenwashing best practices. Human-centered benefit corporation, energize empower
        segmentation. Mass incarceration our work milestones invest our work uplift. Entrepreneur, thought leader, data corporate social
        responsibility circular greenwashing green space blended value scalable ecosystem NGO design thinking thought leadership justice.
      </p>
      <p>
        Thought leadership overcome injustice capacity building sustainable indicators compassion fairness low-hanging fruit correlation
        granular change-makers segmentation. Social entrepreneurship policymaker granular strengthening infrastructure empathetic movements
        collaborative cities venture philanthropy. Invest social entrepreneur B-corp when program area fairness white paper technology
        disrupt optimism.
      </p>
      <p>
        Theory of change disrupt mobilize thought provoking, collaborative consumption rubric human-centered, incubator
        policymaker society movements synergy resilient. Inspiring innovation strategize capacity building; uplift thought leader. Social
        intrapreneurship, capacity building, circular paradigm progress shared vocabulary accessibility social innovation peaceful do-gooder
        inclusive. Peaceful collaborate NGO accessibility; our work.
      </p>
      <p>
        Replicable corporate social responsibility collective impact collaborate, academic overcome injustice issue outcomes storytelling
        inclusion. Scalable, progress game-changer; living a fully ethical life, systems thinking dynamic state of play outcomes but
        cultivate circular relief our work. Mobilize society; rubric; resilient outcomes indicators catalyze shared value triple bottom
        line.
      </p>
      <p>
        Catalyze families bandwidth impact investing inspiring program areas paradigm because philanthropy inspiring. Collaborative
        consumption and; compassion, collaborative cities then ideate rubric. Granular triple bottom line social enterprise scale and impact
        innovate communities. Problem-solvers thought partnership living a fully ethical life transparent the resistance initiative. B-corp
        the grit; impact investing think tank revolutionary, triple bottom line activate indicators.
      </p>
    </div>
  </div>
  `,
  props: {
    user: USER_MOCK,
    switcherContent: SWITCHER_CONTENT_MOCK,
    currentTitle: 'Measurement Studio',
    acmeModel: true,
    ajaxModel: false,
    toggleForm: new FormGroup({
      acme: new FormControl(true),
      ajax: new FormControl(false),
    }),
  },
});
popoutPanel.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 600 },
};

export const drawerPanel = () => ({
  template: `
  <style>
    ::ng-deep .sb-show-main {
      padding: 0 !important;
    }
    .sidenav-demo-container {
      background-color: #f1f2f4;
      display: flex;
      height: 100%;
    }
    .sidenav-wrapper {
      flex-shrink: 0;
      overflow: hidden;
    }
    .sidenav-demo-text {
      flex: 1;
      overflow-y: scroll;
      padding: 1em;
    }
    .sidenav-demo-text:focus {
      outline: 0;
    }
    .sidenav-demo-text p {
      margin-bottom: 2rem;
      max-width: 400px;
    }
  </style>

  <!-- This represents the top level page wrapper -->
  <div class="sidenav-demo-container">
    <!-- This is a wrapper around just the sidenav; this helps control flexbox and overflow behaviors -->
    <div class="sidenav-wrapper">
      <ts-sidenav
        [user]="user"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
      >
        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="ABM Scorecard" tooltipPosition="after">
            <a routerLink="/scorecard"><span class="fas fa-analytics"></span><span class="sr-only">ABM Scorecard</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer">
          <ts-tooltip tooltipValue="Dashboards" tooltipPosition="after">
            <button><span class="fas fa-tachometer"></span><span class="sr-only">Dashboards</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Dashboards</div>
            <ul>
              <li class="ts-sidenav-bold-title">Dashboards Section 1</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li><hr></li>
              <li class="ts-sidenav-bold-title">Dashboards Section 2</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 3</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 4</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer" [defaultOpen]="true">
          <ts-tooltip tooltipValue="Reports" tooltipPosition="after">
            <button><span class="fas fa-table"></span><span class="sr-only">Reports</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Settings</div>
            <ul>
              <li><a href="#" class="ts-sidenav-panel-action">Configuration</a></li>
              <li><hr></li>
              <li><a href="#" class="ts-sidenav-panel-action">Permissions</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Stages</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Pages and Features</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Data Hygiene</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Campaign Scoring</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Digital Attribution Snippet</a></li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-section-break></ts-sidenav-section-break>

        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="Internal Configuration" tooltipPosition="after">
            <a routerLink="/configuration"><span class="fas fa-tools"></span><span class="sr-only">Internal Configuration</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout">
          <ts-tooltip tooltipValue="Switch User" tooltipPosition="after">
            <button><span class="fas fa-people-arrows"></span><span class="sr-only">Switch User</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Switch User Menu</div>
            <ul>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout" [statusFormGroup]="toggleForm">
          <ts-tooltip tooltipValue="Do Not Disturb" tooltipPosition="after">
            <button><span class="fas fa-moon"></span><span class="sr-only">Do Not Disturb</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-section-title">Do Not Disturb</div>
            <div class="ts-sidenav-panel-section-subtitle">Preferences</div>
            <hr>
            <form [formGroup]="toggleForm">
              <ul>
                <li><ts-toggle class="ts-sidenav-panel-action" formControlName="acme" labelPosition="before">ACME Co.</ts-toggle></li>
                <li>
                  <ts-toggle class="ts-sidenav-panel-action" formControlName="ajax" labelPosition="before">AJAX Corporation</ts-toggle>
                </li>
              </ul>
            </form>
          </div>
        </ts-sidenav-trigger>
      </ts-sidenav>
    </div>
    <!-- For a11y, scrollable content needs to be accessible via tabbing -->
    <div class="sidenav-demo-text" tabindex="0">
      <p>
        Optimism co-creation expose the truth greenwashing best practices. Human-centered benefit corporation, energize empower
        segmentation. Mass incarceration our work milestones invest our work uplift. Entrepreneur, thought leader, data corporate social
        responsibility circular greenwashing green space blended value scalable ecosystem NGO design thinking thought leadership justice.
      </p>
      <p>
        Thought leadership overcome injustice capacity building sustainable indicators compassion fairness low-hanging fruit correlation
        granular change-makers segmentation. Social entrepreneurship policymaker granular strengthening infrastructure empathetic movements
        collaborative cities venture philanthropy. Invest social entrepreneur B-corp when program area fairness white paper technology
        disrupt optimism.
      </p>
      <p>
        Theory of change disrupt mobilize thought provoking, collaborative consumption rubric human-centered, incubator
        policymaker society movements synergy resilient. Inspiring innovation strategize capacity building; uplift thought leader. Social
        intrapreneurship, capacity building, circular paradigm progress shared vocabulary accessibility social innovation peaceful do-gooder
        inclusive. Peaceful collaborate NGO accessibility; our work.
      </p>
      <p>
        Replicable corporate social responsibility collective impact collaborate, academic overcome injustice issue outcomes storytelling
        inclusion. Scalable, progress game-changer; living a fully ethical life, systems thinking dynamic state of play outcomes but
        cultivate circular relief our work. Mobilize society; rubric; resilient outcomes indicators catalyze shared value triple bottom
        line.
      </p>
      <p>
        Catalyze families bandwidth impact investing inspiring program areas paradigm because philanthropy inspiring. Collaborative
        consumption and; compassion, collaborative cities then ideate rubric. Granular triple bottom line social enterprise scale and impact
        innovate communities. Problem-solvers thought partnership living a fully ethical life transparent the resistance initiative. B-corp
        the grit; impact investing think tank revolutionary, triple bottom line activate indicators.
      </p>
    </div>
  </div>
  `,
  props: {
    user: USER_MOCK,
    switcherContent: SWITCHER_CONTENT_MOCK,
    currentTitle: 'Measurement Studio',
    acmeModel: true,
    ajaxModel: false,
    toggleForm: new FormGroup({
      acme: new FormControl(true),
      ajax: new FormControl(false),
    }),
  },
});
drawerPanel.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 600 },
};

export const drawerWithBoldPanel = () => ({
  template: `
  <style>
    ::ng-deep .sb-show-main {
      padding: 0 !important;
    }
    .sidenav-demo-container {
      background-color: #f1f2f4;
      display: flex;
      height: 100%;
    }
    .sidenav-wrapper {
      flex-shrink: 0;
      overflow: hidden;
    }
    .sidenav-demo-text {
      flex: 1;
      overflow-y: scroll;
      padding: 1em;
    }
    .sidenav-demo-text:focus {
      outline: 0;
    }
    .sidenav-demo-text p {
      margin-bottom: 2rem;
      max-width: 400px;
    }
  </style>

  <!-- This represents the top level page wrapper -->
  <div class="sidenav-demo-container">
    <!-- This is a wrapper around just the sidenav; this helps control flexbox and overflow behaviors -->
    <div class="sidenav-wrapper">
      <ts-sidenav
        [user]="user"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
      >
        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="ABM Scorecard" tooltipPosition="after">
            <a routerLink="/scorecard"><span class="fas fa-analytics"></span><span class="sr-only">ABM Scorecard</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer" [defaultOpen]="true">
          <ts-tooltip tooltipValue="Dashboards" tooltipPosition="after">
            <button><span class="fas fa-tachometer"></span><span class="sr-only">Dashboards</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Dashboards</div>
            <ul>
              <li class="ts-sidenav-bold-title">Dashboards Section 1</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li><hr></li>
              <li class="ts-sidenav-bold-title">Dashboards Section 2</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 3</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 4</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer">
          <ts-tooltip tooltipValue="Reports" tooltipPosition="after">
            <button><span class="fas fa-table"></span><span class="sr-only">Reports</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Settings</div>
            <ul>
              <li><a href="#" class="ts-sidenav-panel-action">Configuration</a></li>
              <li><hr></li>
              <li><a href="#" class="ts-sidenav-panel-action">Permissions</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Stages</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Pages and Features</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Data Hygiene</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Campaign Scoring</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Digital Attribution Snippet</a></li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-section-break></ts-sidenav-section-break>

        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="Internal Configuration" tooltipPosition="after">
            <a routerLink="/configuration"><span class="fas fa-tools"></span><span class="sr-only">Internal Configuration</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout">
          <ts-tooltip tooltipValue="Switch User" tooltipPosition="after">
            <button><span class="fas fa-people-arrows"></span><span class="sr-only">Switch User</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Switch User Menu</div>
            <ul>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout" [statusFormGroup]="toggleForm">
          <ts-tooltip tooltipValue="Do Not Disturb" tooltipPosition="after">
            <button><span class="fas fa-moon"></span><span class="sr-only">Do Not Disturb</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-section-title">Do Not Disturb</div>
            <div class="ts-sidenav-panel-section-subtitle">Preferences</div>
            <hr>
            <form [formGroup]="toggleForm">
              <ul>
                <li><ts-toggle class="ts-sidenav-panel-action" formControlName="acme" labelPosition="before">ACME Co.</ts-toggle></li>
                <li>
                  <ts-toggle class="ts-sidenav-panel-action" formControlName="ajax" labelPosition="before">AJAX Corporation</ts-toggle>
                </li>
              </ul>
            </form>
          </div>
        </ts-sidenav-trigger>
      </ts-sidenav>
    </div>
    <!-- For a11y, scrollable content needs to be accessible via tabbing -->
    <div class="sidenav-demo-text" tabindex="0">
      <p>
        Optimism co-creation expose the truth greenwashing best practices. Human-centered benefit corporation, energize empower
        segmentation. Mass incarceration our work milestones invest our work uplift. Entrepreneur, thought leader, data corporate social
        responsibility circular greenwashing green space blended value scalable ecosystem NGO design thinking thought leadership justice.
      </p>
      <p>
        Thought leadership overcome injustice capacity building sustainable indicators compassion fairness low-hanging fruit correlation
        granular change-makers segmentation. Social entrepreneurship policymaker granular strengthening infrastructure empathetic movements
        collaborative cities venture philanthropy. Invest social entrepreneur B-corp when program area fairness white paper technology
        disrupt optimism.
      </p>
      <p>
        Theory of change disrupt mobilize thought provoking, collaborative consumption rubric human-centered, incubator
        policymaker society movements synergy resilient. Inspiring innovation strategize capacity building; uplift thought leader. Social
        intrapreneurship, capacity building, circular paradigm progress shared vocabulary accessibility social innovation peaceful do-gooder
        inclusive. Peaceful collaborate NGO accessibility; our work.
      </p>
      <p>
        Replicable corporate social responsibility collective impact collaborate, academic overcome injustice issue outcomes storytelling
        inclusion. Scalable, progress game-changer; living a fully ethical life, systems thinking dynamic state of play outcomes but
        cultivate circular relief our work. Mobilize society; rubric; resilient outcomes indicators catalyze shared value triple bottom
        line.
      </p>
      <p>
        Catalyze families bandwidth impact investing inspiring program areas paradigm because philanthropy inspiring. Collaborative
        consumption and; compassion, collaborative cities then ideate rubric. Granular triple bottom line social enterprise scale and impact
        innovate communities. Problem-solvers thought partnership living a fully ethical life transparent the resistance initiative. B-corp
        the grit; impact investing think tank revolutionary, triple bottom line activate indicators.
      </p>
    </div>
  </div>
  `,
  props: {
    user: USER_MOCK,
    switcherContent: SWITCHER_CONTENT_MOCK,
    currentTitle: 'Measurement Studio',
    acmeModel: true,
    ajaxModel: false,
    toggleForm: new FormGroup({
      acme: new FormControl(true),
      ajax: new FormControl(false),
    }),
  },
});
drawerWithBoldPanel.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 600 },
};

export const userPanel = () => ({
  template: `
  <style>
    ::ng-deep .sb-show-main {
      padding: 0 !important;
    }
    .sidenav-demo-container {
      background-color: #f1f2f4;
      display: flex;
      height: 100%;
    }
    .sidenav-wrapper {
      flex-shrink: 0;
      overflow: hidden;
    }
    .sidenav-demo-text {
      flex: 1;
      overflow-y: scroll;
      padding: 1em;
    }
    .sidenav-demo-text:focus {
      outline: 0;
    }
    .sidenav-demo-text p {
      margin-bottom: 2rem;
      max-width: 400px;
    }
  </style>

  <!-- This represents the top level page wrapper -->
  <div class="sidenav-demo-container">
    <!-- This is a wrapper around just the sidenav; this helps control flexbox and overflow behaviors -->
    <div class="sidenav-wrapper">
      <ts-sidenav
        [user]="user"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
        [isUserPanelOpen]="true"
      >
        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="ABM Scorecard" tooltipPosition="after">
            <a routerLink="/scorecard"><span class="fas fa-analytics"></span><span class="sr-only">ABM Scorecard</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer">
          <ts-tooltip tooltipValue="Dashboards" tooltipPosition="after">
            <button><span class="fas fa-tachometer"></span><span class="sr-only">Dashboards</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Dashboards</div>
            <ul>
              <li class="ts-sidenav-bold-title">Dashboards Section 1</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li><hr></li>
              <li class="ts-sidenav-bold-title">Dashboards Section 2</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 3</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 4</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer">
          <ts-tooltip tooltipValue="Reports" tooltipPosition="after">
            <button><span class="fas fa-table"></span><span class="sr-only">Reports</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Settings</div>
            <ul>
              <li><a href="#" class="ts-sidenav-panel-action">Configuration</a></li>
              <li><hr></li>
              <li><a href="#" class="ts-sidenav-panel-action">Permissions</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Stages</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Pages and Features</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Data Hygiene</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Campaign Scoring</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Digital Attribution Snippet</a></li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-section-break></ts-sidenav-section-break>

        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="Internal Configuration" tooltipPosition="after">
            <a routerLink="/configuration"><span class="fas fa-tools"></span><span class="sr-only">Internal Configuration</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout">
          <ts-tooltip tooltipValue="Switch User" tooltipPosition="after">
            <button><span class="fas fa-people-arrows"></span><span class="sr-only">Switch User</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Switch User Menu</div>
            <ul>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout" [statusFormGroup]="toggleForm">
          <ts-tooltip tooltipValue="Do Not Disturb" tooltipPosition="after">
            <button><span class="fas fa-moon"></span><span class="sr-only">Do Not Disturb</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-section-title">Do Not Disturb</div>
            <div class="ts-sidenav-panel-section-subtitle">Preferences</div>
            <hr>
            <form [formGroup]="toggleForm">
              <ul>
                <li><ts-toggle class="ts-sidenav-panel-action" formControlName="acme" labelPosition="before">ACME Co.</ts-toggle></li>
                <li>
                  <ts-toggle class="ts-sidenav-panel-action" formControlName="ajax" labelPosition="before">AJAX Corporation</ts-toggle>
                </li>
              </ul>
            </form>
          </div>
        </ts-sidenav-trigger>
      </ts-sidenav>
    </div>
    <!-- For a11y, scrollable content needs to be accessible via tabbing -->
    <div class="sidenav-demo-text" tabindex="0">
      <p>
        Optimism co-creation expose the truth greenwashing best practices. Human-centered benefit corporation, energize empower
        segmentation. Mass incarceration our work milestones invest our work uplift. Entrepreneur, thought leader, data corporate social
        responsibility circular greenwashing green space blended value scalable ecosystem NGO design thinking thought leadership justice.
      </p>
      <p>
        Thought leadership overcome injustice capacity building sustainable indicators compassion fairness low-hanging fruit correlation
        granular change-makers segmentation. Social entrepreneurship policymaker granular strengthening infrastructure empathetic movements
        collaborative cities venture philanthropy. Invest social entrepreneur B-corp when program area fairness white paper technology
        disrupt optimism.
      </p>
      <p>
        Theory of change disrupt mobilize thought provoking, collaborative consumption rubric human-centered, incubator
        policymaker society movements synergy resilient. Inspiring innovation strategize capacity building; uplift thought leader. Social
        intrapreneurship, capacity building, circular paradigm progress shared vocabulary accessibility social innovation peaceful do-gooder
        inclusive. Peaceful collaborate NGO accessibility; our work.
      </p>
      <p>
        Replicable corporate social responsibility collective impact collaborate, academic overcome injustice issue outcomes storytelling
        inclusion. Scalable, progress game-changer; living a fully ethical life, systems thinking dynamic state of play outcomes but
        cultivate circular relief our work. Mobilize society; rubric; resilient outcomes indicators catalyze shared value triple bottom
        line.
      </p>
      <p>
        Catalyze families bandwidth impact investing inspiring program areas paradigm because philanthropy inspiring. Collaborative
        consumption and; compassion, collaborative cities then ideate rubric. Granular triple bottom line social enterprise scale and impact
        innovate communities. Problem-solvers thought partnership living a fully ethical life transparent the resistance initiative. B-corp
        the grit; impact investing think tank revolutionary, triple bottom line activate indicators.
      </p>
    </div>
  </div>
  `,
  props: {
    user: USER_MOCK,
    switcherContent: SWITCHER_CONTENT_MOCK,
    currentTitle: 'Measurement Studio',
    acmeModel: true,
    ajaxModel: false,
    toggleForm: new FormGroup({
      acme: new FormControl(true),
      ajax: new FormControl(false),
    }),
  },
});
userPanel.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 600 },
};

export const userPanelWithNewDisplay = () => ({
  template: `
  <style>
    ::ng-deep .sb-show-main {
      padding: 0 !important;
    }
    .sidenav-demo-container {
      background-color: #f1f2f4;
      display: flex;
      height: 100%;
    }
    .sidenav-wrapper {
      flex-shrink: 0;
      overflow: hidden;
    }
    .sidenav-demo-text {
      flex: 1;
      overflow-y: scroll;
      padding: 1em;
    }
    .sidenav-demo-text:focus {
      outline: 0;
    }
    .sidenav-demo-text p {
      margin-bottom: 2rem;
      max-width: 400px;
    }
  </style>

  <!-- This represents the top level page wrapper -->
  <div class="sidenav-demo-container">
    <!-- This is a wrapper around just the sidenav; this helps control flexbox and overflow behaviors -->
    <div class="sidenav-wrapper">
      <ts-sidenav
        [user]="user"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
        [isUserPanelOpen]="true"
        [options]="sidenavOptions"
        [newSidenavDisplay]="true"
      >
        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="ABM Scorecard" tooltipPosition="after">
            <a routerLink="/scorecard"><span class="fas fa-analytics"></span><span class="sr-only">ABM Scorecard</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer">
          <ts-tooltip tooltipValue="Dashboards" tooltipPosition="after">
            <button><span class="fas fa-tachometer"></span><span class="sr-only">Dashboards</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Dashboards</div>
            <ul>
              <li class="ts-sidenav-bold-title">Dashboards Section 1</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li><hr></li>
              <li class="ts-sidenav-bold-title">Dashboards Section 2</li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 3</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 4</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="drawer">
          <ts-tooltip tooltipValue="Reports" tooltipPosition="after">
            <button><span class="fas fa-table"></span><span class="sr-only">Reports</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Settings</div>
            <ul>
              <li><a href="#" class="ts-sidenav-panel-action">Configuration</a></li>
              <li><hr></li>
              <li><a href="#" class="ts-sidenav-panel-action">Permissions</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Stages</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Pages and Features</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Data Hygiene</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Campaign Scoring</a></li>
              <li><a href="#" class="ts-sidenav-panel-action">Digital Attribution Snippet</a></li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-section-break></ts-sidenav-section-break>

        <ts-sidenav-trigger>
          <ts-tooltip tooltipValue="Internal Configuration" tooltipPosition="after">
            <a routerLink="/configuration"><span class="fas fa-tools"></span><span class="sr-only">Internal Configuration</span></a>
          </ts-tooltip>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout">
          <ts-tooltip tooltipValue="Switch User" tooltipPosition="after">
            <button><span class="fas fa-people-arrows"></span><span class="sr-only">Switch User</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Switch User Menu</div>
            <ul>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 1</a>
              </li>
              <li>
                <a href="#" class="ts-sidenav-panel-action">Link 2</a>
              </li>
            </ul>
          </div>
        </ts-sidenav-trigger>

        <ts-sidenav-trigger panelType="popout" [statusFormGroup]="toggleForm">
          <ts-tooltip tooltipValue="Do Not Disturb" tooltipPosition="after">
            <button><span class="fas fa-moon"></span><span class="sr-only">Do Not Disturb</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-section-title">Do Not Disturb</div>
            <div class="ts-sidenav-panel-section-subtitle">Preferences</div>
            <hr>
            <form [formGroup]="toggleForm">
              <ul>
                <li><ts-toggle class="ts-sidenav-panel-action" formControlName="acme" labelPosition="before">ACME Co.</ts-toggle></li>
                <li>
                  <ts-toggle class="ts-sidenav-panel-action" formControlName="ajax" labelPosition="before">AJAX Corporation</ts-toggle>
                </li>
              </ul>
            </form>
          </div>
        </ts-sidenav-trigger>
      </ts-sidenav>
    </div>
    <!-- For a11y, scrollable content needs to be accessible via tabbing -->
    <div class="sidenav-demo-text" tabindex="0">
      <p>
        Optimism co-creation expose the truth greenwashing best practices. Human-centered benefit corporation, energize empower
        segmentation. Mass incarceration our work milestones invest our work uplift. Entrepreneur, thought leader, data corporate social
        responsibility circular greenwashing green space blended value scalable ecosystem NGO design thinking thought leadership justice.
      </p>
      <p>
        Thought leadership overcome injustice capacity building sustainable indicators compassion fairness low-hanging fruit correlation
        granular change-makers segmentation. Social entrepreneurship policymaker granular strengthening infrastructure empathetic movements
        collaborative cities venture philanthropy. Invest social entrepreneur B-corp when program area fairness white paper technology
        disrupt optimism.
      </p>
      <p>
        Theory of change disrupt mobilize thought provoking, collaborative consumption rubric human-centered, incubator
        policymaker society movements synergy resilient. Inspiring innovation strategize capacity building; uplift thought leader. Social
        intrapreneurship, capacity building, circular paradigm progress shared vocabulary accessibility social innovation peaceful do-gooder
        inclusive. Peaceful collaborate NGO accessibility; our work.
      </p>
      <p>
        Replicable corporate social responsibility collective impact collaborate, academic overcome injustice issue outcomes storytelling
        inclusion. Scalable, progress game-changer; living a fully ethical life, systems thinking dynamic state of play outcomes but
        cultivate circular relief our work. Mobilize society; rubric; resilient outcomes indicators catalyze shared value triple bottom
        line.
      </p>
      <p>
        Catalyze families bandwidth impact investing inspiring program areas paradigm because philanthropy inspiring. Collaborative
        consumption and; compassion, collaborative cities then ideate rubric. Granular triple bottom line social enterprise scale and impact
        innovate communities. Problem-solvers thought partnership living a fully ethical life transparent the resistance initiative. B-corp
        the grit; impact investing think tank revolutionary, triple bottom line activate indicators.
      </p>
    </div>
  </div>
  `,
  props: {
    user: USER_MOCK,
    switcherContent: SWITCHER_CONTENT_MOCK,
    currentTitle: 'Measurement Studio',
    sidenavOptions: SIDENAV_OPTIONS_MOCK,
    acmeModel: true,
    ajaxModel: false,
    toggleForm: new FormGroup({
      acme: new FormControl(true),
      ajax: new FormControl(false),
    }),
  },
});
userPanelWithNewDisplay.parameters = {
  actions: { disabled: true },
  knobs: { disabled: true },
  docs: { iframeHeight: 600 },
};
