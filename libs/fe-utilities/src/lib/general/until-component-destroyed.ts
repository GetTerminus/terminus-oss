import {
  Observable,
  ReplaySubject,
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';


/**
 * An interface that requires ngOnDestroy
 */
export interface WithOnDestroy {
  ngOnDestroy(): void;
  componentDestroyed$?: Observable<true>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}


/**
 * Patch the component with unsubscribe behavior
 *
 * @param component - The component class (`this` context)
 * @returns An observable representing the unsubscribe event
 */
export function componentDestroyed(component: WithOnDestroy): Observable<true> {
  if (component.componentDestroyed$) {
    return component.componentDestroyed$;
  }

  // eslint-disable-next-line @angular-eslint/no-lifecycle-call
  const oldNgOnDestroy: Function | undefined = component.ngOnDestroy;
  const stop$: ReplaySubject<true> = new ReplaySubject<true>();

  // eslint-disable-next-line @angular-eslint/no-lifecycle-call
  component.ngOnDestroy = () => {
    // istanbul ignore else
    if (oldNgOnDestroy) {
      oldNgOnDestroy.apply(component);
    }

    stop$.next(true);
    stop$.complete();
  };

  component.componentDestroyed$ = stop$.asObservable();
  return component.componentDestroyed$;
}


/**
 * A pipe-able operator to unsubscribe during OnDestroy lifecycle event
 *
 * @param component - The component class (`this` context)
 * @returns The component wrapped in an Observable
 *
 * @example
 * source.pipe(untilComponentDestroyed(this)).subscribe...
 */
export const untilComponentDestroyed =
  // eslint-disable-next-line max-len
  <T>(component: WithOnDestroy): (source: Observable<T>) => Observable<T> => (source: Observable<T>) => source.pipe(takeUntil(componentDestroyed(component)));
