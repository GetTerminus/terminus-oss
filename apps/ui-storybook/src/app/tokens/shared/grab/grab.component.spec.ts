import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { GrabComponent } from './grab.component';

describe(`GrabComponent`, () => {
  let component: GrabComponent;
  let fixture: ComponentFixture<GrabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [GrabComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test(`should exist`, () => {
    expect(component).toBeTruthy();
  });
});
