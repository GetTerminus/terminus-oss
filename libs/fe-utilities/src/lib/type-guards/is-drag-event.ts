import { isSet } from './is-set';


/**
 * Coerce the type to DragEvent
 *
 * @param x - The item to test
 * @returns True if the value is a DragEvent
 *
 * @example
 * isDragEvent(myDragEvent);  // Returns: true
 * isDragEvent(myClickEvent); // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isDragEvent = (x: any): x is DragEvent => !!x && isSet(x.dataTransfer);
