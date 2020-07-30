/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 *
 * @param type - The touch event type
 * @param pageX - The location on the X axis
 * @param pageY - The location on the Y axis
 *
 * @example
 * createTouchEvent('touchstart');
 * createTouchEvent('touchstart', 212, 433);
 */
export function createTouchEvent(type: string, pageX = 0, pageY = 0): UIEvent {
  // NOTE: In favor of creating events that work for most of the browsers, the event is created
  // as a basic UI Event. The necessary details for the event will be set manually.
  const event: UIEvent = document.createEvent('UIEvent');
  const touchDetails = {
    pageX,
    pageY,
  };
  event.initEvent(type, true, true);
  // NOTE: Most of the browsers don't have a "initTouchEvent" method that can be used to define the touch details.
  Object.defineProperties(event, { touches: { value: [touchDetails] } });
  return event;
}
