import {
  Observable,
  of,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';


/**
 * Regenerate on retry
 *
 * @param obs
 * @returns Observable
 */
export const regenerateOnRetry = <T>(obs: (() => Observable<T>)): Observable<T> => of(true).pipe(
  switchMap(() => obs()),
);

