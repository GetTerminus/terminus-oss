import { APP_BASE_HREF } from '@angular/common';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  Injectable,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import TOKENS_TREE from '@terminus/design-tokens/js/design-tokens-tree';
import { BehaviorSubject } from 'rxjs';
import { TokensService } from '../../services/tokens.service';

import { ColorComponent } from './color.component';

export class TokensServiceMock {
  tokens$ = new BehaviorSubject<Record<string, any>>({ color: { base: {} } });
}

describe(`ColorComponent`, () => {
  let component: ColorComponent;
  let fixture: ComponentFixture<ColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [ColorComponent],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
        {
          provide: TokensService,
          useClass: TokensServiceMock,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    global['TOKENS_TREE'] = TOKENS_TREE;
    fixture = TestBed.createComponent(ColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test(`should exist`, () => {
    expect(component).toBeTruthy();
  });
});
