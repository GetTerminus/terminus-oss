import { isSet } from './is-set';


/**
 * Coerce the type to KeyboardEvent
 *
 * @param x - The item to test
 * @returns True if the value is a KeyboardEvent
 *
 * @example
 * isKeyboardEvent(myKeyboardEvent); // Returns: true
 * isKeyboardEvent(myClickEvent);    // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isKeyboardEvent = (x: any): x is KeyboardEvent => !!x && isSet(x.code);
