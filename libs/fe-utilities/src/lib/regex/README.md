<h1>Regex</h1>

A collection of well-tested and well-performing regexes.

**Import from:** `@terminus/fe-utilities`

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Credit Card](#credit-card)
- [Date](#date)
- [Email](#email)
- [Numbers](#numbers)
  - [`onlyNumbersRegex`](#onlynumbersregex)
  - [`containsNumbersRegex`](#containsnumbersregex)
- [Letters](#letters)
  - [`onlyLettersRegex`](#onlylettersregex)
  - [`containsLowercase`](#containslowercase)
  - [`containsUppercase`](#containsuppercase)
- [Password](#password)
- [Phone](#phone)
- [Postal Code](#postal-code)
- [Special Characters](#special-characters)
- [URL](#url)
  - [URL with optional protocol](#url-with-optional-protocol)
- [UUID](#uuid)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Credit Card

`creditCardRegex`: Regex requiring a valid credit card number.

```typescript
import { creditCardRegex } from '@terminus/fe-utilities';

creditCardRegex.test('3852000023237');    // false
creditCardRegex.test('4242424242424242'); // true
```

## Date

`dateRegex`: Regex requiring a valid date in the format `(M)M/(D)D/(YY)YY`.

- Supports two or four digit years beginning with `19` or `20`.
- Month and day allow an optional leading `0` and can be one or two digits.
- Dashes (`-`) are also allowed instead of slashes (`/`).

```typescript
import { dateRegex } from '@terminus/fe-utilities';

dateRegex.test('3/3/1642');   // false
dateRegex.test('3/3/18');     // true
dateRegex.test('01-22-1998'); // true
```

## Email

`emailRegex`: Regex requiring a valid email address.

```typescript
import { emailRegex } from '@terminus/fe-utilities';

emailRegex.test('foobarcom');   // false
emailRegex.test('foo@bar.com'); // true
```

## Numbers

### `onlyNumbersRegex`

- `onlyNumbersRegex`: Regex requiring only numbers.

```typescript
import { onlyNumbersRegex } from '@terminus/fe-utilities';

onlyNumbersRegex.test('123v'); // false
onlyNumbersRegex.test('1234'); // true
```

### `containsNumbersRegex`

- `containsNumbersRegex`: Regex requiring at least 1 number.
- `createContainsNumbersRegex`: Create a regex that requires at least X numbers.

```typescript
import { containsNumbersRegex } from '@terminus/fe-utilities';

containsNumbersRegex.test('FOO'); // false
containsNumbersRegex.test('Foo2'); // true
```

To verify that a certain amount of numbers exist, create a new regex with a minimum:

```typescript
import { createContainsNumbersRegex } from '@terminus/fe-utilities';

// Create a regex that requires at least 2 numbers
const regex = createContainsNumbersRegex(2);
regex.test('Foo6'); // false
regex.test('F2oo5'); // true
```

## Letters

### `onlyLettersRegex`

- `onlyLettersRegex`: Regex requiring only English letters.

```typescript
import { onlyLettersRegex } from '@terminus/fe-utilities';

onlyLettersRegex.test('Fo6o'); // false
onlyLettersRegex.test('Foo'); // true
```

### `containsLowercase`

- `containsLowercaseRegex`: Regex requiring at least 1 lowercase letter.
- `createContainsLowercaseRegex`: Create a regex that requires at least X lowercase characters.

```typescript
import { containsLowercaseRegex } from '@terminus/fe-utilities';

containsLowercaseRegex.test('FOO'); // false
containsLowercaseRegex.test('FoO'); // true
```

To verify that a certain amount of lowercase characters exist you can create a new regex with a minimum:

```typescript
import { createContainsLowercaseRegex } from '@terminus/fe-utilities';

// Create a regex that requires at least 2 lowercase letters
const regex = createContainsLowercaseRegex(2);
regex.test('FOo'); // false
regex.test('Foo'); // true
```

### `containsUppercase`

- `containsUppercaseRegex`: Regex requiring at least 1 uppercase letter.
- `createContainsUppercaseRegex`: Create a regex that requires at least X uppercase characters.

```typescript
import { containsUppercaseRegex } from '@terminus/fe-utilities';

containsUppercaseRegex.test('foo'); // false
containsUppercaseRegex.test('Foo'); // true
```

To verify that a certain amount of uppercase characters exist you can create a new regex with a minimum:

```typescript
import { createContainsUppercaseRegex } from '@terminus/fe-utilities';

// Create a regex that requires at least 2 uppercase letters
const regex = createContainsUppercaseRegex(2);
regex.test('Foo'); // false
regex.test('FOo'); // true
```

## Password

:warning: NOTE: Refactor scheduled: https://github.com/GetTerminus/terminus-ui/issues/698 :warning:

> Once the refactor is complete, there will be no need for a single regex to test the password. We
> will be composing the password validator by combining several lower-level validators.

`passwordRegex`: Between 6 and 100 characters, is a string, and has at least 1 number.

```typescript
import { passwordRegex } from '@terminus/fe-utilities';

passwordRegex.test('V9Cpp7RGB9'); // true
passwordRegex.test('MA9Lv');      // false
```

## Phone

`phoneRegex`: Any valid US phone number.

```typescript
import { phoneRegex } from '@terminus/fe-utilities';

phoneRegex.test('020 7183 8750');  // false
phoneRegex.test('(123) 123-1234'); // true
```

## Postal Code

`postalRegex`: Any valid US postal code.

```typescript
import { postalRegex } from '@terminus/fe-utilities';

postalRegex.test('12345');      // true
postalRegex.test('12345-12');   // false
postalRegex.test('98765-4321'); // true
```

## Special Characters

- `containsSpecialCharacterRegex`: Regex requiring at least 1 special character.
- `createContainsSpecialCharacterRegex`: Create a regex that requires at least X special characters.

```typescript
import { containsSpecialCharacterRegex } from '@terminus/fe-utilities';

containsSpecialCharacterRegex.test('foo'); // false
containsSpecialCharacterRegex.test('Fo&o'); // true
```

To verify that a certain amount of special characters exist you can create a new regex with a minimum:

```typescript
import { createContainsSpecialCharacterRegex } from '@terminus/fe-utilities';

// Create a regex that requires at least 2 special characters
const regex = createContainsSpecialCharacterRegex(2);
regex.test('Fo$o'); // false
regex.test('F$o#'); // true
```

## URL

`urlRegex`: Any valid URL (http/ftp/unicode/IP/etc).

```typescript
import { urlRegex } from '@terminus/fe-utilities';

urlRegex.test('http://0.0.0.0');            // false
urlRegex.test('http://foo.com/blah_blah/'); // true
```

### URL with optional protocol

This regex can be used when a URL needs to be validated but the protocol (ie `http`) is not required.

```typescript
import { urlRegex } from '@terminus/fe-utilities';

urlOptionalProtocolRegex.test('http://0.0.0.0');            // false
urlOptionalProtocolRegex.test('foo.com/blah_blah/');        // true
urlOptionalProtocolRegex.test('http://foo.com/blah_blah/'); // true
```

## UUID

`uuidRegex`: Any canonically formatted UUID that is Version 1 through 5 and is the appropriate Variant as per RFC4122.

```typescript
import { uuidRegex } from '@terminus/fe-utilities';

uuidRegex.test('f4ee5eed-ed19-3681-713e-907a23ed7858'); // true
uuidRegex.test('f4ee5-ed19-681-713e-907a23ed78580000'); // false
```
