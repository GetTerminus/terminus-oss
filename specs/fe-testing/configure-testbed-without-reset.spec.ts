import {
  Component,
  OnDestroy,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  TestModuleMetadata,
} from '@angular/core/testing';

import { configureTestBedWithoutReset } from '@terminus/fe-testing';

@Component({ template: `` })
class TestHostComponent implements OnDestroy {
  public arr: number[] = [];

  public ngOnDestroy() {
    this.arr.push(new Date().getTime());
  }
}

describe(`configureTestBedWithoutReset`, function() {
  let fixture: ComponentFixture<TestHostComponent>;
  let testComponent: TestHostComponent;
  const moduleDefinition: TestModuleMetadata = {
    declarations: [
      TestHostComponent,
    ],
  };

  configureTestBedWithoutReset(moduleDefinition);

  beforeAll(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  test(`should not reset the TestBed between tests part 1`, () => {
    expect(testComponent.arr.length).toEqual(0);
  });

  test(`should not reset the TestBed between tests part 2`, () => {
    expect(testComponent.arr.length).toEqual(0);
  });
});
