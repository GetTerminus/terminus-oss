/**
 * Utility to dispatch any event on a Node.
 *
 * @param node - The Node that should dispatch the event
 * @param event - The event to be dispatched
 * @returns The dispatched event
 *
 * @example
 * dispatchEvent(myNativeElement, 'blur');
 */
export function dispatchEvent(node: Node | Window, event: Event): Event {
  node.dispatchEvent(event);
  return event;
}
