import {
  Component,
  Injectable,
  NgModule,
  Pipe,
  PipeTransform,
} from '@angular/core';

import { createComponent } from '@terminus/fe-testing';

// Test Service
@Injectable({ providedIn: 'root' })
export class TestService {
  public foo() {
    return 'foo';
  }
}

// Test Pipe
@Pipe({ name: 'testPipe' })
export class TestPipe implements PipeTransform {
  public transform(value: number): number {
    return value * 2;
  }
}

// Test Pipe Module
@NgModule({
  exports: [TestPipe],
  providers: [TestPipe],
  declarations: [TestPipe],
})
export class TestPipesModule {}

// Test Component - Basic
@Component({ template: `` })
export class TestComponent {
}

// Test Component - With Service
@Component({ template: `` })
export class TestComponentWithService {
  constructor(public testService: TestService) {}
}

// Test Component - With Pipe
@Component({ template: `` })
export class TestComponentWithPipe {
  public foo: number;
  constructor(public testPipe: TestPipe) {
    this.foo = this.testPipe.transform(5);
  }
}

describe(`createComponent`, function() {
  test(`should return a TestBed fixture`, function() {
    const fixture = createComponent(TestComponent);
    expect(fixture).toBeTruthy();
    expect(fixture.detectChanges).toEqual(expect.any(Function));
  });

  test(`should include any passed providers`, function() {
    const fixture = createComponent(TestComponentWithService, [TestService]);
    expect(fixture.componentInstance.testService.foo()).toEqual('foo');
  });

  test(`should include any passed imports`, function() {
    const fixture = createComponent(TestComponentWithPipe, undefined, [TestPipesModule]);
    expect(fixture.componentInstance.foo).toEqual(10);
  });
});
