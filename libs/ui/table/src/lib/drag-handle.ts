import {
  CdkDragHandle,
  CDK_DRAG_HANDLE,
  CDK_DRAG_PARENT,
} from '@angular/cdk/drag-drop';
import {
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  Optional,
  SkipSelf,
} from '@angular/core';

/**
 * Drag handle for the {@link TsTableComponent}.
 *
 * Renders markup and
 */
 @Directive({
   selector: '[tsDragHandle]',
   host: {
     class: 'ts-drag-handle',
   },
   providers: [{
     provide: CDK_DRAG_HANDLE,
     useExisting: TsDragHandleDirective,
   }],
 })
export class TsDragHandleDirective extends CdkDragHandle {
  constructor(
    public element: ElementRef<HTMLElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(CDK_DRAG_PARENT) @Optional() @SkipSelf() parentDrag?: any,
  ) {
    super(element, parentDrag);
  }

  @HostBinding('style.cursor')
  public readonly cursor = 'grab';
}
