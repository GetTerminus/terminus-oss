import { ControlValueAccessorProviderFactory } from '@terminus/ui-utilities';

describe(`ControlValueAccessorProviderFactory`, function() {
  test(`should forward a reference to this component`, () => {
    class Foo {}
    const provider = ControlValueAccessorProviderFactory<Foo>(Foo);
    expect(provider.useExisting()).toEqual(Foo);
  });
});
