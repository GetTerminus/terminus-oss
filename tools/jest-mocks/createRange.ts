/* eslint-disable @typescript-eslint/no-explicit-any */
window.document.createRange = () => ({
  setEnd: () => {},
  setStart: () => {},
  getBoundingClientRect: () => ({ right: 0 }),
  getClientRects: () => [],
  commonAncestorContainer: document.createElement('div'),
}) as any;
