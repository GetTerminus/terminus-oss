import {
  Component,
  ViewChild,
} from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { createComponent } from '@terminus/ngx-tools/testing';
import {
  TsTooltipComponent,
  TsTooltipModule,
  TsTooltipPositionTypes,
} from '@terminus/ui-tooltip';
import { getTooltipText } from '@terminus/ui-tooltip/testing';

describe(`TsTooltipComponent`, function() {
  describe(`Defaults`, () => {
    let component: Basic;
    let fixture: ComponentFixture<Basic>;
    let tooltipEl: HTMLElement;
    let tooltipComponent: TsTooltipComponent;

    beforeEach(() => {
      fixture = createComponent(Basic, [], [TsTooltipModule]);
      component = fixture.componentInstance;
      fixture.detectChanges();
      tooltipComponent = component.tooltipComponent;

      tooltipEl = fixture.debugElement.query(By.css('.c-tooltip')).nativeElement as HTMLElement;
    });

    test(`should exist`, () => {
      expect(tooltipComponent).toBeTruthy();
      expect(tooltipEl).toBeTruthy();
    });

    test(`should set position to below`, () => {
      expect(tooltipComponent.tooltipPosition).toEqual('below');
    });

    test('should set underline to false', () => {
      expect(tooltipComponent.hasUnderline).toEqual(false);
      expect(tooltipEl.classList).not.toContain('c-tooltip--underline');
    });
  });

  describe('Customized', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let tooltipEl: HTMLElement;
    let tooltipComponent: TsTooltipComponent;

    beforeEach(() => {
      fixture = createComponent(TestHostComponent, [], [TsTooltipModule]);
      component = fixture.componentInstance;
      fixture.detectChanges();
      tooltipComponent = component.tooltipComponent;
      tooltipEl = fixture.debugElement.query(By.css('.c-tooltip')).nativeElement as HTMLElement;
    });

    test(`should exist`, () => {
      expect(tooltipComponent).toBeTruthy();
      expect(tooltipEl).toBeTruthy();
    });

    describe(`tooltipPosition`, () => {
      test(`should set and retrieve above`, () => {
        component.tooltipPosition = 'above';
        fixture.detectChanges();

        expect(tooltipComponent.tooltipPosition).toEqual('above');
      });

      test(`should set and retrieve below`, () => {
        component.tooltipPosition = 'below';
        fixture.detectChanges();

        expect(tooltipComponent.tooltipPosition).toEqual('below');
      });

      test(`should set and retrieve before`, () => {
        component.tooltipPosition = 'before';
        fixture.detectChanges();

        expect(tooltipComponent.tooltipPosition).toEqual('before');
      });

      test(`should set and retrieve after`, () => {
        component.tooltipPosition = 'after';
        fixture.detectChanges();

        expect(tooltipComponent.tooltipPosition).toEqual('after');
      });

      test(`should fail with bad input`, () => {
        window.console.warn = jest.fn();
        component.tooltipPosition = 'foo' as any;
        fixture.detectChanges();

        expect(window.console.warn).toHaveBeenCalled();
      });
    });

    describe(`hasUnderline`, () => {
      test(`should set and retrieve`, () => {
        component.hasUnderline = true;
        fixture.detectChanges();

        expect(tooltipComponent.hasUnderline).toEqual(true);
        expect(tooltipEl.classList).toContain('c-tooltip--underline');
      });
    });
  });

  describe(`tooltipValue`, () => {
    test(`should set and retrieve`, () => {
      const fixture: ComponentFixture<TooltipValue> =
        createComponent(TooltipValue, [], [TsTooltipModule, NoopAnimationsModule]);
      const component: TooltipValue = fixture.componentInstance;
      fixture.detectChanges();
      const tooltipComponent = component.tooltipComponent;

      component.tooltipValue = 'foo';
      fixture.detectChanges();
      const toolTipValue = getTooltipText(fixture);

      expect(tooltipComponent.tooltipValue).toEqual('foo');
      expect(toolTipValue).toEqual('foo');
    });
  });
});

/**
 * Test Components
 */
@Component({
  template: `<ts-tooltip>Tooltip Text!</ts-tooltip>`,
})
class Basic {
  @ViewChild(TsTooltipComponent)
  public tooltipComponent!: TsTooltipComponent;
}

@Component({
  template: `
    <ts-tooltip
      [hasUnderline]="hasUnderline"
      [tooltipPosition]="tooltipPosition"
    >Tooltip Text!</ts-tooltip>
  `,
})
class TestHostComponent {
  public hasUnderline!: boolean;
  public tooltipPosition!: TsTooltipPositionTypes;

  @ViewChild(TsTooltipComponent)
  public tooltipComponent!: TsTooltipComponent;
}

@Component({
  template: `<ts-tooltip [tooltipValue]="tooltipValue">Tooltip Text!</ts-tooltip>`,
})
class TooltipValue {
  public tooltipValue!: string;

  @ViewChild(TsTooltipComponent)
  public tooltipComponent!: TsTooltipComponent;
}
