import { TsMenuComponent } from '@terminus/ui-menu';

describe(`TsMenuComponent`, function() {
  let component: TsMenuComponent;

  beforeEach(() => {
    component = new TsMenuComponent();
  });

  test(`should exist`, () => {
    expect(component).toBeTruthy();
  });

  describe(`isUtilityMenu()`, () => {
    test(`should return true if the menu is a utility menu`, () => {
      component.triggerType = 'utility';
      expect(component.isUtilityMenu).toEqual(true);

      component.triggerType = 'default';
      expect(component.isUtilityMenu).toEqual(false);
    });
  });

  describe(`ngAfterViewInit()`, () => {
    test(`should not open the menu when 'defaultOpened' is FALSE`, () => {
      component.trigger = { openMenu: jest.fn() } as any;
      component.ngAfterViewInit();

      expect(component.trigger.openMenu).not.toHaveBeenCalled();
    });

    test(`should open the menu when 'defaultOpened' is TRUE`, () => {
      component.defaultOpened = true;
      component.trigger = { openMenu: jest.fn() } as any;
      component.ngAfterViewInit();

      expect(component.trigger.openMenu).toHaveBeenCalled();
    });
  });
});
