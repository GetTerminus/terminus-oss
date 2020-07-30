import { ElementRef } from '@angular/core';

import { noop } from '@terminus/fe-utilities';

/**
 * Default stubbed items for `nativeElement`
 */
const defaults = {
  innerText: 'foo',
  style: {},
  classList: {
    add: noop,
    remove: noop,
  },
};

/**
 * A mock of the Angular ElementRef class
 */
export class ElementRefMock implements ElementRef {
  public nativeElement: any;

  public constructor(nativeElementAdditions?: {[key: string]: any}) {
    this.nativeElement = {
      ...defaults,
      ...nativeElementAdditions || {},
    };
  }
}
