import { Renderer2 } from '@angular/core';

import { noop } from '@terminus/fe-utilities';

/**
 * A mock of the Angular Renderer2
 */
export class Renderer2Mock implements Renderer2 {
  public _data: any;
  public addClass() {}
  public appendChild() {}
  public createComment() {}
  public set data(v: any) {
    this._data = v;
  }
  public get data(): any {
    return this._data;
  }
  public destroy() {}
  public destroyNode() {}
  public insertBefore() {}
  public nextSibling() {}
  public parentNode() {}
  public removeAttribute() {}
  public removeChild() {}
  public removeClass() {}
  public removeStyle() {}
  public setAttribute() {}
  public setProperty() {}
  public setStyle() {}
  public setValue() {}
  public animate() {}
  public attachViewAfter() {}
  public createElement() {}
  public createTemplateAnchor() {}
  public createText() {}
  public createViewRoot() {}
  public destroyView() {}
  public detachView() {}
  public invokeElementMethod() {}
  public listen() {
    return noop;
  }
  public listenGlobal() {
    return noop;
  }
  public projectNodes() {}
  public selectRootElement() {}
  public setBindingDebugInfo() {}
  public setElementAttribute() {}
  public setElementClass() {}
  public setElementProperty() {}
  public setElementStyle() {}
  public setText() {}
}
