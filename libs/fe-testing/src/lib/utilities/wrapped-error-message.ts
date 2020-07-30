/**
 * Gets a RegExp used to detect an angular wrapped error message.
 *
 * See https://github.com/angular/angular/issues/8348
 *
 * @param e - The error
 * @returns The regex
 */
export function wrappedErrorMessage(e: Error): RegExp {
  const escapedMessage = e.message.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  return new RegExp(escapedMessage);
}
