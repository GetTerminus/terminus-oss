import { TsWindowService } from '@terminus/fe-utilities';

describe(`TsWindowService`, function() {
  test(`should return the window object`, () => {
    const service = new TsWindowService();
    expect(service.nativeWindow.innerWidth).toBeTruthy();
  });
});
