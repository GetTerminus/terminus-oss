import {
  Component,
  ViewChild,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  TestModuleMetadata,
} from '@angular/core/testing';
import { faHome } from '@fortawesome/pro-regular-svg-icons/faHome';

import { configureTestBedWithoutReset } from '@terminus/ngx-tools/testing';
import {
  TsIconModule,
  TsIconComponent,
} from '@terminus/ui-icon';

@Component({
  template: `<ts-icon id="one" #one [icon]="icon"></ts-icon>`,
})
class TestHostComponent {
  icon = faHome;

  @ViewChild('one', { static: true })
  one!: TsIconComponent;
}

describe(`TsIconComponent`, function() {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let icon1: TsIconComponent;
  const moduleDefinition: TestModuleMetadata = {
    imports: [TsIconModule],
    declarations: [TestHostComponent],
  };

  configureTestBedWithoutReset(moduleDefinition);

  beforeEach(() => {
    // Reset parent component inputs
    if (hostComponent) {
      fixture.detectChanges();
    }

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    icon1 = hostComponent.one;
  });

  test(`should exist`, () => {
    expect(icon1).toBeTruthy();
  });

  // TODO
});
