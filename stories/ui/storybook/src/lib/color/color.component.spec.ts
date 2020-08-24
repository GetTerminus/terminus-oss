import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import * as TOKENS_TREE from '@terminus/design-tokens/js/design-tokens-tree';

import { TokensService } from '../shared/services/tokens.service';
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
