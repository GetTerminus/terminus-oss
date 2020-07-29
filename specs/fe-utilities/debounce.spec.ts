import {
  debounce,
  TsWindowService,
} from '@terminus/fe-utilities';

describe(`debounce`, function() {
  let func: Function;
  let debounced: Function;
  let windowMock: Window;

  beforeEach(() => {
    func = jest.fn();
    debounced = debounce(func, 200);
    windowMock = new TsWindowService().nativeWindow;
  });

  test(`should debounce all calls for the 'wait' period`, done => {
    for (const i of [1, 2, 3]) {
      // NOTE: passing in `i` is not needed but TypeScript yells about the unused variable otherwise
      debounced(i);
    }

    setTimeout(() => {
      expect(func).toHaveBeenCalledTimes(1);
      done();
    }, 201);
  });

  test(`should allow multiple calls if called after the wait period`, done => {
    const TEST_DELAY = 210;

    for (const i of [1, 2, 3]) {
      // NOTE: passing in `i` is not needed but TypeScript yells about the unused variable otherwise
      debounced(i);
    }

    setTimeout(() => {
      debounced();
    }, TEST_DELAY);

    setTimeout(() => {
      expect(func).toHaveBeenCalledTimes(2);
      done();
    }, TEST_DELAY * 2);
  });

  test(`should fire immediately if specified`, done => {
    const arr1: (string|number)[] = [];
    const arr2: (string|number)[] = [];
    const debouncedArr = [1, 2, 3, 4, 5, 'foo'];
    const debouncedImmediateArr = [1, 'foo', 2, 3, 4, 5];
    const origFunc = () => arr1.push('foo');
    const origImmediateFunc = () => arr2.push('foo');
    const debouncedOrig = debounce(origFunc, 200);
    const debouncedImmediateOrig = debounce(origImmediateFunc, 200, true);

    for (const v of [1, 2, 3, 4, 5]) {
      arr1.push(v);
      arr2.push(v);
      debouncedOrig();
      debouncedImmediateOrig();
    }

    setTimeout(() => {
      expect(arr1).toEqual(debouncedArr);
      expect(arr2).toEqual(debouncedImmediateArr);
      done();
    }, 1000);
  });

  test(`should use the passed in window reference`, done => {
    jest.useFakeTimers();
    const origFunc = () => {};
    const debouncedOrig = debounce(origFunc, 200, false, windowMock);

    for (const v of [1, 2, 3, 4, 5]) {
      // NOTE: passing in `v` is not needed but TypeScript yells about the unused variable otherwise
      debouncedOrig(v);
    }

    setTimeout(() => {
      expect(setTimeout).toHaveBeenCalled();
      done();
    }, 400);

    jest.runAllTimers();
  });

  test(`should retain this context`, () => {
    class TestClass {
      public debouncedFunc: Function;
      public arr: number[];
      public foo = 'bar';
      public func = function(this: any) {
        this.arr.push(new Date().getTime());
      };

      constructor() {
        this.arr = [];
        this.debouncedFunc = debounce(this.func, 100);
      }
    }
    const classMock = new TestClass();
    jest.useFakeTimers();
    for (const i of [1, 2, 3]) {
      classMock.debouncedFunc();
    }
    jest.runAllTimers();

    expect(classMock.arr.length).toEqual(1);
  });
});
