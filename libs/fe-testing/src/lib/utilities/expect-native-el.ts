import { ComponentFixture } from '@angular/core/testing';


/**
 * Reusable expect statement to check for the nativeElement
 *
 * NOTE: This helper only accesses the 1st-level child within a component.
 *
 * @param fixture - The test fixture
 * @returns expect statement
 *
 * @example
 * test('My test', () => {
 *   expectNativeEl(myEl);
 * });
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function expectNativeEl<T>(fixture: ComponentFixture<T>): any {
  fixture.detectChanges();
  // eslint-disable-next-line no-undef
  return expect(fixture.debugElement.children[0].nativeElement);
}
