import { ColorFormatPipe } from './color-format.pipe';

describe(`ColorFormatPipe`, () => {
  test(`create exist`, () => {
    const pipe = new ColorFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
