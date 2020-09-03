import {
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

const DEFAULT_DELAY_MS = 2000;

@Component({
  selector: 'tsdt-grab',
  templateUrl: './grab.component.html',
  styleUrls: ['./grab.component.scss'],
})
export class GrabComponent {
  /**
   * Define if the item has been recently copied
   */
  public hasBeenCopied = false;

  /**
   * Define a reference to the input element
   */
  @ViewChild('inputTarget', { static: true })
  public inputElement: ElementRef;

  /**
   * Define the value to display and copy
   */
  @Input()
  public value = '';

  /**
   * Toggle the copied flag on copy success
   */
  public copySuccess(): void {
    this.hasBeenCopied = true;
    setTimeout(() => {
      this.hasBeenCopied = false;
    }, DEFAULT_DELAY_MS);
  }

  /**
   * Select the input content after a tick
   */
  public selectInputContent(): void {
    // NOTE: Needs to happen after the next tick so that the copy plugin can first move focus
    Promise.resolve().then(() => {
      this.inputElement.nativeElement.select();
    });
  }

  /**
   * Focus the HTML input
   */
  public focusInput(): void {
    this.inputElement.nativeElement.focus({ preventScroll: true });
  }

  /**
   * Focus the input element and select it's contents
   */
  public selectInputContentAndFocus(): void {
    this.focusInput();
    this.selectInputContent();
  }
}
