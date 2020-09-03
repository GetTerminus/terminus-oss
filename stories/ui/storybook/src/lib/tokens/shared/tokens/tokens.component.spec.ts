import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { GrabComponent } from '../grab/grab.component';
import { ColorFormatPipe } from '../pipes/color-format.pipe';
import { TokensComponent } from './tokens.component';

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
