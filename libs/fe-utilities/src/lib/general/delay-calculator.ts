/**
 * The allowed options object for `exponentialBackoffDelayCalculator`
 */
export interface DelayCalculator {
  jitter: boolean;
  jitterFactor: number;
  backOffFactor: number;
  baseWaitTime: number;
}

const DEFAULT_JITTER_FACTOR = .3;
const DEFAULT_BACK_OFF_TIME = 2;
const DEFAULT_BASE_WAIT_TIME = 100;


/**
 * Calculate retry timing
 *
 * `jitter`: "Slight irregular movement, variation, or unsteadiness,
 * especially in an electrical signal or electronic device"
 *
 * @param options - The options object
 * - `jitter`: If the duration should be affected by a jitter effect
 * - `jitterFactor`: How widely the jitter effect should vary
 * - `backOffFactor`: How quickly the duration should back off
 * - `baseWaitTime`: The base time when determining sleep duration
 * @param options.jitter
 * @param options.jitterFactor
 * @param options.backOffFactor
 * @param options.baseWaitTime
 * @returns The duration to sleep
 * @example
 * const calcOpts: DelayCalculator = {
 * jitter: true,
 * jitterFactor: .3,
 * backOffFactor: 2,
 * baseWaitTime: 100,
 * }
 * // Create a retrier with a custom backoff
 * retryWithBackoff({retries: 3, delayCalculator: exponentialBackoffDelayCalculator(calcOpts)})
 */
export const exponentialBackoffDelayCalculator = ({
  jitter = true,
  jitterFactor = DEFAULT_JITTER_FACTOR,
  backOffFactor = DEFAULT_BACK_OFF_TIME,
  baseWaitTime = DEFAULT_BASE_WAIT_TIME,
}: Partial<DelayCalculator>) => function(attempt: number) {
  let sleepDuration = baseWaitTime * Math.pow(backOffFactor, attempt);

  if (jitter) {
    sleepDuration *= (1 - (jitterFactor * Math.random()));
  }

  return sleepDuration;
};
