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
  OnInit,
  Optional,
  Renderer2,
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
export class TsDragHandleDirective extends CdkDragHandle implements OnInit {
  constructor(
    public element: ElementRef<HTMLElement>,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(CDK_DRAG_PARENT) @Optional() @SkipSelf() parentDrag?: any,
  ) {
    super(element, parentDrag);
  }

  @HostBinding('style.display')
  public display = 'flex';

  @HostBinding('style.justify-content')
  public justifyContent = 'space-between';

  public ngOnInit(): void {
    this.appendGripLines();
  }

  private appendGripLines(): void {
    const gripLines = this.renderer.createElement('span');
    gripLines.classList.add('fas');
    gripLines.classList.add('fa-grip-lines');
    this.renderer.appendChild(this.elementRef.nativeElement, gripLines);
  }
}
