import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TsOptionModule } from '@terminus/ui-option';
import { TsSelectionListModule } from '@terminus/ui-selection-list';

import { ComponentsComponent } from './components.component';

describe(`ComponentsComponent`, () => {
  let component: ComponentsComponent;
  let fixture: ComponentFixture<ComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        TsSelectionListModule,
        TsOptionModule,
      ],
      declarations: [ComponentsComponent],
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/',
      }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test(`should exist`, () => {
    expect(component).toBeTruthy();
  });
});
