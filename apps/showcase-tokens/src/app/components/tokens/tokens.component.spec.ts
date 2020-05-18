import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GrabComponent } from '../grab/grab.component';
import { ClipboardModule } from 'ngx-clipboard';

import { TokensComponent } from './tokens.component';

import { ColorFormatPipe } from '../../pipes/color-format.pipe';

describe(`TokensComponent`, () => {
  let component: TokensComponent;
  let fixture: ComponentFixture<TokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ClipboardModule,
      ],
      declarations: [
        ColorFormatPipe,
        GrabComponent,
        TokensComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test(`should exist`, () => {
    expect(component).toBeTruthy();
  });
});
