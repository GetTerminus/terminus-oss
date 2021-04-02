import { OverlayContainer } from '@angular/cdk/overlay';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Spectator } from '@ngneat/spectator';
import {
  createComponentFactory,
  createHostFactory,
  SpectatorHost,
} from '@ngneat/spectator/jest';

import { createMouseEvent } from '@terminus/fe-testing';
import {
  TS_SIDENAV_DEFAULT_OPTIONS,
  TsSidenavComponent,
  TsSidenavModule,
  TsSidenavPlatformSwitcherComponent,
  TsSidenavTriggerComponent,
} from '@terminus/ui-sidenav';
import type {
  TS_SIDENAV_PLATFORM_SWITCHER_CONTENT,
  TS_SIDENAV_USER,
} from '@terminus/ui-sidenav';
import { TsToggleModule } from '@terminus/ui-toggle';
import { TsTooltipModule } from '@terminus/ui-tooltip';

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
    title: 'Section 1',
    children: [
      {
        title: 'Section 1 Child 1',
        url: 'https://ds.com',
        iconClasses: 'fas fa-shapes',
      },
      {
        title: 'Section 1 Child 2',
        url: 'https://ms.com',
        iconClasses: 'fas fa-chart-pie',
      },
    ],
  },
  {
    title: 'Section 2',
    children: [
      {
        title: 'Section 2 Child 1',
        url: 'https://ae.com',
        iconClasses: 'fas fa-clone',
      },
      {
        title: 'Section 2 Child 2',
        url: 'https://ee.com',
        iconClasses: 'fas fa-paper-plane',
      },
    ],
  },
];

const SIDENAV_TEMPLATE = `
  <ts-sidenav
    [user]="user"
    [switcherCurrentTitle]="currentTitle"
    [switcherContent]="switcherContent"
    [isPlatformSwitcherOpen]="isPlatformSwitcherOpen"
  >
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

    <ts-sidenav-trigger>
      <ts-tooltip tooltipValue="ABM Scorecard" tooltipPosition="after">
        <a routerLink="/scorecard"><span class="fas fa-analytics"></span><span class="sr-only">ABM Scorecard</span></a>
      </ts-tooltip>
    </ts-sidenav-trigger>
  </ts-sidenav>
`;

const SIDENAV_TEMPLATE_DEFAULT_DRAWER = `
  <ts-sidenav
    [user]="user"
    [switcherCurrentTitle]="currentTitle"
    [switcherContent]="switcherContent"
  >
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
        </ul>
      </div>
    </ts-sidenav-trigger>
  </ts-sidenav>
`;

const SIDENAV_TEMPLATE_DEFAULT_POPOUT = `
  <ts-sidenav
    [user]="user"
    [switcherCurrentTitle]="currentTitle"
    [switcherContent]="switcherContent"
  >
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
  </ts-sidenav>
`;

const MODULE_IMPORTS = [
  NoopAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  RouterTestingModule,
  TsSidenavModule,
  TsToggleModule,
  TsTooltipModule,
];

