import { createFakeEvent } from './create-fake-event';
import { dispatchEvent } from './dispatch-event';


/**
 * Shorthand to dispatch a fake event on a specified node.
 *
 * @param node - The Node that should dispatch the fake event
 * @param type - The event type
 * @param canBubble - Define if the event can bubble up the DOM
 * @returns The event
 *
 * @example
 * dispatchFakeEvent(myNativeElement, 'mousedown');
 * dispatchFakeEvent(myNativeElement, 'mousedown', true);
 */
export const dispatchFakeEvent =
  (node: Node | Window, type: string, canBubble?: boolean): Event => dispatchEvent(node, createFakeEvent(type, canBubble));
