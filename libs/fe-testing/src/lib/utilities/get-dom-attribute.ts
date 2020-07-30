/**
 * Helper function to retrieve desired DOM attribute's value
 *
 * @param el - HTMLElement
 * @param attr - Desired attribute
 * @returns attribute's value
 *
 * @example
 * getDomAttribute(myElement, 'id'); // Returns: the element ID
 */
export function getDomAttribute(el: HTMLElement, attr: string): string | undefined {
  const item = el.attributes.getNamedItem(attr);
  return item ? item.value : undefined;
}
