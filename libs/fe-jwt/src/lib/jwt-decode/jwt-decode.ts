// Rewritten from https://github.com/auth0/jwt-decode/tree/master/lib to be typescript compliant
// eslint-disable-next-line @typescript-eslint/naming-convention
import { base64_url_decode } from './base64-url-decode';


export class InvalidTokenError {
  constructor(public message: string) {}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(InvalidTokenError.prototype as any).name = 'InvalidTokenError';


/**
 * Decode JWT token
 *
 * @param token
 * @param options
 * @param options.header
 * @returns Token
 */
export function jwtDecode<T>(token: string, options?: {header?: boolean}): T {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  const pos = options.header ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos])) as T;
  } catch (e) {
    if (e instanceof Error) {
      throw new InvalidTokenError(`Invalid token specified: ${e.message}`);
    } else {
      throw e;
    }
  }
}
