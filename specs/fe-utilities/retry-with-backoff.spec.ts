import { of } from 'rxjs';
import {
  map,
  tap,
} from 'rxjs/operators';

import { retryWithBackoff } from '@terminus/fe-utilities';

describe(`retryWithBackoff`, function() {
  test(`should retry for x retries and then throw`, done => {
    const linearBackoff = (attempt: number) => 1;
    const error = new Error('bar');
    const seenValues: {[idx: number]: number} = {};

    of(1, 2, 3).pipe(
      tap(v => {
        if (!seenValues[v]) {
          seenValues[v] = 0;
        }

        seenValues[v]++;
      }),
      map(v => {
        if (v === 2) {
          throw error;
        } else {
          return v;
        }
      }),
      retryWithBackoff({
        retries: 2,
        delayCalculator: linearBackoff,
      }),
    ).subscribe(() => {}, (err: any) => {
      expect(err).toEqual(error);
      expect(seenValues).toEqual({
        1: 2,
        2: 2,
      });
      done();
    });
  });

  test(`should retry for x retries and then throw`, done => {
    const error = new Error('bar');
    const seenValues: {[idx: number]: number} = {};

    of(1, 2, 3, 4).pipe(
      tap(v => {
        if (!seenValues[v]) {
          seenValues[v] = 0;
        }

        seenValues[v]++;
      }),
      map(v => {
        if (v === 3) {
          throw error;
        } else {
          return v;
        }
      }),
      retryWithBackoff({}),
    ).subscribe(() => {}, (err: any) => {
      expect(err).toEqual(error);
      expect(seenValues).toEqual({
        1: 3,
        2: 3,
        3: 3,
      });
      done();
    });
  });
});
