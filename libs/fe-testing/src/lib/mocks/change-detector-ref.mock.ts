import { Injectable } from '@angular/core';

import { noop } from '@terminus/fe-utilities';

/**
 * A mock of the Angular ChangeDetectorRefMock class
 */
@Injectable()
export class ChangeDetectorRefMock {
  public markForCheck = noop;
  public detach = noop;
  public detectChanges = noop;
  public checkNoChanges = noop;
  public reattach = noop;
}
