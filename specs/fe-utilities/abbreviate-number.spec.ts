import { abbreviateNumber } from '@terminus/fe-utilities';

describe(`abbreviateNumber`, function() {
  test(`should parse to the lowest level specified`, () => {
    const input1 = 1234;
    const input2 = 1234567;
    const input3 = 1234567890;
    const input4 = 1234567890123;
    const input5 = 1200;
    const input6 = 450;
    const input7 = 123456;
    const input8 = '123456';
    expect(abbreviateNumber(null)).toEqual('');
    expect(abbreviateNumber('')).toEqual('');
    expect(abbreviateNumber(void 0)).toEqual('');
    expect(abbreviateNumber(input1)).toEqual('1.2K');
    expect(abbreviateNumber(input1, 1)).toEqual('1.2K');
    expect(abbreviateNumber(input2, 1)).toEqual('1.2M');
    expect(abbreviateNumber(input3, 1)).toEqual('1.2B');
    expect(abbreviateNumber(input4, 2)).toEqual('1.23T');
    expect(abbreviateNumber(input5, 3)).toEqual('1.200K');
    expect(abbreviateNumber(input6, 1)).toEqual('450');
    expect(abbreviateNumber(input7, 2)).toEqual('123.46K');
    expect(abbreviateNumber(input8, 2)).toEqual('123.46K');
  });
});
