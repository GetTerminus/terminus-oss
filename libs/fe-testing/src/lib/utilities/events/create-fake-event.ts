/**
 * Creates a fake event object with any desired event type.
 *
 * @param type - The event type
 * @param canBubble - Define if the event can bubble up the DOM
 * @param cancelable
 * @returns The event
 *
 * @example
 * createFakeEvent('focus');
 * createFakeEvent('focus', false, false);
 */
export function createFakeEvent(
  type: string,
  canBubble = true,
  cancelable = true,
): Event {
  const event: Event = document.createEvent('Event');
  event.initEvent(type, canBubble, cancelable);
  return event;
}
