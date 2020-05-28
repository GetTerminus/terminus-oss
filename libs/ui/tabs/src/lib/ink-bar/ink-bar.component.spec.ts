import { createComponent } from '@terminus/ngx-tools/testing';
import { TsTabsModule } from '@terminus/ui-tabs';

import { InkBar } from '../test-components';

describe(`TsTabInkBarComponent`, function() {
  test(`should set styles if requestAnimationFrame is undefined`, function() {
    const fixture = createComponent(InkBar, [], [TsTabsModule]);
    window.requestAnimationFrame = undefined as any;
    fixture.componentInstance.inkBar['setStyles'] = jest.fn();
    fixture.componentInstance.inkBar.alignToElement({} as any);

    expect(fixture.componentInstance.inkBar['setStyles']).toHaveBeenCalledWith({});
  });

  describe(`determineInkBarPositions`, function() {
    test(`should return 0s if no element is passed in`, function() {
      const fixture = createComponent(InkBar, [], [TsTabsModule]);
      expect(fixture.componentInstance.inkBar['determineInkBarPositions'](undefined as any)).toEqual({
        left: '0',
        width: '0',
      });
    });
  });
});
