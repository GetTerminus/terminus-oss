/* eslint-disable @typescript-eslint/no-magic-numbers */
/**
 * Generate a canonically formatted UUID that is Version 1 through 5 and is the appropriate Variant as per RFC4122.
 *
 * @returns The UUID
 *
 * @example
 * generateUUID() // Returns a UUID such as: `f4ee5eed-ed19-3681-713e-907a23ed7858`
 */
export function generateUUID(): string {
  const buf = new Uint16Array(8);
  window.crypto.getRandomValues(buf);

  const S4 = function(num: number) {
    let ret = num.toString(16);
    while (ret.length < 4) {
      ret = `0${ret}`;
    }
    return ret;
  };

  return (`${S4(buf[0]) + S4(buf[1])}-${S4(buf[2])}-${S4(buf[3])}-${S4(buf[4])}-${S4(buf[5])}${S4(buf[6])}${S4(buf[7])}`);
}
