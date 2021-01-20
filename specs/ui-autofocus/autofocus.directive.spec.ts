import {
  createDirectiveFactory,
  SpectatorDirective,
} from '@ngneat/spectator/jest';

import { TsAutofocusDirective } from '@terminus/ui-autofocus';

describe(`TsAutofocusDirective`, () => {
  let spectator: SpectatorDirective<TsAutofocusDirective>;
  const createDirective = createDirectiveFactory(TsAutofocusDirective);

  describe(`should autofocus`, () => {
    test(`should autofocus with no param`, () => {
      spectator = createDirective(`<input type="text" tsAutofocus />`);
      expect(document.activeElement).toEqual(spectator.element);
    });

    test(`should autofocus with empty param`, () => {
      spectator = createDirective(`<input type="text" tsAutofocus="" />`);
      expect(document.activeElement).toEqual(spectator.element);
    });

    test(`should autofocus with random string`, () => {
      spectator = createDirective(`<input type="text" tsAutofocus="foo" />`);
      expect(document.activeElement).toEqual(spectator.element);
    });

    test(`should autofocus with boolean`, () => {
      spectator = createDirective(`<input type="text" [tsAutofocus]="true" />`);
      expect(document.activeElement).toEqual(spectator.element);
    });
  });

  describe(`should NOT autofocus`, () => {
    test(`should not autofocus boolean`, () => {
      spectator = createDirective(`<input type="text" [tsAutofocus]="false" />`);
      expect(document.activeElement).not.toEqual(spectator.element);
    });

    test(`should not autofocus with null`, () => {
      spectator = createDirective(`<input type="text" [tsAutofocus]="null" />`);
      expect(document.activeElement).not.toEqual(spectator.element);
    });

    test(`should not autofocus with false string`, () => {
      spectator = createDirective(`<input type="text" tsAutofocus="false" />`);
      expect(document.activeElement).not.toEqual(spectator.element);
    });
  });
});
