import {
  Pipe,
  PipeTransform,
} from '@angular/core';


/**
 * A pipe that converts a string to title case
 *
 * @example
 * {{ 'MY TEXT' | tsTitleCase }}
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/utilities-pipes-strings</example-url>
 */
@Pipe({ name: 'tsTitleCase' })
export class TsTitleCasePipe implements PipeTransform {
  public transform(value: string): string | undefined {
    // Check for null values to avoid issues during data-binding
    if (value == null || value === '') {
      return undefined;
    }
    return value.toLowerCase().split(' ').map(word => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
  }
}
