import { dispatchFakeEvent } from './events/dispatch-fake-event';


/**
 * Focuses an input, sets it's value and dispatches the `input` event, simulating the user typing.
 *
 * @param value - Value to be set on the input.
 * @param element - Element onto which to set the value.
 *
 * @example
 * typeInElement('test@test.com', myEmailInputElement);
 */
export function typeInElement(value: string, element: HTMLInputElement): void {
  element.focus();
  element.value = value;
  dispatchFakeEvent(element, 'input');
}
