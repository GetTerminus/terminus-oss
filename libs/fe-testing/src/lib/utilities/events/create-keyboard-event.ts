import { KeyCode } from '@terminus/fe-utilities';

/**
 * Dispatches a keydown event from an element.
 *
 * @param type - The event type
 * @param key - The KeyCode type
 * @param target - The target element
 * @returns The event
 *
 * @example
 * createKeyboardEvent('keydown', ENTER, myInputNativeElement);
 */
export function createKeyboardEvent(
  type: string,
  key: KeyCode,
  target?: Element,
): KeyboardEvent {
  // NOTE: Cannot 'type' the event here due to the note about FireFox below
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const event = document.createEvent('KeyboardEvent') as any;
  event.initEvent(type, true, false);
  const originalPreventDefault: () => void = event.preventDefault;

  // NOTE: Webkit Browsers don't set the keyCode when calling the init function.
  // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
  Object.defineProperties(event, {
    code: { get: () => key.code },
    key: { get: () => key.code },
    keyCode: { get: () => key.keyCode },
    target: { get: () => target },
  });

  // NOTE: IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
  event.preventDefault = function(): void {
    Object.defineProperty(event, 'defaultPrevented', { get: () => true });
    // FIXME: Not sure why this `as any` is needed now
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return originalPreventDefault.apply(this, arguments as any);
  };

  return event as KeyboardEvent;
}
