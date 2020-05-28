import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { TypographyComponent } from './typography.component';

import { TokensService } from '../../services/tokens.service';

export class TokensServiceMock {
  tokens$ = new BehaviorSubject<Record<string, any>>({
    stack: { base: {} },
    typography: { size: {} },
  });
}

describe(`TypographyComponent`, () => {
  let component: TypographyComponent;
  let fixture: ComponentFixture<TypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypographyComponent],
      providers: [
        {
          provide: TokensService,
          useClass: TokensServiceMock,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test(`should exist`, () => {
    expect(component).toBeTruthy();
  });
});
