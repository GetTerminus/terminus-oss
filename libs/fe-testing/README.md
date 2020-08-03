<h1>Testing Utilities</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Library size][file-size-badge]][raw-distribution-js]

A collection of helpers to facilitate testing UI components.

**Import from:** `@terminus/fe-testing`

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Mocks](#mocks)
  - [`ChangeDetectorRefMock`](#changedetectorrefmock)
  - [`ElementRefMock`](#elementrefmock)
  - [`rendererMock`](#renderermock)
  - [`renderer2Mock`](#renderer2mock)
  - [`TokenEscalatorMock`](#tokenescalatormock)
  - [`TokenExtractorMock`](#tokenextractormock)
  - [`TsDocumentServiceMock`](#tsdocumentservicemock)
  - [`TsWindowServiceMock`](#tswindowservicemock)
- [Events](#events)
  - [Creating Events](#creating-events)
    - [`createFakeEvent`](#createfakeevent)
    - [`createKeyboardEvent`](#createkeyboardevent)
    - [`createMouseEvent`](#createmouseevent)
    - [`createTouchEvent`](#createtouchevent)
  - [Dispatching Events](#dispatching-events)
    - [`dispatchEvent`](#dispatchevent)
    - [`dispatchFakeEvent`](#dispatchfakeevent)
    - [`dispatchKeyboardEvent`](#dispatchkeyboardevent)
    - [`dispatchMouseEvent`](#dispatchmouseevent)
    - [`dispatchTouchEvent`](#dispatchtouchevent)
- [Angular Test Helpers](#angular-test-helpers)
  - [`configureTestBedWhitespace`](#configuretestbedwhitespace)
  - [`configureTestBedWithoutReset`](#configuretestbedwithoutreset)
  - [`createComponent`](#createcomponent)
  - [`expectNativeEl`](#expectnativeel)
  - [`getChildComponentInstanceFromFixture`](#getchildcomponentinstancefromfixture)
  - [`getDomAttribute`](#getdomattribute)
  - [`queryFor`](#queryfor)
  - [`wrappedErrorMessage`](#wrappederrormessage)
- [`typeInElement`](#typeinelement)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```bash
$ yarn add @terminus/fe-testing -D
$ yarn add @terminus/fe-utilities rxjs date-fns @angular/{forms,platform-browser}
```

## Mocks

### `ChangeDetectorRefMock`

A mock of the Angular `ChangeDetectorRefMock` class.

```typescript
// my.component.ts
import { ChangeDetectorRef } from '@angular/core';

@Component({...})
export class MyComponent {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
}
```

```typescript
// my.component.spec.ts
import { ChangeDetectorRefMock } from '@terminus/fe-testing';
import { MyComponent } from './my.component';

let component: MyComponent;

beforeEach(() => {
  component = new MyComponent(
    new ChangeDetectorRefMock(),
  );
});
```

### `ElementRefMock`

A mock of the Angular `ElementRef` class.

```typescript
// my.component.ts
import { ElementRef } from '@angular/core';

@Component({...})
export class MyComponent {
  constructor(private elementRef: ElementRef) {}
}
```

```typescript
// my.component.spec.ts
import { ElementRefMock } from '@terminus/fe-testing';
import { MyComponent } from './my.component';

let component: MyComponent;

beforeEach(() => {
  component = new MyComponent(
    new ElementRefMock(),
  );
});
```

### `rendererMock`

A mock of the Angular Renderer with properties initialized with `noop` function.

```typescript
// my.component.ts
import { Renderer } from '@angular/core';

@Component({...})
export class MyComponent {
  constructor(private renderer: Renderer) {}
}
```

```typescript
// my.component.spec.ts
import { rendererMock } from '@terminus/fe-testing';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [MyNeededModule],
    providers: [
      // rendererMock is a value:
      {
        provide: Renderer,
        useValue: rendererMock,
      },
    ],
    declarations: [MyComponent],
  }).compileComponents();
}));
```

### `renderer2Mock`

A mock of the Angular Renderer2 with all properties stubbed.

```typescript
// my.component.ts
import { Renderer2 } from '@angular/core';

@Component({...})
export class MyComponent {
  constructor(private renderer2: Renderer2) {}
}
```

```typescript
// my.component.spec.ts
import { Renderer2Mock } from '@terminus/fe-testing';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    ...
    providers: [
      // Renderer2Mock is a class:
      {
        provide: Renderer,
        useClass: Renderer2Mock,
      },
    ],
    declarations: [MyComponent],
  }).compileComponents();
}));
```

Or for `new`ed classes:

```typescript
import { Renderer2Mock } from '@terminus/fe-testing';

let component: MyComponent;

beforeEach(() => {
  component = new MyComponent(
    new Renderer2Mock(),
  );
});
```

### `TokenEscalatorMock`

TODO

### `TokenExtractorMock`

TODO

### `TsDocumentServiceMock`

```typescript
// my.component.ts
import { TsDocumentService } from '@terminus/fe-utilities';

@Component({...})
export class MyComponent {
  constructor(
    private documentService: TsDocumentService,
  ) {}
}
```

```typescript
// my.component.spec.ts
import { TsDocumentServiceMock } from '@terminus/fe-testing';
import { MyComponent } from './my.component';

let component: MyComponent;

beforeEach(() => {
  component = new MyComponent(
    new TsDocumentServiceMock(),
  );
});
```

### `TsWindowServiceMock`

```typescript
// my.component.ts
import { TsWindowService } from '@terminus/fe-utilities';

@Component({...})
export class MyComponent {
  constructor(
    private windowService: TsWindowService,
  ) {}
}
```

```typescript
// my.component.spec.ts
import { TsWindowServiceMock } from '@terminus/fe-testing';
import { MyComponent } from './my.component';

let component: MyComponent;

beforeEach(() => {
  component = new MyComponent(
    new TsWindowServiceMock(),
  );
});
```

## Events

### Creating Events

#### `createFakeEvent`

Creates a fake event object with any desired event type.

```typescript
import { createFakeEvent } from '@terminus/fe-testing';

const focusEvent = createFakeEvent('focus');
```

| Param        | Type      | Default |
|--------------|-----------|---------|
| `type`       | `string`  |         |
| `canBubble`  | `boolean` | `true`  |
| `cancelable` | `boolean` | `true`  |

#### `createKeyboardEvent`

Creates a browser `KeyboardEvent` from an element.

```typescript
import { KEYCODES } from '@terminus/fe-utilities';
import { createKeyboardEvent } from '@terminus/fe-testing';

const keyboardEvent = createKeyboardEvent('keydown', KEYCODES.ENTER.keyCode, myInputNativeElement);
```

| Param     | Type      | Default |
|-----------|-----------|---------|
| `type`    | `string`  |         |
| `keyCode` | `number`  |         |
| `target?` | `Element` |         |
| `key?`    | `string`  |         |

#### `createMouseEvent`

Creates a browser `MouseEvent` with the specified options.

```typescript
import { createMouseEvent } from '@terminus/fe-testing';

const mouseEvent = createMouseEvent('click');
const mouseEventAtLocation = createMouseEvent('click', 212, 433);
```

| Param  | Type     | Default |
|--------|----------|---------|
| `type` | `string` |         |
| `x`    | `number` | 0       |
| `y`    | `number` | 0       |

#### `createTouchEvent`

Creates a browser `TouchEvent` with the specified pointer coordinates.

```typescript
import { createTouchEvent } from '@terminus/fe-testing';

const touchEvent = createTouchEvent('touchstart');
const touchEventAtLocation = createTouchEvent('touchstart', 212, 433);
```

| Param   | Type     | Default |
|---------|----------|---------|
| `type`  | `string` |         |
| `pageX` | `number` | 0       |
| `pageY` | `number` | 0       |

### Dispatching Events

#### `dispatchEvent`

Utility to dispatch any event on a Node.

```typescript
import { dispatchEvent } from '@terminus/fe-testing';

dispatchEvent(myNativeElement, 'blur');
```

| Param   | Type                 | Default |
|---------|----------------------|---------|
| `node`  | `Node`&#124;`Window` |         |
| `event` | `Event`              |         |

#### `dispatchFakeEvent`

Shorthand to dispatch a fake event on a specified node.

```typescript
import { dispatchFakeEvent } from '@terminus/fe-testing';

dispatchFakeEvent(myNativeElement, 'mousedown');
```

| Param        | Type                 | Default |
|--------------|----------------------|---------|
| `node`       | `Node`&#124;`Window` |         |
| `type`       | `string`             |         |
| `canBubble?` | `boolean`            |         |

#### `dispatchKeyboardEvent`

Shorthand to dispatch a keyboard event with a specified key code.

```typescript
import { dispatchKeyboardEvent } from '@terminus/fe-testing';

dispatchKeyboardEvent(myNativeElement, 'keyup', ENTER);
```

| Param     | Type      | Default |
|-----------|-----------|---------|
| `node`    | `Node`    |         |
| `type`    | `string`  |         |
| `keyCode` | `number`  |         |
| `target?` | `Element` |         |

#### `dispatchMouseEvent`

Shorthand to dispatch a mouse event on the specified coordinates.

```typescript
import { dispatchMouseEvent } from '@terminus/fe-testing';

dispatchMouseEvent(myNativeElement, 'mousedown');
```

| Param   | Type         | Default                        |
|---------|--------------|--------------------------------|
| `node`  | `Node`       |                                |
| `type`  | `string`     |                                |
| `x`     | `number`     | 0                              |
| `y`     | `number`     | 0                              |
| `event` | `MouseEvent` | `createMouseEvent(type, x, y)` |

#### `dispatchTouchEvent`

Shorthand to dispatch a touch event on the specified coordinates.

```typescript
import { dispatchTouchEvent } from '@terminus/fe-testing';

dispatchTouchEvent(myNativeElement, 'touchstart');
```

| Param  | Type     | Default |
|--------|----------|---------|
| `node` | `Node`   |         |
| `type` | `string` |         |
| `x`    | `number` | 0       |
| `y`    | `number` | 0       |

## Angular Test Helpers

### `configureTestBedWhitespace`

By default, Angular does not strip out any white space when compiling templates for the `TestBed`. This
can make snapshot testing more difficult to visually parse. This helper will configure the `TestBed`
and compile the components with extra white space stripped.

```typescript
import {
  ConfigureTestBedFn,
  configureTestBed,
} from '@terminus/fe-testing';

describe(`MyComponentSnapshot`, () => {
  let fixture: ComponentFixture<MyComponent>;
  let component: MyComponent;

  beforeEach(async(() => {
    // Define your configuration just as you would using the standard TestBed,
    // except now it's inside a `ConfigureTestBedFn` function:
    const configure: ConfigureTestBedFn = (testBed) => {
      testBed.configureTestingModule({
        ...
        declarations: [
          MyComponent,
        ],
        ...
      });
    };

    // Pass the configuration in and receive a TestBed instance:
    configureTestBedWhitespace(configure).then((testBed) => {
      fixture = testBed.createComponent(MyComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  }));

  test(`should match the snapshot`, () => {
    expect(fixture).toMatchSnapshot();
  });
});
```

### `configureTestBedWithoutReset`

By default, Angular resets the `TestBed` between each test. While this can be useful if
components or services have shared state or create side-effects, it can slow down tests quite a bit.
When the `TestBed` doesn't need to be reset, we can improve testing time by disabling this reset
functionality.

> NOTE: This function makes use of `beforeAll` and `afterAll` so it must be called inside your
> outermost `describe` block.

```typescript
import { TestModuleMetadata } from '@angular/core/testing';
import { configureTestBedWithoutReset } from '@terminus/fe-testing';

describe(`MyComponent`, () => {
  let fixture: ComponentFixture<MyComponent>;
  let component: MyComponent;
  const moduleDefinition: TestModuleMetadata = {
    imports: [
      ...
    ],
    declarations: [
      ...
    ],
  };

  setUpTestBed(moduleDefinition);

  test(`should...`, () => {
    ...
  });
});
```

### `createComponent`

Helper function to quickly generate a `TestBed` fixture with a single component.

```typescript
import { createComponent } from '@terminus/fe-testing';

@Component({template: ``})
export class TestComponent {
  foo = 'bar';
}

test(`should do something`, () => {
  const fixture = createComponent<TestComponent>(TestComponent);

  expect(fixture.componentInstance.foo).toEqual('bar');
});
```

### `expectNativeEl`

Reusable expect statement to check for the `nativeElement`.

```typescript
import { expectNativeEl } from '@terminus/fe-testing';

let fixture: ComponentFixture<TestHostComponent>;
let testHost: TestHostComponent;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [...],
    declarations: [
      MyComponent,
      TestHostComponent,
    ],
    providers: [...],
  }).compileComponents();

  fixture = TestBed.createComponent(TestHostComponent);
  testHost = fixture.componentInstance;
  fixture.detectChanges();
}));

test(`should have a native element`, () => {
  expectNativeEl(fixture).toBeTruthy();
})
```

### `getChildComponentInstanceFromFixture`

Returns a component instance from a TestBed fixture:

```typescript
import { getChildComponentInstanceFromFixture } from '@terminus/fe-testing';
import { Component } from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

// The component we will want a reference too:
@Component({
  selector: `my-test`,
  template: `<h1>foo</h1>`,
})
class TestComponent {
  myString = 'foo';
}

// The parent component (fixture):
@Component({
  template: `<my-test></my-test>`,
})
class TestHostComponent {}

describe(`my test`, () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        TestHostComponent,
      ],
    });

    // Create the fixture:
    fixture = TestBed.createComponent(TestHostComponent);
  });

  test(`should ...`, () => {
    // Get the instance:
    const instance: TestComponent = getChildComponentInstanceFromFixture(fixture, TestComponent);
    console.log(instance.myString); // logs out: `foo`
  });
});
```

### `getDomAttribute`

A helper to return the value of a DOM attribute.

```
import { getDomAttribute } from '@terminus/fe-testing';

getDomAttribute(myElement, 'aria-label');

```

### `queryFor`

Helper to query a fixture for a selector.

```typescript
import { queryFor } from '@terminus/fe-testing';

let fixture: ComponentFixture<TestHostComponent>;
let testHost: TestHostComponent;
let nestedElement;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [...],
    declarations: [
      MyComponent,
      TestHostComponent,
    ],
    providers: [...],
  }).compileComponents();

  fixture = TestBed.createComponent(TestHostComponent);
  testHost = fixture.componentInstance;
  fixture.detectChanges();

  nestedElement = queryFor(fixture, '.my-class');
}));
```

### `wrappedErrorMessage`

Gets a RegExp used to detect an Angular wrapped error message. This allows testing for specific
thrown errors in tests.

```typescript
import { wrappedErrorMessage } from '@terminus/fe-testing';

expect(myFunc).toThrowError(wrappedErrorMessage(mySpecificError()));
```

> See https://github.com/angular/angular/issues/8348 for more information.

## `typeInElement`

Focuses an input, sets it's value and dispatches the `input` event, simulating user typing.

```typescript
import { typeInElement } from '@terminus/fe-testing';

typeInElement('test@test.com', myEmailInputElement);
```


<!-- Links -->
[license-url]:         https://github.com/GetTerminus/terminus-oss/blob/release/LICENSE
[license-image]:       http://img.shields.io/badge/license-MIT-blue.svg
[npm-version-image]:   http://img.shields.io/npm/v/@terminus/fe-testing.svg
[npm-package]:         https://www.npmjs.com/package/@terminus/fe-testing
[github-action-badge]: https://github.com/GetTerminus/terminus-oss/workflows/Release%20CI/badge.svg?flag=feTesting
[github-action-link]:  https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:     http://img.badgesize.io/https://unpkg.com/@terminus/fe-testing/index.js?compression=gzip
[raw-distribution-js]: https://unpkg.com/@terminus/fe-testing@*/index.js
