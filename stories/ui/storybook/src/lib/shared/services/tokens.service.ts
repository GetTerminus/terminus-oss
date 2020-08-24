import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as TOKENS_TREE from '@terminus/design-tokens/js/design-tokens-tree';

@Injectable({ providedIn: 'root' })
export class TokensService {
  public tokens$ = new BehaviorSubject<Record<string, any>|null>(null);

  constructor() {
    this.updateTokens();
  }

  /**
   * Update the tokens stream with the latest tokens
   */
  public updateTokens(): void {
    this.tokens$.next(TOKENS_TREE);
  }
}
