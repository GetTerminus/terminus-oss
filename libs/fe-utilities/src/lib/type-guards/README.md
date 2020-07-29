<h1>Type Guards</h1>

A collection of consistent, tested, and well-performing checks for various types.

**Import from:** `@terminus/fe-utilities`

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [`arrayHasAllElementsSet`](#arrayhasallelementsset)
- [`isAbstractControl`](#isabstractcontrol)
- [`isArrayOfType`](#isarrayoftype)
- [`isArray`](#isarray)
- [`isBoolean`](#isboolean)
- [`isDragEvent`](#isdragevent)
- [`isFunction`](#isfunction)
- [`isHTMLInputElement`](#ishtmlinputelement)
- [`isHttpResponse`](#ishttpresponse)
- [`isKeyboardEvent`](#iskeyboardevent)
- [`isMouseEvent`](#ismouseevent)
- [`isNull`](#isnull)
- [`isNumber`](#isnumber)
- [`isObject`](#isobject)
- [`isSet`](#isset)
- [`isString`](#isstring)
- [`isTokenResponse`](#istokenresponse)
- [`isUndefined`](#isundefined)
- [`isValidDate`](#isvaliddate)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## `arrayHasAllElementsSet`

Determine if a value is an array and has all of its values as non-null non-undefined values. Provides strongly typed conditional checks.

```typescript
import { arrayHasAllElementsSet } from '@terminus/ngx-tools/type-guards';

arrayHasAllElementsSet<number>([1, null, 6])          // Returns: false
arrayHasAllElementsSet<number, string>([1, 'foo', 8]) // Returns: true

// Can also be used in the `filter` lettable operator:
filter(arrayHasAllElementsSet) // next operator receives strongly typed inputs
```

## `isAbstractControl`

Determine if a value is an `AbstractControl`.

```typescript
import { isAbstractControl } from '@terminus/ngx-tools/type-guards';

isAbstractControl(new FormControl()); // Returns: true
isAbstractControl('hi');              // Returns: false
```

## `isArrayOfType`

Determine if all values in an Array is of a certain type.

```typescript
import { isArrayOfType, isNumber } from '@terminus/ngx-tools/type-guards';

isArrayOfType<number>([1, 5], isNumber)     // Returns: true
isArrayOfType<number>([1, 'foo'], isNumber) // Returns: false
```

## `isArray`

Determine if a value is an Array.

```typescript
import { isArray } from '@terminus/ngx-tools/type-guards';

isArray([1, 2]); // Returns: true
isArray('hi');   // Returns: false
```

## `isBoolean`

Determine if a value is a Boolean.

```typescript
import { isBoolean } from '@terminus/ngx-tools/type-guards';

isBoolean(true);   // Returns: true
isBoolean('true'); // Returns: false
```

## `isDragEvent`

Determine if an event is a `DragEvent`.

```typescript
import { isDragEvent } from '@terminus/ngx-tools/type-guards';

isDragEvent(myDragEvent);  // Returns: true
isDragEvent(myClickEvent); // Returns: false
```

## `isFunction`

Determine if a value is a Function.

```typescript
import { isFunction } from '@terminus/ngx-tools/type-guards';

isFunction(() => {}); // Returns: true
isFunction('foo');    // Returns: false
```

## `isHTMLInputElement`

Determine if a value is an HTML input element.

```typescript
import { isHTMLInputElement } from '@terminus/ngx-tools/type-guards';

const myInput = document.querySelector('#myInput');
const myDiv = document.querySelector('#myDiv');

isHTMLInputElement(myInput); // Returns: true
isHTMLInputElement(myDiv);   // Returns: false
```

## `isHttpResponse`

Determine if a value is an HTTP response.

```typescript
import { isHttpResponse } from '@terminus/ngx-tools/type-guards';

isHttpResponse({headers: {...}});             // Returns: true
isHttpResponse<MyResponseType>({foo: 'bar'}); // Returns: false
```

## `isKeyboardEvent`

Determine if an event is a `KeyboardEvent`.

```typescript
import { isKeyboardEvent } from '@terminus/ngx-tools/type-guards';

isKeyboardEvent(myKeyboardEvent); // Returns: true
isKeyboardEvent(myClickEvent);    // Returns: false
```

## `isMouseEvent`

Determine if an event is a `MouseEvent`.

```typescript
import { isMouseEvent } from '@terminus/ngx-tools/type-guards';

isMouseEvent(myMouseEvent); // Returns: true
isMouseEvent(myClickEvent); // Returns: false
```

## `isNull`

Determine if a value is Null.

```typescript
import { isNull } from '@terminus/ngx-tools/type-guards';

isNull(null); // Returns: true
isNull(1);    // Returns: false
```

## `isNumber`

Determine if a value is a Number.

```typescript
import { isNumber } from '@terminus/ngx-tools/type-guards';

isNumber(12);    // Returns: true
isNumber('foo'); // Returns: false
```

## `isObject`

Determine if a value is an Object.

```typescript
import { isObject } from '@terminus/ngx-tools/type-guards';

isObject({});    // Returns: true
isObject('foo'); // Returns: false
```

## `isSet`

Determine if a value is set.

```typescript
import { isSet } from '@terminus/ngx-tools/type-guards';

isSet<string>('hi');   // Returns: true
isSet<number>(void 0); // Returns: false
```

## `isString`

Determine if a value is a String.

```typescript
import { isString } from '@terminus/ngx-tools/type-guards';

isString('foo'); // Returns: true
isString({});    // Returns: false
```

## `isTokenResponse`

Determine if a value is a `TokenResponse`.

```typescript
import { isTokenResponse } from '@terminus/ngx-tools/type-guards';

isTokenResponse({token: 'any'})               // Returns: true
isTokenResponse<MyResponseType>({foo: 'bar'}) // Returns: false
```

## `isUndefined`

Determine if a value is undefined.

```typescript
import { isUndefined } from '@terminus/ngx-tools/type-guards';

isUndefined(undefined) // Returns: true
isUndefined(null)      // Returns: false
isUndefined('foo')     // Returns: false
```

## `isValidDate`

Determine if an input is a valid date.

```typescript
import { isValidDate } from '@terminus/ngx-tools/type-guards';

isValidDate('foo')         // Returns: false
isValidDate(new Date())    // Returns: true
isValidDate('2020-02-07')  // Returns: true
```
