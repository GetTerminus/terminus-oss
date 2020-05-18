import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { TsButtonModule } from '@terminus/ui-button';
import { TsCheckboxModule } from '@terminus/ui-checkbox';
import { TsIconModule } from '@terminus/ui-icon';
import { TsLinkModule } from '@terminus/ui-link';

describe(`AppComponent`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TsCheckboxModule,
        TsLinkModule,
        TsButtonModule,
        TsIconModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  test(`should create the app`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'showcase'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('showcase');
  });

  test(`should render title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to showcase!',
    );
  });
});
