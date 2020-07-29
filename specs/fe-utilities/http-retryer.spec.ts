import {
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {
  cold,
  getTestScheduler,
  time,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';
import {
  map,
  tap,
} from 'rxjs/operators';

import { httpRetryer } from '@terminus/fe-utilities';

describe(`httpRetryer`, function() {
  const caughtError = new HttpErrorResponse({ status: 503 });
  let source: Observable<number>;
  let seenValues: number[];
  let errorAfter: (v: number, e: HttpErrorResponse, n?: number) => Observable<number>;

  beforeEach(() => {
    seenValues = [];

    source = cold('abcd', {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    }).pipe(
      tap(i => seenValues.push(i)),
    );

    errorAfter = (value: number, err: HttpErrorResponse | Error, numberOfThrows = 99999) => {
      let timesThrown = 0;

      return source.pipe(
        map(i => {
          if (i === 3 && timesThrown < numberOfThrows) {
            timesThrown += 1;
            throw err;
          }
          return i;
        }),
      );
    };
  });

  test(`should re-throw non http errors`, () => {
    const error = new Error('bar');

    (expect(cold('#', {}, error).pipe(httpRetryer({}))) as any).toBeObservable(cold('#', {}, error));
  });

  test(`should re-throw HTTP errors not considered (404 for example)`, () => {
    const uncaughtError = new HttpErrorResponse({ status: 404 });

    (expect(cold('#', {}, uncaughtError).pipe(httpRetryer({}))) as any).toBeObservable(cold('#', {}, uncaughtError));
  });

  test(`should retry connection errors`, () => {
    const retryErrorWithMsDelay = new HttpErrorResponse({ status: 0 });

    (expect(
      errorAfter(3, retryErrorWithMsDelay, 1).pipe(
        httpRetryer({
          delayCalculator: i => i * 10,
          scheduler: getTestScheduler(),
        }),
      ),
    ) as any).toBeObservable(
      cold('ab-abcd', {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      }),
    );
  });

  describe(`when receiving a 429`, () => {
    test(`should default to backoffStrategy when no header is present`, () => {
      const retryErrorWithMsDelay = new HttpErrorResponse({ status: 429 });

      (expect(
        errorAfter(3, retryErrorWithMsDelay, 2).pipe(
          httpRetryer({
            delayCalculator: i => i * 10,
            scheduler: getTestScheduler(),
          }),
        ),
      ) as any).toBeObservable(
        cold('ab-ab--abcd', {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
        }),
      );
    });

    test(`should handle a delay with a specific retry ms time`, () => {
      const retryErrorWithMsDelay = new HttpErrorResponse({
        status: 429,
        headers: new HttpHeaders({ 'Retry-After': '40' }),
      });

      (expect(
        errorAfter(3, retryErrorWithMsDelay, 1).pipe(
          httpRetryer({
            delayCalculator: i => i * 10,
            scheduler: getTestScheduler(),
          }),
        ),
      ) as any).toBeObservable(
        cold('ab----abcd', {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
        }),
      );
    });

    test(`should handle a delay with a specific retry date time`, () => {
      const waitTime = time(`${'-'.repeat(100)  }|`);
      const emissionTime = new Date(getTestScheduler().now() + waitTime);

      const retryErrorWithSpecificDelay = new HttpErrorResponse({
        status: 429,
        headers: new HttpHeaders({ 'Retry-After': emissionTime.toString() }),
      });

      getTestScheduler().maxFrames = 1500;

      (expect(
        errorAfter(3, retryErrorWithSpecificDelay, 1).pipe(
          httpRetryer({ scheduler: getTestScheduler() }),
        ),
      ) as any).toBeObservable(
        // Note the '- 2' account for the time it takes to get to the first error
        cold(`ab${  '-'.repeat(100 - 2)  }abcd`, {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
        }),
      );
    });
  });

  describe(`when receiving a recoverable error`, () => {
    test(`should handle a delay and retry with backoff and reraise if not fixed`, () => {
      (expect(
        errorAfter(3, caughtError).pipe(
          httpRetryer({
            delayCalculator: i => i * 10,
            scheduler: getTestScheduler(),
          }),
        ),
      ) as any).toBeObservable(
        cold('ab-ab--ab#', {
          a: 1,
          b: 2,
        }, caughtError),
      );
    });

    test(`should retry a configurable number of times`, () => {
      (expect(
        errorAfter(3, caughtError).pipe(
          httpRetryer({
            retries: 1,
            delayCalculator: i => i * 10,
            scheduler: getTestScheduler(),
          }),
        ),
      ) as any).toBeObservable(
        cold('ab-ab#', {
          a: 1,
          b: 2,
        }, caughtError),
      );
    });

    test(`should succeed after errors stop occurring`, () => {
      (expect(
        errorAfter(3, caughtError, 2).pipe(
          httpRetryer({
            delayCalculator: i => i * 10,
            scheduler: getTestScheduler(),
          }),
        ),
      ) as any).toBeObservable(
        cold('ab-ab--abcd', {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
        }),
      );
    });
  });
});
