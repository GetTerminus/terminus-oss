import { isSet } from './is-set';


/**
 * Coerce the type to MouseEvent
 *
 * @param x - The item to test
 * @returns True if the value is a MouseEvent
 *
 * @example
 * isMouseEvent(myMouseEvent);    // Returns: true
 * isMouseEvent(myKeyboardEvent); // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isMouseEvent = (x: any): x is MouseEvent => !!x && isSet(x.relatedTarget);
