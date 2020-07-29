import { coerceBooleanProperty } from '@terminus/fe-utilities';

describe(`coerceBooleanProperty`, function() {
  test(`should coerce undefined to false`, () => {
    expect(coerceBooleanProperty(undefined)).toBe(false);
  });

  test(`should coerce null to false`, () => {
    expect(coerceBooleanProperty(null)).toBe(false);
  });

  test(`should coerce the empty string to true`, () => {
    expect(coerceBooleanProperty('')).toBe(true);
  });

  test(`should coerce zero to true`, () => {
    expect(coerceBooleanProperty(0)).toBe(true);
  });

  test(`should coerce the string "false" to false`, () => {
    expect(coerceBooleanProperty('false')).toBe(false);
  });

  test(`should coerce the boolean false to false`, () => {
    expect(coerceBooleanProperty(false)).toBe(false);
  });

  test(`should coerce the boolean true to true`, () => {
    expect(coerceBooleanProperty(true)).toBe(true);
  });

  test(`should coerce the string "true" to true`, () => {
    expect(coerceBooleanProperty('true')).toBe(true);
  });

  test(`should coerce an arbitrary string to true`, () => {
    expect(coerceBooleanProperty('pink')).toBe(true);
  });

  test(`should coerce an object to true`, () => {
    expect(coerceBooleanProperty({})).toBe(true);
  });

  test(`should coerce an array to true`, () => {
    expect(coerceBooleanProperty([])).toBe(true);
  });
});
