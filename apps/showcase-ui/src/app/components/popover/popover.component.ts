import {
  Component,
  ElementRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  TsPopoverPosition,
  TsTrigger,
} from '@terminus/ui-popover';


@Component({
  selector: 'demo-popover',
  templateUrl: './popover.component.html',
})
export class PopoverComponent {
  public myform = new FormControl('bottom');
  public positions = ['bottom', 'top', 'left', 'right'];
  public myId = 'custom-id';
  public select1: TsPopoverPosition = 'right';
  public select2: TsTrigger = 'click';
  public triggerSelect: TsTrigger = 'click';
  public popoverOnShown(event) {
    console.log('popper on shown emitted event: ', event);
  }
  public popoverOnHidden(event) {
    console.log('popover on hidden emitted event: ', event);
  }

  constructor(private elem: ElementRef) {
  }

  public change() {
    setTimeout(() => {
      this.elem.nativeElement.querySelector('.ts-popover-trigger').dispatchEvent(new Event(this.triggerSelect));
    }, 100);
  }
}
