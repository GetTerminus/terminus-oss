import { SimpleChanges } from '@angular/core';

import { NgChangeObjectValueParser } from './ngchange-object-value-parser';


/**
 * Helper function to determine if a specific value has changed
 *
 * @param changes - The object of changes
 * @param path - The object path in question
 * @returns True if the value has changed
 *
 * @example
 * inputHasChanged(changesObject, 'myInputName')
 */
export function inputHasChanged(changes: SimpleChanges, path: string): boolean | undefined {
  if (!changes || !path) {
    return undefined;
  }
  const oldValue = NgChangeObjectValueParser.getOldValue(changes, path);
  const newValue = NgChangeObjectValueParser.getNewValue(changes, path);
  return oldValue !== newValue;
}
