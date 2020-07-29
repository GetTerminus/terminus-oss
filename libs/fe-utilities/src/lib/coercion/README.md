<h1>Coercion</h1>

A collection of functions to coerce values to a specific property type.

**Import from:** `@terminus/fe-utilities`

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [`coerceArray`](#coercearray)
- [`coerceBooleanProperty`](#coercebooleanproperty)
- [`coerceDateProperty`](#coercedateproperty)
- [`coerceNumberProperty`](#coercenumberproperty)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## `coerceArray`

Wraps the provided value in an array, unless the provided value is an array.

```typescript
import { coerceArray } from '@terminus/fe-utilities';

coerceArray<string>('foo'); // Returns: ['foo']
coerceArray(['foo']);       // Returns: ['foo']
```

## `coerceBooleanProperty`

Coerces a value to a boolean.

```typescript
import { coerceBooleanProperty } from '@terminus/fe-utilities';

coerceBooleanProperty('true'); // Returns: true
```

## `coerceDateProperty`

Coerces a value to a date. Tested against strings of RFC2822 & RFC1123

```typescript
import { coerceDateProperty } from '@terminus/fe-utilities';

coerceDateProperty('Wed, 21 Oct 2015 07:28:00 GMT'); // Returns: Date object
// Also supports a custom fallback value:
coerceDateProperty<boolean>('foo', false);           // Returns: false
```

## `coerceNumberProperty`

Coerces a value to a number.

```typescript
import { coerceNumberProperty } from '@terminus/fe-utilities';

coerceNumberProperty('12');                  // Returns: 12
// Also supports a custom fallback value:
coerceNumberProperty<boolean>('foo', false); // Returns: false
```
