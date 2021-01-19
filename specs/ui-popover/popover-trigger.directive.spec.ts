import {
  Component,
  Input,
} from '@angular/core';
import {
  fakeAsync,
  flush,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  createHostFactory,
  SpectatorHost,
} from '@ngneat/spectator/jest';

import { dispatchKeyboardEvent } from '@terminus/fe-testing';
import { KEYS } from '@terminus/fe-utilities';
import {
  TsPopoverComponent,
  TsPopoverModule,
  TsPopoverPosition,
  TsPopoverTriggerDirective,
  TsTrigger,
} from '@terminus/ui-popover';

const TEMPLATE = `
  <div id="wrapper">
    <button
      [tsPopoverTrigger]="popper1"
      [popover]="popper1"
      [position]="position"
      [popoverTrigger]="popoverTriggerType"
      [defaultOpened]="defaultOpened"
      [id]="id"
    >My trigger</button>

    <ts-popover #popper1>
      <h3>My Title</h3>
      <p>Other random content.</p>
    </ts-popover>
  </div>
`;
const TEMPLATE_OLD_FORMAT = `
  <button
    [tsPopoverTrigger]
    [popover]="popper1"
    [position]="position"
    [popoverTrigger]="popoverTriggerType"
    [defaultOpened]="defaultOpened"
  >My trigger {{bop}}}</button>

  <ts-popover #popper1>
    <h3>My Title</h3>
    <p>Other random content.</p>
  </ts-popover>
`;

@Component({
  selector: 'popover-host-component',
  template: '',
})
class PopoverHostComponent {
  @Input() position: TsPopoverPosition;
  @Input() defaultOpened: boolean;
  @Input() popoverTriggerType: TsTrigger;
  @Input() id: string;
}

