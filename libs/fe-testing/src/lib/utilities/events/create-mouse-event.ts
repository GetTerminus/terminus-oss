/**
 * Create a browser MouseEvent with the specified options
 *
 * @param type - The event type
 * @param x - The location on the X axis
 * @param y - The location on the Y axis
 * @returns The event
 *
 * @example
 * createMouseEvent('click');
 * createMouseEvent('click', 212, 433);
 */
export function createMouseEvent(type: string, x = 0, y = 0): MouseEvent {
  const event: MouseEvent = document.createEvent('MouseEvent');

  /* eslint-disable line-comment-position */
  event.initMouseEvent(
    type,
    false, // canBubble
    false, // cancelable
    window, // view
    0, // detail
    x, // screenX
    y, // screenY
    x, // clientX
    y, // clientY
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    0, // button
    null, // relatedTarget
  );
  /* eslint-enable line-comment-position */

  return event;
}
