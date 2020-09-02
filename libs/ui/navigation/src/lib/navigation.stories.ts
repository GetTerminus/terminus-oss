import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import {
  number,
  object,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { BehaviorSubject } from 'rxjs';

import {
  TsNavigationComponent,
  TsNavigationItem,
  TsNavigationModule,
  TsNavigationPayload,
  TsUser,
} from '@terminus/ui-navigation';

export default {
  title: 'Components/Navigation/Navigation (horizontal)',
  component: TsNavigationComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        TsNavigationModule,
      ],
    }),
  ],
};

const NAV_ITEMS_MOCK: TsNavigationItem[] = [
  {
    name: '1 Components',
    destination: '/components',
    alwaysHidden: false,
  },
  {
    name: '2 Nav',
    destination: '/components/navigation',
    alwaysHidden: false,
  },
  {
    name: '3 Buttons',
    destination: ['/components/button'],
    alwaysHidden: false,
  },
  {
    name: '4 Action',
    action: { type: 'Do:thing' },
    alwaysHidden: false,
  },
  {
    name: '5 Menus',
    destination: ['/components/menu'],
    alwaysHidden: false,
  },
  {
    name: '7 External',
    destination: 'https://google.com',
    alwaysHidden: true,
  },
  {
    name: '8 Hidden',
    action: { type: 'Do:another:thing' },
    alwaysHidden: true,
  },
];
interface StoryActionPayload {
  payload: TsNavigationPayload;
  metaKey: boolean;
}
@Component({
  selector: 'ts-navigation-wrapper',
  styles: [
    `
      :host {
        display: block;
        min-height: 360px;
      }
    `,
  ],
  template: `
    <ts-navigation
      [items]="navigationItems$ | async"
      [user]="currentUser$ | async"
      [welcomeMessage]="welcomeMessage"
      [welcomeMsgLength]="welcomeMsgLength"
      [userNameLength]="userNameLength"
      (action)="triggerAction($event)"
    ></ts-navigation>
  `,
})
class NavigationWrapper {
  public currentUser$: BehaviorSubject<TsUser | undefined> = new BehaviorSubject(void 0);
  public navigationItems$ = new BehaviorSubject<ReadonlyArray<TsNavigationItem>>(NAV_ITEMS_MOCK.slice());
  public myMessage = 'Hello, this message is 37 characters.';
  @Input() public welcomeMessage: string;
  @Input() public welcomeMsgLength: number;
  @Input() public userNameLength: number;
  @Input() public containerWidth: number;
  @Input() public set currentUser(value: TsUser) {
    this.currentUser$.next(value);
  }
  @Output() public readonly action = new EventEmitter<StoryActionPayload>();

  public triggerAction(payload: TsNavigationPayload): void {
    this.action.emit({
      payload,
      metaKey: payload.event.metaKey,
    });
  }
}

export const basic = () => ({
  component: NavigationWrapper,
  props: {
    currentUser: object(
      'Current user',
      {
        id: 1,
        email: 'max@roadwarrior.com',
        firstname: 'Max',
        lastname: 'Rockatansky',
        fullName: 'Max Rockatansky',
      },
    ),
    welcomeMessage: text('Welcome message', 'Hello, this message is 37 characters.'),
    userNameLength: number('User name maximum length', 20),
    welcomeMsgLength: number('Welcome message maximum length', 20),
    action: action('Action triggered'),
  },
});
