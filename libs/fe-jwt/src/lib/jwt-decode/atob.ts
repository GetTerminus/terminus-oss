/* eslint-disable @typescript-eslint/no-magic-numbers, no-bitwise, no-mixed-operators */

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

export class InvalidCharacterError extends Error {
  constructor(public message: string) {
    super(message);
  }
}

/**
 * Encode value
 *
 * @param input
 * @returns The encoded value
 */
export function atobPolyfill(input: string): string {
  const str = String(input).replace(/=+$/, '');
  if (str.length % 4 === 1) {
    throw new InvalidCharacterError("NGXTools: 'atob' failed: The string to be decoded is not correctly encoded.");
  }
  let output = '';
  for (
    // initialize result and counters
    let bc = 0, bs, buffer, idx = 0;
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/restrict-plus-operands
    ~buffer && (bs = bc % 4 ? ((bs) * 64) + buffer : buffer,
    // and if not first of each 4 characters,
    // convert the first 8 bits to one ascii character
    bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}
