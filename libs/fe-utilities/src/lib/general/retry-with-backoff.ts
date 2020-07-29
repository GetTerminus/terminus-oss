import {
  MonoTypeOperatorFunction,
  range,
  throwError,
  timer,
  zip,
} from 'rxjs';
import {
  mergeMap,
  retryWhen,
} from 'rxjs/operators';

import { exponentialBackoffDelayCalculator } from './delay-calculator';


/**
 * The options object that can be passed to `retryWithBackoff`
 */
export interface RetryWithBackoff {
  retries: number;
  delayCalculator: (attempt: number) => number;
}

const DEFAULT_RETRY_COUNT = 3;


/**
 * Return the difference in time in words
 *
 * @param options - The options object
 * - `retries`: How many times it should retry before throwing an error
 * - `delayCalculator`: The calculator to determine the delay timing
 * @param options.retries
 * @param options.delayCalculator
 * @returns The observable timer
 * @example
 * return this.exampleDatabase.getSomething()
 * .pipe(
 * map((res: MyResponse) => {
 * if (res) {
 * return res;
 * } else {
 * return null;
 * }
 * }),
 * retryWithBackoff({}), // Using default options
 * )
 * ;
 */
export const retryWithBackoff = <T>({
  retries = DEFAULT_RETRY_COUNT,
  delayCalculator = exponentialBackoffDelayCalculator({}),
}: Partial<RetryWithBackoff>): MonoTypeOperatorFunction<T> => retryWhen(errors => zip(
    errors,
    range(1, retries),
  )
    .pipe(
      mergeMap(([err, retry]) => {
        if (retry >= retries) {
          return throwError(err);
        }
        return timer(delayCalculator(retry));
      }),
    ));