describe(`TsPopover`, () => {
  let spectator: SpectatorHost<TsPopoverTriggerDirective, PopoverHostComponent>;
  const createHost = createHostFactory({
    component: TsPopoverTriggerDirective,
    host: PopoverHostComponent,
    imports: [
      NoopAnimationsModule,
      TsPopoverModule,
    ],
    declareComponent: false,
  });

  test(`should exist`, () => {
    spectator = createHost(TEMPLATE, {
      hostProps: {
        position: 'top',
        defaultOpened: false,
        popoverTriggerType: 'click',
      },
    });
    expect(spectator.queryHost('button')).toHaveClass('ts-popover-trigger');
  });

  test(`should exist with deprecated format`, () => {
    spectator = createHost(TEMPLATE_OLD_FORMAT, {
      hostProps: {
        position: 'top',
        defaultOpened: false,
        popoverTriggerType: 'click',
      },
    });
    expect(spectator.queryHost('button')).toHaveClass('ts-popover-trigger');
  });

  describe(`ID`, () => {
    test(`should default to UID`, () => {
      spectator = createHost(TEMPLATE, {
        hostProps: {
          position: 'top',
          defaultOpened: false,
          popoverTriggerType: 'click',
          id: undefined,
        },
      });
      expect(spectator.queryHost(TsPopoverTriggerDirective).id).toEqual(expect.stringContaining('ts-popover-trigger-'));

      spectator.setHostInput('id', 'foo');
      expect(spectator.queryHost(TsPopoverTriggerDirective).id).toEqual('foo');
    });
  });

  describe(`position`, () => {
    test(`should allow custom position and fall back to the default`, () => {
      spectator = createHost(TEMPLATE, {
        hostProps: {
          position: 'top',
          defaultOpened: false,
          popoverTriggerType: 'click',
          id: 'foo',
        },
      });
      expect(spectator.queryHost(TsPopoverTriggerDirective).position).toEqual('top');
      spectator.setHostInput('position', undefined);
      expect(spectator.queryHost(TsPopoverTriggerDirective).position).toEqual('bottom');
    });

    test(`should throw an error if a bad value is passed in`, () => {
      spectator = createHost(TEMPLATE, {
        hostProps: {
          position: 'top',
          defaultOpened: false,
          popoverTriggerType: 'click',
          id: 'foo',
        },
      });
      expect(spectator.queryHost(TsPopoverTriggerDirective).position).toEqual('top');
      const shouldThrow = () => {
        spectator.setHostInput('position', 'bad value' as any);
      };
      expect(shouldThrow).toThrow(`TsPopoverTriggerDirective: "bad value" is not an allowed position value.`);
    });
  });

  describe(`trigger type`, () => {
    test(`should toggle based on click`, () => {
      spectator = createHost(TEMPLATE, {
        hostProps: {
          position: 'top',
          defaultOpened: false,
          popoverTriggerType: 'click',
          id: 'foo',
        },
      });
      expect(spectator.queryHost('.ts-popover')).toHaveClass('ts-popover--hidden');
      spectator.click(spectator.queryHost('button'));
      expect(spectator.queryHost('.ts-popover')).not.toHaveClass('ts-popover--hidden');
    });

    test(`should toggle based on hover`, () => {
      spectator = createHost(TEMPLATE, {
        hostProps: {
          position: 'top',
          defaultOpened: false,
          popoverTriggerType: 'hover',
          id: 'foo',
        },
      });
      expect(spectator.queryHost('.ts-popover')).toHaveClass('ts-popover--hidden');
      spectator.dispatchMouseEvent(spectator.queryHost('.ts-popover-trigger'), 'mouseenter');
      expect(spectator.queryHost('.ts-popover')).not.toHaveClass('ts-popover--hidden');
    });
  });

  test(`should close on blur`, () => {
    spectator = createHost(TEMPLATE, {
      hostProps: {
        position: 'top',
        defaultOpened: true,
        popoverTriggerType: 'click',
        id: 'foo',
      },
    });
    expect(spectator.queryHost('.ts-popover')).not.toHaveClass('ts-popover--hidden');
    spectator.click(spectator.queryHost('#wrapper'));
    expect(spectator.queryHost('.ts-popover')).toHaveClass('ts-popover--hidden');
  });

  test(`should be able to default to the open state`, () => {
    spectator = createHost(TEMPLATE, {
      hostProps: {
        position: 'top',
        defaultOpened: true,
        popoverTriggerType: 'click',
        id: 'foo',
      },
    });
    expect(spectator.queryHost('.ts-popover')).not.toHaveClass('ts-popover--hidden');
  });

  test(`should close on ESC`, () => {
    spectator = createHost(TEMPLATE, {
      hostProps: {
        position: 'top',
        defaultOpened: true,
        popoverTriggerType: 'click',
        id: 'foo',
      },
    });
    expect(spectator.queryHost('.ts-popover')).not.toHaveClass('ts-popover--hidden');
    const escape = dispatchKeyboardEvent(spectator.queryHost('button'), 'keydown', KEYS.ESCAPE);
    spectator.detectChanges();
    expect(spectator.queryHost('.ts-popover')).toHaveClass('ts-popover--hidden');
    expect(escape.defaultPrevented).toBe(true);
  });

  test(`should throw error if popper.js is not available`, () => {
    spectator = createHost(TEMPLATE, {
      hostProps: {
        position: 'top',
        defaultOpened: true,
        popoverTriggerType: 'click',
        id: 'foo',
      },
    });
    const component = spectator.queryHost(TsPopoverComponent);
    component['createPopper'] = undefined;
    const shouldThrowError = () => {
      component.ngOnInit();
    };
    expect(shouldThrowError).toThrow('TsPopoverComponent: popper.js is not available to reference.');
  });

  test(`should do nothing if no reference object exists`, () => {
    spectator = createHost(TEMPLATE, {
      hostProps: {
        position: 'top',
        defaultOpened: true,
        popoverTriggerType: 'click',
        id: 'foo',
      },
    });
    const component = spectator.queryHost(TsPopoverComponent);
    component.onUpdate.emit = jest.fn();
    component.referenceObject = undefined;
    expect(component.show({})).toEqual(undefined);
    expect(component.onUpdate.emit).not.toHaveBeenCalled();
  });

  test(`should toggle to show or hide`, () => {
    spectator = createHost(TEMPLATE, {
      hostProps: {
        position: 'top',
        defaultOpened: false,
        popoverTriggerType: 'click',
        id: 'foo',
      },
    });
    const component = spectator.queryHost(TsPopoverTriggerDirective);
    expect(spectator.queryHost('.ts-popover')).toHaveClass('ts-popover--hidden');
    component.toggle();
    expect(spectator.queryHost('.ts-popover')).not.toHaveClass('ts-popover--hidden');
    component.toggle();
    expect(spectator.queryHost('.ts-popover')).toHaveClass('ts-popover--hidden');
  });

  describe(`ngAfterContentInit`, () => {
    test(`should set up listeners if not already set up`, () => {
      spectator = createHost(TEMPLATE, {
        hostProps: {
          position: 'top',
          defaultOpened: false,
          popoverTriggerType: 'click',
          id: 'foo',
        },
      });
      const component = spectator.queryHost(TsPopoverTriggerDirective);
      component['setUpListeners'] = jest.fn();
      component.eventSubscription = undefined;
      component.ngAfterContentInit();
      expect(component['setUpListeners']).toHaveBeenCalled();
    });
  });
});
