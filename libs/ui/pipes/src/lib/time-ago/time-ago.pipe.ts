import {
  isDevMode,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { formatDistance } from 'date-fns';

import { isValidDate } from '@terminus/fe-utilities';


/**
 * A pipe that displays the time since a date
 *
 * @example
 * {{ date | tsTimeAgo:oldDate }}
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/utilities-pipes-dates</example-url>
 */
@Pipe({ name: 'tsTimeAgo' })
export class TsTimeAgoPipe implements PipeTransform {
  public transform(value: string | Date, comparedDate: string | Date  = new Date()): string | undefined {
    // Check for null values to avoid issues during data-binding
    if (value == null || value === '') {
      return undefined;
    }

    // Check for date validity
    if (!isValidDate(value) && isDevMode()) {
      throw Error(`'${value}' is not a valid date.`);
    }
    if (!isValidDate(comparedDate) && isDevMode()) {
      throw Error(`'${comparedDate}' is not a valid date.`);
    }

    // If dealing with a date objects, convert to strings
    const date1: Date = (typeof value === 'string') ? new Date(value) : value;
    const date2: Date = (typeof comparedDate === 'string') ? new Date(comparedDate) : comparedDate;

    return formatDistance(date1, date2);
  }
}

