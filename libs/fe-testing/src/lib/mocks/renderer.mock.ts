import { noop } from '@terminus/fe-utilities';

/**
 * A mock of the Angular Renderer
 */
export const rendererMock = {
  setElementStyle: noop,
  setElementClass: noop,
  selectRootElement: noop,
  createElement: noop,
  createViewRoot: noop,
  createText: noop,
  setElementProperty: noop,
  setElementAttribute: noop,
  setText: noop,
  setBindingDebugInfo: noop,
  createTemplateAnchor: noop,
  projectNodes: noop,
  attachViewAfter: noop,
  detachView: noop,
  destroyView: noop,
  listen: noop,
  listenGlobal: noop,
  invokeElementMethod: noop,
  animate: noop,
};
