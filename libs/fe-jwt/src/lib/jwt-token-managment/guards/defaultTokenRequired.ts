import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  filter,
  map,
  tap,
  withLatestFrom,
} from 'rxjs/operators';

import { FailedToActivateRoute } from '../actions';
import {
  getDefaultToken,
  getJwtTokenRoot,
} from '../selectors';


@Injectable()
export class DefaultTokenRequired implements CanActivate {
  public currentLoadState = this.store.pipe(
    select(getJwtTokenRoot()),
    map(s => (s && s.jwtTokens.initialTokenStatus) || 'uninitialized'),
  );

  public currentToken: Observable<string> = this.store.pipe(
    select(getDefaultToken()),
    map(s => s || ''),
  );

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public store: Store<any>,
  ) {}

  public canActivate(): Observable<boolean> {
    return this.currentLoadState.pipe(
      filter(s => s !== 'uninitialized'),
      withLatestFrom(this.currentToken),
      map(([_, token]) => token.length > 0),
      tap(result => {
        if (!result) {
          this.store.dispatch(new FailedToActivateRoute());
        }
      }),
    );
  }
}
