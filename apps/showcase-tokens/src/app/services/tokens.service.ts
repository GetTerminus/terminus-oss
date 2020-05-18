import { Injectable } from '@angular/core';
import TOKENS_TREE from '@terminus/design-tokens/js/design-tokens-tree';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TokensService {
  public tokens$ = new BehaviorSubject<Record<string, any>|null>(null);

  constructor() { }

  /**
   * Update the tokens stream with the latest tokens
   */
  public updateTokens(): void {
    this.tokens$.next(TOKENS_TREE);
  }
}
