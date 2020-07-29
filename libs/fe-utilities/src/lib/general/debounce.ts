/**
 * Return a function, that, as long as it continues to be invoked, will not be triggered. The
 * function will be called after it stops being called for N milliseconds.
 *
 * @param func - The function to call after the debounce period
 * @param wait - The length of time to wait between calls (ms)
 * @param immediate - Whether the debounced function should be fired immediately
 * @param windowRef - A reference to the global window object
 * @returns The debounced function
 *
 * @example
 * const myFunc = () => {console.log('hi!')};
 * const myDebouncedFunc = debounce(myFunc, 200);
 * myDebouncedFunc();
 * myDebouncedFunc();
 * myDebouncedFunc();
 * // 'hi!' will only be logged once
 */
export function debounce<Context>(
  func: Function,
  wait: number,
  immediate = false,
  windowRef: Window = window,
): Function {
  let timeout: number | null = null;

  return function(this: Context) {
    const context: Context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = windowRef.setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}
