import { createTouchEvent } from './create-touch-event';
import { dispatchEvent } from './dispatch-event';


/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 *
 * @param node - The Node that should dispatch the touch event
 * @param type - The event type
 * @param x - The location on the X axis
 * @param y - The location on the Y axis
 * @returns The touch event
 *
 * @example
 * dispatchTouchEvent(myNativeElement, 'touchstart');
 * dispatchTouchEvent(myNativeElement, 'touchstart', 10, 10);
 */
export const dispatchTouchEvent = (node: Node, type: string, x = 0, y = 0): Event => dispatchEvent(node, createTouchEvent(type, x, y));
