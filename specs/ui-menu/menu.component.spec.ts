import { fakeAsync } from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  byText,
  Spectator,
} from '@ngneat/spectator';
import {
  createComponentFactory,
  createHostFactory,
  SpectatorHost,
} from '@ngneat/spectator/jest';

import { TsButtonModule } from '@terminus/ui-button';
import { TsCheckboxModule } from '@terminus/ui-checkbox';
import { TsLinkModule } from '@terminus/ui-link';
import {
  TsMenuComponent,
  TsMenuModule,
} from '@terminus/ui-menu';

const TEMPLATE = `
<ts-menu
  [menuItemsTemplate]="myTemplate"
  [triggerType]="triggerType"
>Select Item</ts-menu>

<ng-template #myTemplate>
  <ts-button tsMenuItem>Roger, Roger.</ts-button>
  <ts-link tsMenuItem>A tasty link</ts-link>
</ng-template>
`;

describe(`TsMenuComponent`, () => {
  let spectator: SpectatorHost<TsMenuComponent>;
  let rootElement: HTMLElement;
  const createHost = createHostFactory({
    component: TsMenuComponent,
    imports: [
      FormsModule,
      ReactiveFormsModule,
      RouterTestingModule,
      TsButtonModule,
      TsCheckboxModule,
      TsLinkModule,
      TsMenuModule,
    ],
    declareComponent: false,
  });

  describe(`trigger type`, () => {
    test(`should default to a standard trigger`, () => {
      spectator = createHost(`
        <ts-menu [menuItemsTemplate]="myTemplate">Select Item</ts-menu>
        <ng-template #myTemplate>
          <ts-button tsMenuItem>Roger, Roger.</ts-button>
          <ts-link tsMenuItem>A tasty link</ts-link>
        </ng-template>
      `);
      expect(spectator.query('.c-menu__trigger')).not.toHaveClass('c-menu__trigger--utility');
    });

    test(`should support a utility trigger`, () => {
      spectator = createHost(`<ts-menu triggerType="utility">Select Item</ts-menu>`);
      expect(spectator.query('.c-menu__trigger')).toHaveClass('c-menu__trigger--utility');
    });
  });

  describe(`trigger theme`, () => {
    test(`should default to a standard trigger theme`, () => {
      spectator = createHost(`<ts-menu>Select Item</ts-menu>`);
      expect(spectator.query('.c-menu__trigger .c-button')).toHaveClass('c-button--default');
    });

    test(`should support a utility trigger`, () => {
      spectator = createHost(`<ts-menu triggerTheme="secondary">Select Item</ts-menu>`);
      expect(spectator.query('.c-menu__trigger .c-button')).not.toHaveClass('c-button--default');
      expect(spectator.query('.c-menu__trigger .c-button')).toHaveClass('c-button--secondary');
    });
  });

  describe(`disabled`, () => {
    test(`should block interaction when disabled`, () => {
      spectator = createHost(`<ts-menu [isDisabled]="true">Select Item</ts-menu>`);
      rootElement = spectator.component.elementRef.nativeElement;
      expect(rootElement).toHaveClass('ts-menu');
      expect(rootElement).toHaveClass('ts-menu--disabled');
    });

    test(`should not block interaction when enabled`, () => {
      spectator = createHost(`<ts-menu [isDisabled]="false">Select Item</ts-menu>`);
      rootElement = spectator.component.elementRef.nativeElement;
      expect(rootElement).toHaveClass('ts-menu');
      expect(rootElement).not.toHaveClass('ts-menu--disabled');
    });
  });

  describe(`default opened`, () => {
    test(`should default to the opened state`, fakeAsync(() => {
      spectator = createHost(`<ts-menu [defaultOpened]="true">Select Item</ts-menu>`);
      spectator.tick();
      expect(spectator.query('.ts-menu__panel')).toExist();
    }));
  });

  describe(`tsMenuItem`, () => {
    test(`should add the default class if added`, () => {
      spectator = createHost(`
        <ts-menu [menuItemsTemplate]="myTemplate" [defaultOpened]="true">Select Item</ts-menu>
        <ng-template #myTemplate>
          <button tsMenuItem>Roger, Roger.</button>
          <a href="#">A tasty link</a>
        </ng-template>
      `);
      expect(spectator.query('.ts-menu__panel button')).toHaveClass('ts-menu__item');
      expect(spectator.queryAll('.ts-menu__item').length).toEqual(1);
    });

    test(`should add the transparent class if defined`, () => {
      spectator = createHost(`
        <ts-menu [menuItemsTemplate]="myTemplate" [defaultOpened]="true">Select Item</ts-menu>
        <ng-template #myTemplate>
          <button tsMenuItem="transparent">Roger, Roger.</button>
          <a href="#">A tasty link</a>
        </ng-template>
      `);
      expect(spectator.query('.ts-menu__panel button')).toHaveClass('ts-menu__item');
      expect(spectator.queryAll('.ts-menu__item').length).toEqual(1);
      expect(spectator.query('.ts-menu__panel button')).toHaveClass('ts-menu__item--transparent');
      expect(spectator.queryAll('.ts-menu__item--transparent').length).toEqual(1);
    });

    describe('isDisabled flag', () => {
      test('should set disabled property when true', () => {
        spectator = createHost(`
          <ts-menu [menuItemsTemplate]="myTemplate" [defaultOpened]="true">Select Item</ts-menu>
          <ng-template #myTemplate>
            <button tsMenuItem [isDisabled]="true">Roger, Roger.</button>
            <a href="#">A tasty link</a>
          </ng-template>
        `);
        expect(spectator.query('.ts-menu__panel button')).toHaveClass('ts-menu__item--disabled');
        expect(spectator.query('.ts-menu__panel button')).toHaveProperty('disabled', true);
      });

      test('should clear disabled property when false', () => {
        spectator = createHost(`
          <ts-menu [menuItemsTemplate]="myTemplate" [defaultOpened]="true">Select Item</ts-menu>
          <ng-template #myTemplate>
            <button tsMenuItem [isDisabled]="false">Roger, Roger.</button>
            <a href="#">A tasty link</a>
          </ng-template>
        `);
        expect(spectator.query('.ts-menu__panel button')).not.toHaveClass('ts-menu__item--disabled');
        expect(spectator.query('.ts-menu__panel button')).toHaveProperty('disabled', false);
      });
    });
  });
});
