import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { abbreviateNumber } from '@terminus/fe-utilities';

/**
 * The abbreviate number pipe
 *
 * @example
 * {{ 1234 | tsAbbreviateNumber }}        : 1.2K
 * {{ 1200 | tsAbbreviateNumber:3 }}      : 1.200K
 * {{ 1200 | tsAbbreviateNumber:3:false }}: 1.2K
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/utilities-pipes-number</example-url>
 */
@Pipe({ name: 'tsAbbreviateNumber' })
export class TsAbbreviateNumberPipe implements PipeTransform {
  /**
   * Transform the value
   *
   * @param value - The value to transform
   * @param decimalPlace - How many decimal places should exist
   * @param allowTrailingZeros - Whether trailing zeros should be stripped
   * @returns The transformed value
   */
  public transform(value: number | string, decimalPlace = 1, allowTrailingZeros = true): string {
    // Check for null values to avoid issues during data-binding
    return value ? abbreviateNumber(value, decimalPlace, allowTrailingZeros) : '';
  }
}