describe(`TsSidenavComponent`, function() {
  describe(`without template`, () => {
    let spectator: Spectator<TsSidenavComponent>;
    let rootElement: HTMLElement;
    const createComponent = createComponentFactory({
      component: TsSidenavComponent,
      imports: [...MODULE_IMPORTS],
      declareComponent: false,
    });
    let overlay: OverlayContainer;
    let overlayContainerElement: HTMLElement;

    beforeEach(() => {
      spectator = createComponent({
        props: {
          switcherCurrentTitle: 'My Title',
        },
      });
      rootElement = spectator.component.elementRef.nativeElement;
      overlay = spectator.inject<OverlayContainer>(OverlayContainer);
      overlayContainerElement = overlay.getContainerElement();
    });

    test(`should exist`, () => {
      expect(spectator.query('.ts-sidenav-wrapper')).toExist();
    });

    describe(`ID`, () => {
      test(`should set default ID as attribute`, () => {
        const id = rootElement.getAttribute('id');
        // Format: `ts-sidenav-N`
        expect(id).toEqual(expect.stringContaining('ts-sidenav-'));
      });

      test(`should accept custom ID and fallback to UID`, () => {
        spectator.setInput('id', 'foo');
        spectator.detectChanges();
        expect(spectator.component.id).toEqual('foo');

        spectator.setInput('id', undefined);
        spectator.detectChanges();
        expect(spectator.component.id).toEqual(spectator.component.uid);
      });
    });

    describe(`PlatformSwitcher`, () => {
      test(`should display passed in switcher content`, () => {
        spectator.setInput('switcherContent', SWITCHER_CONTENT_MOCK);
        spectator.setInput('isPlatformSwitcherOpen', true);
        spectator.detectChanges();
        expect('.ts-switcher__section-title').toContainText(['Section 1', 'Section 2']);
      });

      test(`should display the current title`, () => {
        spectator.setInput('switcherCurrentTitle', 'Foo Bar');
        spectator.detectChanges();
        expect('.ts-sidenav-platform-switcher h1').toContainText('Foo Bar');
      });

      describe(`ID`, () => {
        test(`should set default ID as attribute`, () => {
          const id = spectator.query('.ts-sidenav-platform-switcher').getAttribute('id');
          // Format: `ts-sidenav-N-switcher`
          expect(id).toEqual(expect.stringContaining('ts-sidenav-'));
          expect(id).toEqual(expect.stringContaining('-switcher'));
        });

        test(`should accept custom ID and fallback to UID`, () => {
          spectator.setInput('id', 'foo');
          spectator.detectChanges();
          const id = spectator.query('.ts-sidenav-platform-switcher').getAttribute('id');
          expect(id).toEqual('foo-switcher');
        });
      });

      describe(`panel state`, () => {
        test(`should change the open state based on the open flag`, () => {
          let panel = overlayContainerElement.querySelector('.ts-sidenav-panel-wrap--switcher');
          expect(panel).not.toExist();

          spectator.setInput('isPlatformSwitcherOpen', true);
          spectator.detectChanges();
          panel = overlayContainerElement.querySelector('.ts-sidenav-panel-wrap--switcher');
          expect(panel).toExist();
        });

        test(`should correctly call open & close when toggling`, () => {
          const switcher = spectator.query(TsSidenavPlatformSwitcherComponent);
          expect(switcher.isPanelOpen).toEqual(false);

          switcher.toggle();
          spectator.detectChanges();
          expect(switcher.isPanelOpen).toEqual(true);

          switcher.toggle();
          spectator.detectChanges();
          expect(switcher.isPanelOpen).toEqual(false);
        });
      });
    });

    describe(`UserMenu`, () => {
      test(`should display the user image if one exists`, () => {
        spectator.setInput('user', USER_MOCK_WITH_IMAGE);
        spectator.detectChanges();
        expect(spectator.query('img')).toBeTruthy();
        expect(spectator.query('img')).toHaveProperty('src', USER_MOCK_WITH_IMAGE.imageUrl);
      });

      test(`should fall back to display the first initial if no image exists`, () => {
        spectator.setInput('user', USER_MOCK);
        spectator.detectChanges();
        expect(spectator.query('img')).toBeFalsy();
        expect(spectator.query('.fake-image')).toHaveText(USER_MOCK.name.slice(0, 1));
      });

      test(`should open user menu when user interacts with the trigger`, () => {
        spectator.setInput('user', USER_MOCK);
        spectator.click('.ts-sidenav__user-image');
        spectator.detectChanges();
        const panel = overlayContainerElement.querySelector('.ts-sidenav-panel-wrap--user');
        expect(panel).toExist();
      });

      test(`should display user info`, () => {
        spectator.setInput('user', USER_MOCK);
        spectator.click('.ts-sidenav__user-image');
        spectator.detectChanges();
        expect(spectator.query('.ts-sidenav-user__name')).toContainText(USER_MOCK.name);
        expect(spectator.query('.ts-sidenav-user__email')).toContainText(USER_MOCK.email);
      });

      test(`should set URLs to default options`, () => {
        spectator.setInput('user', USER_MOCK);
        spectator.click('.ts-sidenav__user-image');
        spectator.detectChanges();
        expect(spectator.query('.ts-sidenav-panel-wrap--user ul li:nth-of-type(1) a').getAttribute('href'))
          .toEqual(expect.stringContaining(spectator.component.options.profileRoute));
        expect(spectator.query('.ts-sidenav-panel-wrap--user ul li:nth-of-type(3) a').getAttribute('href'))
          .toEqual(expect.stringContaining(spectator.component.options.knowledgeBaseUrl));
        expect(spectator.query('.ts-sidenav-panel-wrap--user ul li:nth-of-type(4) a').getAttribute('href'))
          .toEqual(expect.stringContaining(spectator.component.options.academyUrl));
        expect(spectator.query('.ts-sidenav-panel-wrap--user ul li:nth-of-type(6) a').getAttribute('href'))
          .toEqual(expect.stringContaining(spectator.component.options.signOutRoute));
      });
    });
  });

  describe(`with full template`, () => {
    let spectator: SpectatorHost<TsSidenavComponent>;
    const createHost = createHostFactory({
      component: TsSidenavComponent,
      imports: [...MODULE_IMPORTS],
      declareComponent: false,
    });
    let overlay: OverlayContainer;
    let overlayContainerElement: HTMLElement;

    beforeEach(() => {
      spectator = createHost(SIDENAV_TEMPLATE, {
        hostProps: {
          currentTitle: 'Foo Title',
          switcherContent: SWITCHER_CONTENT_MOCK,
          user: USER_MOCK,
          isPlatformSwitcherOpen: false,
          toggleForm: new FormGroup({
            acme: new FormControl(false),
            ajax: new FormControl(false),
          }),
        },
      });
      overlay = spectator.inject<OverlayContainer>(OverlayContainer);
      overlayContainerElement = overlay.getContainerElement();
    });

    describe(`Trigger`, () => {
      test(`should not add overlay for basic panel type`, () => {
        let panel = overlayContainerElement.querySelector('.ts-sidenav-panel-wrap');
        expect(panel).not.toExist();

        const trigger = spectator.queryLast(TsSidenavTriggerComponent);
        trigger.toggle();

        spectator.detectChanges();
        panel = overlayContainerElement.querySelector('.ts-sidenav-panel-wrap');
        expect(panel).not.toExist();
      });

      test(`should set state state and classes on toggle`, () => {
        const trigger = spectator.query(TsSidenavTriggerComponent);
        trigger.toggle();
        spectator.detectChanges();
        expect(trigger.isPanelOpen).toEqual(true);
        expect(trigger.elementRef.nativeElement).toHaveClass('ts-sidenav-trigger--open');

        trigger.toggle();
        spectator.detectChanges();
        expect(trigger.isPanelOpen).toEqual(false);
        expect(trigger.elementRef.nativeElement).not.toHaveClass('ts-sidenav-trigger--open');
      });

      test(`should stop event propagation on toggle`, () => {
        const trigger = spectator.query(TsSidenavTriggerComponent);
        const event = createMouseEvent('click');
        event.stopPropagation = jest.fn();
        trigger.toggle(event);
        spectator.detectChanges();
        expect(trigger.isPanelOpen).toEqual(true);
        expect(trigger.elementRef.nativeElement).toHaveClass('ts-sidenav-trigger--open');
        expect(event.stopPropagation).toHaveBeenCalled();
      });

      test(`should change the open state based on the open flag`, () => {
        const trigger = spectator.queryAll(TsSidenavTriggerComponent)[0];
        trigger.isPanelOpen = true;
        spectator.detectChanges();
        expect(trigger.isPanelOpen).toEqual(true);
      });

      test(`should focus the trigger if it is a button`, () => {
        const trigger = spectator.queryAll(TsSidenavTriggerComponent)[0];
        trigger.focusTrigger();
        expect(spectator.query('.ts-sidenav-trigger button')).toEqual(document.activeElement);
      });

      test(`should focus the trigger if it is a link`, () => {
        const trigger = spectator.queryAll(TsSidenavTriggerComponent)[1];
        trigger.focusTrigger();
        expect(spectator.query('.ts-sidenav-trigger a')).toEqual(document.activeElement);
      });

      describe(`ID`, () => {
        test(`should set default ID as attribute`, () => {
          const trigger = spectator.queryAll(TsSidenavTriggerComponent)[0];
          const id = trigger.elementRef.nativeElement.getAttribute('id');
          // Format: `ts-sidenav-trigger-N`
          expect(id).toEqual(expect.stringContaining('ts-sidenav-trigger-'));
        });

        test(`should accept custom ID and fallback to UID`, () => {
          const trigger = spectator.queryAll(TsSidenavTriggerComponent)[0];
          trigger.id = 'foo';
          spectator.detectChanges();
          const id = trigger.elementRef.nativeElement.getAttribute('id');
          expect(id).toEqual(expect.stringContaining('foo'));

          trigger.id = undefined;
          spectator.detectChanges();
          expect(trigger.id).toEqual(trigger.uid);
        });
      });

      describe(`status`, () => {
        test(`should have no status dot when all controls are false`, () => {
          const trigger = spectator.queryAll(TsSidenavTriggerComponent)[0];
          expect(trigger.elementRef.nativeElement).not.toHaveClass('ts-sidenav-trigger--amber');
          expect(trigger.elementRef.nativeElement).not.toHaveClass('ts-sidenav-trigger--red');
        });

        test(`should set the status to amber when at least 1 control is true but not all`, () => {
          spectator.hostComponent['toggleForm'].controls.ajax.setValue(true);
          spectator.detectChanges();
          const trigger = spectator.queryAll(TsSidenavTriggerComponent)[0];
          expect(trigger.elementRef.nativeElement).toHaveClass('ts-sidenav-trigger--amber');
          expect(trigger.elementRef.nativeElement).not.toHaveClass('ts-sidenav-trigger--red');
        });

        test(`should set the status to red when all controls are true`, () => {
          spectator.hostComponent['toggleForm'].controls.ajax.setValue(true);
          spectator.hostComponent['toggleForm'].controls.acme.setValue(true);
          spectator.detectChanges();
          const trigger = spectator.queryAll(TsSidenavTriggerComponent)[0];
          expect(trigger.elementRef.nativeElement).toHaveClass('ts-sidenav-trigger--red');
          expect(trigger.elementRef.nativeElement).not.toHaveClass('ts-sidenav-trigger--amber');
        });
      });
    });
  });
});

