import { APP_BASE_HREF } from '@angular/common';
import {
  TestBed,
  async,
} from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { TsButtonModule } from '@terminus/ui-button';
import { TsCardModule } from '@terminus/ui-card';
import { TsSpacingModule } from '@terminus/ui-spacing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        TsCardModule,
        TsSpacingModule,
        TsButtonModule,
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
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'Visual Regression'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Visual Regression');
  });
});
