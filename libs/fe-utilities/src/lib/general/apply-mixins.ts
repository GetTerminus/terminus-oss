/**
 * A helper function to apply TypeScript mixins
 *
 * https://www.typescriptlang.org/docs/handbook/mixins.html
 *
 * @param derivedCtor - The mixin target class
 * @param baseCtors - An array of classes to combine into the target class
 * @returns The mixed class
 *
 * @example
 * applyMixins(SmartObject, [Disposable, Activatable]);
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