describe(`Default Open State`, () => {
  let spectator: SpectatorHost<TsSidenavComponent>;
  const createHost = createHostFactory({
    component: TsSidenavComponent,
    imports: [...MODULE_IMPORTS],
    declareComponent: false,
  });
  let overlay: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  describe(`Application Switcher`, () => {
    const SWITCHER_DEFAULT_OPEN = `
      <ts-sidenav
        [user]="user"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
        [isPlatformSwitcherOpen]="true"
      ></ts-sidenav>
    `;

    beforeEach(() => {
      spectator = createHost(SWITCHER_DEFAULT_OPEN, {
        hostProps: {
          currentTitle: 'Switcher Title',
          switcherContent: SWITCHER_CONTENT_MOCK,
          user: USER_MOCK,
        },
      });
      overlay = spectator.inject<OverlayContainer>(OverlayContainer);
      overlayContainerElement = overlay.getContainerElement();
      spectator.detectChanges();
    });

    test(`should be able to default switcher popout to the open state`, () => {
      const panel = overlayContainerElement.querySelector('.ts-sidenav-panel-wrap--switcher');
      expect(panel).toExist();
    });
  });

  describe(`Trigger Drawer`, () => {
    const DRAWER_DEFAULT_OPEN = `
      <ts-sidenav
        [user]="user"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
      >
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
            </ul>
          </div>
        </ts-sidenav-trigger>
      </ts-sidenav>
    `;

    beforeEach(() => {
      spectator = createHost(DRAWER_DEFAULT_OPEN, {
        hostProps: {
          currentTitle: 'Popout Title',
          switcherContent: SWITCHER_CONTENT_MOCK,
          user: USER_MOCK,
        },
      });
      overlay = spectator.inject<OverlayContainer>(OverlayContainer);
      overlayContainerElement = overlay.getContainerElement();
      spectator.detectChanges();
    });

    test(`should be able to default drawer to the open state`, () => {
      const panel = overlayContainerElement.querySelector('.ts-sidenav-panel-wrap--drawer');
      expect(panel).toExist();
    });
  });

  describe(`Trigger Popout`, () => {
    const POPOUT_DEFAULT_OPEN = `
      <ts-sidenav
        [user]="user"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
      >
        <ts-sidenav-trigger panelType="popout" [defaultOpen]="true">
          <ts-tooltip tooltipValue="Switch User" tooltipPosition="after">
            <button><span class="fas fa-people-arrows"></span><span class="sr-only">Switch User</span></button>
          </ts-tooltip>

          <div tsTriggerComponentPanelContent>
            <div class="ts-sidenav-panel-title">Switch User Menu</div>
          </div>
        </ts-sidenav-trigger>
      </ts-sidenav>
    `;

    beforeEach(() => {
      spectator = createHost(POPOUT_DEFAULT_OPEN, {
        hostProps: {
          currentTitle: 'Popout Title',
          switcherContent: SWITCHER_CONTENT_MOCK,
          user: USER_MOCK,
        },
      });
      overlay = spectator.inject<OverlayContainer>(OverlayContainer);
      overlayContainerElement = overlay.getContainerElement();
      spectator.detectChanges();
    });

    test(`should be able to default drawer to the open state`, () => {
      const panel = overlayContainerElement.querySelector('.ts-sidenav-panel-wrap--popout');
      expect(panel).toExist();
    });
  });

  describe(`User Popout`, () => {
    const USER_DEFAULT_OPEN = `
      <ts-sidenav
        [user]="user"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
        [isUserPanelOpen]="true"
      ></ts-sidenav>
    `;

    beforeEach(() => {
      spectator = createHost(USER_DEFAULT_OPEN, {
        hostProps: {
          currentTitle: 'Popout Title',
          switcherContent: SWITCHER_CONTENT_MOCK,
          user: USER_MOCK,
        },
      });
      overlay = spectator.inject<OverlayContainer>(OverlayContainer);
      overlayContainerElement = overlay.getContainerElement();
      spectator.detectChanges();
    });

    test(`should be able to default user popout to the open state`, () => {
      const panel = overlayContainerElement.querySelector('.ts-sidenav-panel-wrap--user');
      expect(panel).toExist();
    });
  });
});

