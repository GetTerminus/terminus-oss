import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { hexToRGB } from '../utilities/hexToRgb';
import { rgbToHsl } from '../utilities/rgbToHsl';

/**
 * All possible color formats
 */
export type TsdtColorFormat
  = 'hex'
  | 'rgb'
  | 'hsl'
;

/**
 * Format a color variable as hex, rgb or hsl
 */
@Pipe({ name: 'colorFormat' })
export class ColorFormatPipe implements PipeTransform {
  /**
   * Transform a color
   *
   * @param color - The color value to format
   * @param format - The desired format
   * @returns The formatted color
   */
  public transform(color: string, format: TsdtColorFormat): string {
    if (!color) {
      return null;
    }
    if (!format || format === 'hex') {
      return color;
    }
    if (format === 'rgb') {
      return hexToRGB(color);
    }
    if (format === 'hsl') {
      const rgb = hexToRGB(color);
      return rgbToHsl(rgb);
    }
  }
}
