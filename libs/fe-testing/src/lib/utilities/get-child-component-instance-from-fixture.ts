import {
  DebugElement,
  Type,
} from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


/**
 * Return a component's instance from within a ComponentFixture
 *
 * @param fixture - The component fixture
 * @param component - The component to find
 * @returns The instance of the found component
 *
 * @example
 * const myItem = getChildComponentInstanceFromFixture(myFixture, MyComponent);
 */
export function getChildComponentInstanceFromFixture<FixtureType, ComponentType>(
  fixture: ComponentFixture<FixtureType>,
  component: Type<ComponentType>,
): ComponentType {
  const debugElForDumbComponent: DebugElement = fixture.debugElement.query(By.directive(component));

  return debugElForDumbComponent.injector.get(component);
}
