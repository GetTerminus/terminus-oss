import { publicShapeOf } from '@terminus/fe-utilities';

describe('publicShapeOf', function() {
  class Foo {
    foo1(x: string) {}
    private foo2(y: number) {}
  }

  test(`should pass if class implement publicShapeOf without private property`, () => {
    class Bar implements publicShapeOf<Foo> {
      foo1(x: string) {}
    }
    const bar = new Bar();
    expect(bar.foo1).toBeTruthy();
  });

  test(`should pass if class implement publicShapeOf with private property of the same name`, () => {
    class Bar implements publicShapeOf<Foo> {
      foo1(x: string) {}
      private foo2(y: number) {}
    }
    const bar = new Bar();
    expect(bar.foo1).toBeTruthy();
  });

  /**
   *  This is the fail-test. It works, however, it also fails the testing script!
   *  keeping the code so we can test manually, until we figure out a way to run it programmatically.
   */
  /*
  test(`should fail if class does not implement publicShapeOf`, () => {
    class Baz implements Foo {
      foo1(x: string) {}
      private foo2(y: number) {}
    }
    const baz = new Baz() as any;
    expect(baz.foo1).toBeFalsy();
    expect(baz.foo2).toBeFalsy();
  }); */
});
