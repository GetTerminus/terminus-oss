import { Injectable } from '@angular/core';

import { noop } from '@terminus/fe-utilities';

const document: unknown = {
  body: {
    createTextRange: noop,
    appendChild: noop,
  },
  createElement: noop,
  createRange: () => ({ selectNodeContents: noop }),
  execCommand: noop,
};

@Injectable()
export class TsDocumentServiceMock {
  public document = document as Document;
}
