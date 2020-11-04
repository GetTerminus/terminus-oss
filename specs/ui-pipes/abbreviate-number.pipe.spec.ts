import { TsAbbreviateNumberPipe } from '@terminus/ui-pipes';

describe(`TsAbbreviateNumberPipe`, function() {
  let pipeClass: TsAbbreviateNumberPipe;
  let pipe: Function;
  const num = 1234;
  const num2 = 12345678;

  beforeEach(() => {
    pipeClass = new TsAbbreviateNumberPipe();
    pipe = pipeClass.transform;
  });

  test(`should return undefined if no value is passed in`, () => {
    expect(pipe(null)).toEqual('');
    expect(pipe('')).toEqual('');
  });

  test(`should abbreviate a number`, () => {
    expect(pipe(num, 2)).toEqual('1.23K');
    expect(pipe(num2, 2)).toEqual('12.35M');
  });

  test(`should abbreviate a string`, () => {
    expect(pipe(num.toString(), 2)).toEqual('1.23K');
    expect(pipe(num2.toString(), 2)).toEqual('12.35M');
  });

  test(`should default to a precision of 1`, () => {
    expect(pipe(num)).toEqual('1.2K');
  });

  test(`should default to allowing trailing zeros`, () => {
    expect(pipe(1200, 3)).toEqual('1.200K');
  });

  test(`should allow trimming trailing zeros`, () => {
    expect(pipe(1200, 3, false)).toEqual('1.2K');
  });
});
