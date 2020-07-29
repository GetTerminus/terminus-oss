import { isSet } from './is-set';


/**
 * Coerce the type to HTMLInputElement
 *
 * @param x - The item to test
 * @returns True if the value is a HTMLInputElement
 *
 * @example
 * const myInput = document.querySelector('#myInput');
 * const myDiv = document.querySelector('#myDiv');
 *
 * isHTMLInputElement(myInput); // Returns: true
 * isHTMLInputElement(myDiv);   // Returns: false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isHTMLInputElement = (x: any): x is HTMLInputElement => !!x && isSet(x.files);
