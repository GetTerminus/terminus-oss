import {
  Pipe,
  PipeTransform,
} from '@angular/core';


/**
 * The sentence case pipe
 *
 * @example
 * {{ 'HERE IS MY STRING' | tsSentenceCase }}
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/utilities-pipes-strings</example-url>
 */
@Pipe({ name: 'tsSentenceCase' })
export class TsSentenceCasePipe implements PipeTransform {
  public transform(value: string): string | undefined {
    // Check for null values to avoid issues during data-binding
    if (!value) {
      return undefined;
    }
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
