import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import {
  cold,
  getTestScheduler,
  hot,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  EscalationFailed,
  EscalationSuccess,
  ESCALATION_WAIT_TIME,
  RetryWithEscalation,
  SCHEDULER,
} from '@terminus/fe-jwt';

interface MockClaimMap {
  foo: {bar: number};
}

describe(`RetryWithEscalation`, function() {
  let mockStore: {dispatch: jest.MockInstance<any, any>};
  let actions: Observable<any>;
  let retryer: RetryWithEscalation;

  beforeEach(() => {
    mockStore = { dispatch: jest.fn() };

    TestBed.configureTestingModule({
      providers: [
        RetryWithEscalation,
        provideMockActions(() => actions),
        {
          provide: Store,
          useValue: mockStore,
        },
        {
          provide: SCHEDULER,
          useFactory: getTestScheduler,
        },
        {
          provide: ESCALATION_WAIT_TIME,
          useValue: 60,
        },
      ],
    });

    retryer = TestBed.inject<RetryWithEscalation>(RetryWithEscalation);
  });

  describe(`when an unhandled exception occurs`, () => {
    test(`should throw the error`, () => {
      const error = new Error('foobar');
      const stream = cold('#', {}, error).pipe(
        retryer.retryWithEscalation('foo'),
      );

      (expect(stream) as any).toBeObservable(cold('#', {}, error));
    });
  });

  describe(`when an http exception occurs`, () => {
    test(`re-throws a non 403 status code`, () => {
      actions = hot('');
      const error = new HttpErrorResponse({ status: 404 });
      const stream = cold('#', {}, error).pipe(
        retryer.retryWithEscalation('foo'),
      );

      (expect(stream) as any).toBeObservable(cold('#', {}, error));
    });

    describe(`when the initial action is valid`, () => {
      const http403Error = new HttpErrorResponse({ status: 403 });

      test(`should pass through a success`, () => {
        actions = hot('a', { a: {} });
        const stream = cold('a', { a: { foo: 'bar' } }).pipe(
          retryer.retryWithEscalation('foo'),
        );

        (expect(stream) as any).toBeObservable(cold('a', { a: { foo: 'bar' } }));
      });

      test(`should retry the observable if it succeeds`, () => {
        const err = new Error('Failed to escalate token');
        const actionStreamActions = {
          // a: {retries: 0, type: 'bar'},
          b: new EscalationSuccess<MockClaimMap>('foo'),
        };
        let errored = false;

        actions      =  hot('-----b', actionStreamActions);
        const output = cold('a-----a--b', {
          a: 1,
          b: 2,
        }, err);
        const stream = cold('a--b', {
          a: 1,
          b: 2,
        }).pipe(
          tap(n => {
            if (n === 2 && !errored) {
              errored = true;
              throw http403Error;
            }
          }),
          retryer.retryWithEscalation('foo'),
        );

        (expect(stream) as any).toBeObservable(output);
      });

      test(`should retry the observable if it succeeds but re-raise if it fails again`, () => {
        const actionStreamActions = { b: new EscalationSuccess<MockClaimMap>('foo') };
        actions      =  hot('-----b', actionStreamActions);
        const output = cold('a-----a--#', { a: 1 }, http403Error);
        const stream = cold('a--#', {
          a: 1,
          b: 2,
        }, http403Error).pipe(
          retryer.retryWithEscalation('foo'),
        );

        (expect(stream) as any).toBeObservable(output);
      });

      test(`should throw an error if the escalation fails`, () => {
        const err = new Error('Failed to escalate token');
        const actionStreamActions = {
          a: {
            retries: 0,
            type: 'bar',
          },
          b: new EscalationFailed<MockClaimMap>('foo'),
        };
        actions      =  hot('a--b', actionStreamActions);
        const output = cold('---#', { }, err);

        const stream = cold('#', {}, http403Error).pipe(
          retryer.retryWithEscalation('foo'),
        );

        (expect(stream) as any).toBeObservable(output);
      });

      test(`should automatically fail a escalation request that goes unfulfilled`, () => {
        const err = new Error('Failed to escalate token');
        actions      =  hot('-------');
        const output = cold('------#', { }, err);

        const stream = cold('#', {}, http403Error).pipe(
          retryer.retryWithEscalation('foo'),
        );

        (expect(stream) as any).toBeObservable(output);
      });
    });
  });
});
