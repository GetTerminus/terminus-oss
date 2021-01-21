import {
  Component,
  Input,
} from '@angular/core';
import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';

import { TsLoadingOverlayModule } from '@terminus/ui-loading-overlay';

@Component({
  selector: 'loading-overlay-directive-spec',
  template: `<div class="wrapper" [tsLoadingOverlay]="shouldShow">My content.</div>`,
})
class LoadingOverlayDirectiveSpec {
  @Input() public shouldShow = false;
}

@Component({
  selector: 'loading-overlay-directive-spec-absolute',
  template: `<div style="position: absolute;" class="wrapper" [tsLoadingOverlay]="true">My content.</div>`,
})
class LoadingOverlayDirectiveSpecAbsolute {}

describe(`TsLoadingOverlayDirective`, () => {
  describe(`standard`, () => {
    let spectator: Spectator<LoadingOverlayDirectiveSpec>;
    const createComponent = createComponentFactory({
      component: LoadingOverlayDirectiveSpec,
      imports: [TsLoadingOverlayModule],
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    test(`should not load when false`, () => {
      expect(spectator.query('.wrapper .c-loading-overlay')).not.toExist();
    });

    test(`should load when true`, () => {
      expect(spectator.query('.wrapper .c-loading-overlay')).not.toExist();
      spectator.setInput('shouldShow', true);
      expect(document.querySelector('.c-loading-overlay')).toExist();
    });

    test(`should set the position of the parent element if not set`, () => {
      expect(spectator.query('.wrapper')).toHaveStyle({ position: 'relative' });
    });
  });

  describe(`position absolute`, () => {
    let spectator: Spectator<LoadingOverlayDirectiveSpecAbsolute>;
    const createComponent = createComponentFactory({
      component: LoadingOverlayDirectiveSpecAbsolute,
      imports: [TsLoadingOverlayModule],
    });

    test(`should not set the position if absolute`, () => {
      spectator = createComponent();
      expect(spectator.query('.wrapper')).toHaveStyle({ position: 'absolute' });
    });
  });
});
