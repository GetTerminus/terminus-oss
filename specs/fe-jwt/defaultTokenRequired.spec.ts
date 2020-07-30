import {
  async,
  TestBed,
} from '@angular/core/testing';
import { Store } from '@ngrx/store';
import {
  cold,
  hot,
} from 'jasmine-marbles';

import {
  DefaultTokenRequired,
  FailedToActivateRoute,
} from '@terminus/fe-jwt';

describe(`JWT Token Effects`, function() {
  let guard: DefaultTokenRequired;
  let mockStore: {
    pipe: jest.MockInstance<any, any>;
    dispatch: jest.MockInstance<any, any>;
  };

  beforeEach(async(() => {
    mockStore = {
      pipe: jest.fn(),
      dispatch: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        DefaultTokenRequired,
        {
          provide: Store,
          useValue: mockStore,
        },
      ],
    });

    guard = TestBed.inject<DefaultTokenRequired>(DefaultTokenRequired);
  }));

  describe(`canActivate`, () => {
    test(`should wait for the type to change from 'uninitialized'`, () => {
      const token = cold('a', { a: 'tokenA' });
      const states = hot('a-----b', {
        a: 'uninitialized',
        b: 'loaded',
      });
      const expected = cold('------b', { b: true });

      guard.currentLoadState = states;
      guard.currentToken = token;

      expect(guard.canActivate()).toBeObservable(expected);
    });

    test(`should return false if the token is empty`, () => {
      const token = cold('a', { a: '' });
      const states = hot('a-----b', {
        a: 'uninitialized',
        b: 'loaded',
      });
      const expected = cold('------b', { b: false });

      guard.currentLoadState = states;
      guard.currentToken = token;

      expect(guard.canActivate()).toBeObservable(expected);
      expect(mockStore.dispatch).toHaveBeenCalledWith(new FailedToActivateRoute());
    });
  });
});
