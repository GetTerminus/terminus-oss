import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  interval,
  Subscription,
} from 'rxjs';

import { untilComponentDestroyed } from '@terminus/fe-utilities';

@Component({ template: `` })
class TestHostComponent implements OnDestroy, OnInit {
  public stub = jest.fn();
  public myInterval!: Subscription;

  public ngOnInit() {
    this.myInterval = interval(200).pipe(untilComponentDestroyed(this)).subscribe((v: number) => {
      this.stub(v);
    });
  }

  public ngOnDestroy() {}
}

@Component({ template: `` })
class TestHostDoubleComponent implements OnDestroy, OnInit {
  public stub1 = jest.fn();
  public stub2 = jest.fn();
  public myInterval!: Subscription;
  public mySecondInterval!: Subscription;

  public ngOnInit() {
    this.myInterval = interval(200).pipe(untilComponentDestroyed(this)).subscribe((v: number) => {
      this.stub1(v);
    });
    this.mySecondInterval = interval(200).pipe(untilComponentDestroyed(this)).subscribe((v: number) => {
      this.stub2(v);
    });
  }

  public ngOnDestroy() {}
}

describe(`untilComponentDestroyed`, function() {
  test(`should cancel an observable stream during the destroy cycle`, () => {
    const testComponent: TestHostComponent = new TestHostComponent();
    jest.useFakeTimers();

    testComponent.ngOnInit();
    jest.advanceTimersByTime(610);

    testComponent.ngOnDestroy();
    jest.advanceTimersByTime(1000);

    expect(testComponent.stub).toHaveBeenCalledTimes(3);

    setTimeout(() => {
      testComponent.ngOnDestroy();
    }, 2000);

    setTimeout(() => {
      expect(testComponent.stub).toHaveBeenCalledTimes(3);
    }, 5000);
  });

  test(`should cancel an observable stream during the destroy cycle`, () => {
    const testComponent: TestHostDoubleComponent = new TestHostDoubleComponent();
    jest.useFakeTimers();

    testComponent.ngOnInit();
    jest.advanceTimersByTime(610);

    testComponent.ngOnDestroy();
    jest.advanceTimersByTime(1000);

    expect(testComponent.stub1).toHaveBeenCalledTimes(3);
    expect(testComponent.stub2).toHaveBeenCalledTimes(3);

    setTimeout(() => {
      testComponent.ngOnDestroy();
    }, 2000);

    setTimeout(() => {
      expect(testComponent.stub1).toHaveBeenCalledTimes(3);
      expect(testComponent.stub2).toHaveBeenCalledTimes(3);
    }, 5000);
  });
});
