import { Observable,  Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * An interface that requires ngOnDestroy
 */
export interface WithOnDestroy {
  ngOnDestroy?(): void;
  componentDestroy?: () => Observable<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}


/**
 * Decorator
 * Patch the component with unsubscribe behavior
 *
 * @param constructor - The component class constructor
 */
export function WithDestroy(constructor: Function): void {
  // eslint-disable-next-line @angular-eslint/no-lifecycle-call
  const originalDestroy = constructor.prototype.ngOnDestroy;

  constructor.prototype.componentDestroy = function() {
    this._destroy$ = this._destroy$ || new Subject<void>();
    return this._destroy$.asObservable();
  };

  // eslint-disable-next-line @angular-eslint/no-lifecycle-call
  constructor.prototype.ngOnDestroy = function() {
    if (typeof originalDestroy === 'function') {
      originalDestroy.apply(this);
    }

    if (this._destroy$) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  };
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
export function untilComponentDestroyed<C, T>(component: C & WithOnDestroy): (source: Observable<T>) => Observable<T> {
  if (typeof component.componentDestroy !== 'function') {
    throw Error('@WithDestroy decorator is not used');
  }

  return (source: Observable<T>): Observable<T> => source.pipe(takeUntil(component.componentDestroy()));
}
