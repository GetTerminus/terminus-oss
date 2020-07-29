/**
 * A type that allows consumer to extend a class with private properties
 *
 * type T - the Class with private properties
 *
 * @example
 * class Foo {
 *   foo1(x: string) {}
 *   private foo2(y: number) {}
 * }
 *
 * class Bar implements publicShapeOf<Foo> {
 *   foo1(x: string) {}
 * }
 */
export type publicShapeOf<T> = {
  [P in keyof T]: T[P];
};
