<h1>Keycodes</h1>

A collection of key codes to avoid duplicate strings throughout your codebase.

**Import from:** `@terminus/fe-utilities`

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Keys](#keys)
- [Available Key Codes](#available-key-codes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Keys

The `KEYS` collection contains the `code` and `keyCode` for all supported keys.

```typescript
import { KEYS } from '@terminus/ngx-tools/keycodes';
import { dispatchKeyboardEvent } from '@terminus/ngx-tools/testing';

KEYS.ENTER.code    // 'Enter'
KEYS.ENTER.keyCode // 13

// Example usage:
dispatchKeyboardEvent(myElementRef, KEYS.ENTER.keycode);
```

## Available Key Codes

| Name                            |
|---------------------------------|
| `A`, `B`, `C` ... `Z`           |
| `BACKSPACE`                     |
| `COMMA`                         |
| `DELETE`                        |
| `DOWN_ARROW`                    |
| `END`                           |
| `ENTER`                         |
| `ESCAPE`                        |
| `HOME`                          |
| `LEFT_ARROW`                    |
| `PAGE_DOWN`                     |
| `PAGE_UP`                       |
| `RIGHT_ARROW`                   |
| `SPACE`                         |
| `TAB`                           |
| `UP_ARROW`                      |
| `ZERO`, `ONE`, `TWO` ... `NINE` |
