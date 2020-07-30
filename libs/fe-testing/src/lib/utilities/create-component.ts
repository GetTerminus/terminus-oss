import {
  Provider,
  Type,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';


/**
 * Create a TestBed fixture with a single component registered
 *
 * @param component - The test component
 * @param providers - Any providers to register to the test module
 * @param imports - Any items to import to the test module
 * @returns The test fixture
 *
 * @example
 * const myComponent = createComponent(MyComponent);
 * const myComponent = createComponent(MyComponent, MyProviders, MyImports);
 */
export function createComponent<T>(
  component: Type<T>,
  providers: Provider[] = [],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imports: any[] = [],
): ComponentFixture<T> {
  TestBed.configureTestingModule({
    imports: [
      ...imports,
    ],
    declarations: [component],
    providers: [
      ...providers,
    ],
  }).compileComponents();

  return TestBed.createComponent<T>(component);
}
