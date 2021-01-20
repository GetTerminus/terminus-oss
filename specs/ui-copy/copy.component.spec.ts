import { Injectable } from '@angular/core';
import { SpectatorHost } from '@ngneat/spectator';
import { createHostFactory } from '@ngneat/spectator/jest';

import {
  noop,
  TsWindowService,
} from '@terminus/fe-utilities';
import {
  TsCopyComponent,
  TsCopyModule,
} from '@terminus/ui-copy';
import { TsTooltipModule } from '@terminus/ui-tooltip';

@Injectable({ providedIn: 'root' })
export class TsWindowServiceMock {
  public styleObject: CSSStyleDeclaration = { width: '90px' } as any;

  public get nativeWindow(): Window {
    return {
      getComputedStyle: e => this.styleObject,
      open: noop,
      location: {
        href: 'foo/bar',
        protocol: 'https:',
      },
      alert: noop,
      getSelection: () => ({
        removeAllRanges: noop,
        addRange: noop,
      }),
      scrollTo: (x: number, y: number) => { },
      prompt: noop,
    } as any;
  }
}

describe(`TsCopyComponent`, () => {
  let spectator: SpectatorHost<TsCopyComponent>;
  const createHost = createHostFactory({
    component: TsCopyComponent,
    imports: [
      TsCopyModule,
      TsTooltipModule,
    ],
    providers: [
      {
        provide: TsWindowService,
        useClass: TsWindowServiceMock,
      },
    ],
    declareComponent: false,
  });

  test(`should display the text`, () => {
    spectator = createHost(`<ts-copy>Foo bar</ts-copy>`);
    expect(spectator.query('.c-copy__content')).toHaveText('Foo bar');
  });

  describe(`format`, () => {
    test(`should support minimal format`, () => {
      spectator = createHost(`<ts-copy format="minimal">Foo bar</ts-copy>`);
      expect(spectator.component.elementRef.nativeElement).toHaveClass('ts-copy--minimal');
    });

    test(`should support standard format`, () => {
      spectator = createHost(`<ts-copy format="standard">Foo bar</ts-copy>`);
      expect(spectator.component.elementRef.nativeElement).toHaveClass('ts-copy--standard');
    });

    test(`should fall back to standard format`, () => {
      spectator = createHost(`<ts-copy format="">Foo bar</ts-copy>`);
      expect(spectator.component.elementRef.nativeElement).toHaveClass('ts-copy--standard');
    });

    test(`should support icon format`, () => {
      spectator = createHost(`<ts-copy format="icon">Foo bar</ts-copy>`);
      expect(spectator.component.elementRef.nativeElement).toHaveClass('ts-copy--icon');
    });

    test(`should throw an error if consumer ues icon mode without quick copy enabled`, () => {
      const actual = () => {
        spectator = createHost(`<ts-copy [enableQuickCopy]="false" format="icon">Foo bar</ts-copy>`);
      };
      expect(actual).toThrowError(Error);
    });
  });

  describe(`quick copy`, () => {
    test(`should expose button on hover by default`, () => {
      spectator = createHost(`<ts-copy>Foo bar</ts-copy>`);
      expect(spectator.queryHost('svg')).toExist();
    });

    test(`should be able to disable quick copy button`, () => {
      spectator = createHost(`<ts-copy [enableQuickCopy]="false">Foo bar</ts-copy>`);
      expect(spectator.queryHost('svg')).not.toExist();
    });
  });

  describe(`selectText()`, () => {
    test(`should return false if disabled`, () => {
      spectator = createHost(`<ts-copy>Foo bar</ts-copy>`);
      expect(spectator.component.selectText(spectator.component.content.nativeElement, false, true)).toEqual(false);
    });

    test(`should return if already selected`, () => {
      spectator = createHost(`<ts-copy>Foo bar</ts-copy>`);
      expect(spectator.component.selectText(spectator.component.content.nativeElement, true, false)).toEqual(false);
    });

    test(`should select the text within the passed in element`, () => {
      spectator = createHost(`<ts-copy>Foo bar</ts-copy>`);
      spectator.component.window.getSelection = jest.fn().mockReturnValue({
        removeAllRanges: noop,
        addRange: noop,
      });

      spectator.component.document.createRange = jest.fn().mockReturnValue({ selectNodeContents: noop });
      spectator.component.selectText(spectator.component.content.nativeElement, false, false);

      expect(spectator.component.window.getSelection).toHaveBeenCalled();
      expect(spectator.component.document.createRange).toHaveBeenCalled();
      expect(spectator.component.hasSelected).toEqual(true);
    });
  });

  describe(`resetSelection()`, () => {
    test(`should set the flag to false`, () => {
      spectator = createHost(`<ts-copy>Foo bar</ts-copy>`);
      spectator.component.hasSelected = true;

      expect(spectator.component.hasSelected).toEqual(true);

      spectator.component.resetSelection();
      expect(spectator.component.hasSelected).toEqual(false);
    });
  });
});