describe(`User Default Options Override`, () => {
  let spectator: SpectatorHost<TsSidenavComponent>;
  const NEW_LINKS = {
    profileRoute: '/one',
    signOutRoute: '/two',
    academyUrl: '/three',
    knowledgeBaseUrl: '/four',
  };
  const createHost = createHostFactory({
    component: TsSidenavComponent,
    imports: [...MODULE_IMPORTS],
    providers: [
      {
        provide: TS_SIDENAV_DEFAULT_OPTIONS,
        useValue: NEW_LINKS,
      },
    ],
    declareComponent: false,
  });
  let overlay: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  const OVERRIDE_OPTIONS = `
      <ts-sidenav
        [user]="user"
        [switcherCurrentTitle]="currentTitle"
        [switcherContent]="switcherContent"
      ></ts-sidenav>
    `;

  beforeEach(() => {
    spectator = createHost(OVERRIDE_OPTIONS, {
      hostProps: {
        currentTitle: 'Popout Title',
        switcherContent: SWITCHER_CONTENT_MOCK,
        user: USER_MOCK,
      },
    });
    overlay = spectator.inject<OverlayContainer>(OverlayContainer);
    overlayContainerElement = overlay.getContainerElement();
    spectator.detectChanges();
  });

  test(`should allow custom URL destinations when overriding options`, () => {
    spectator.click('.ts-sidenav__user-image');
    spectator.detectChanges();
    expect(spectator.query('.ts-sidenav-panel-wrap--user ul li:nth-of-type(1) a').getAttribute('href'))
      .toEqual(expect.stringContaining(NEW_LINKS.profileRoute));
    expect(spectator.query('.ts-sidenav-panel-wrap--user ul li:nth-of-type(3) a').getAttribute('href'))
      .toEqual(expect.stringContaining(NEW_LINKS.knowledgeBaseUrl));
    expect(spectator.query('.ts-sidenav-panel-wrap--user ul li:nth-of-type(4) a').getAttribute('href'))
      .toEqual(expect.stringContaining(NEW_LINKS.academyUrl));
    expect(spectator.query('.ts-sidenav-panel-wrap--user ul li:nth-of-type(6) a').getAttribute('href'))
      .toEqual(expect.stringContaining(NEW_LINKS.signOutRoute));
  });
});
