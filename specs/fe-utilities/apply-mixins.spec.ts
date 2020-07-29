import { applyMixins } from '@terminus/fe-utilities';

// Disposable Mixin
class Disposable {
  public isDisposed!: boolean;
  public dispose() {
    this.isDisposed = true;
  }
}

// Activatable Mixin
class Activatable {
  public isActive!: boolean;
  public activate() {
    this.isActive = true;
  }
  public deactivate() {
    this.isActive = false;
  }
}

// Base class
class SmartObject implements Disposable, Activatable {
  // Disposable
  public isDisposed = false;
  public dispose!: () => void;
  // Activatable
  public isActive = false;
  public activate!: () => void;
  public deactivate!: () => void;

  public interact() {
    this.activate();
  }
}
applyMixins(SmartObject, [Disposable, Activatable]);

describe(`applyMixins`, function() {
  test(`should combine properties to base class`, () => {
    const smartObj = new SmartObject();

    smartObj.interact();
    expect(smartObj.isActive).toEqual(true);
  });
});
