<h1>Autofocus</h1>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Basic usage](#basic-usage)
- [Binding](#binding)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Basic usage

The `tsAutofocus` directive can be used on any element that has a `.focus()` method. This includes
inputs, select menus, textarea, buttons, links, iframes and any element with a defined `tabindex`
above -1.

Add the directive to a focusable element:

```html
<input type="text" tsAutofocus />
```

## Binding

Passing in any value _except_ `false`, `'false'`, `null`, or `undefined` will enable the directive.

```html
<!-- enabled -->
<input type="text" [tsAutofocus]="myProperty" />
<input type="text" [tsAutofocus]="true" />
<input type="text" tsAutofocus="" />

<!-- disabled -->
<input type="text" [tsAutofocus]="false" />
<input type="text" [tsAutofocus]="null" />
```
