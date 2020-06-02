import { APP_BASE_HREF } from '@angular/common';
import {
  TestBed,
  async,
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TsButtonModule } from '@terminus/ui-button';
import { TsCheckboxModule } from '@terminus/ui-checkbox';
import { TsIconModule } from '@terminus/ui-icon';
import { TsInputModule } from '@terminus/ui-input';
import { TsLinkModule } from '@terminus/ui-link';

import { AppComponent } from './app.component';

describe(`AppComponent`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        TsCheckboxModule,
        TsLinkModule,
        TsButtonModule,
        TsIconModule,
        TsInputModule,
      ],
      declarations: [AppComponent],
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/',
      }],
    }).compileComponents();
  }));

  test(`should exist`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
