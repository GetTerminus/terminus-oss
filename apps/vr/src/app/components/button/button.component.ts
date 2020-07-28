import { Component } from '@angular/core';
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';
import { faPlus } from '@fortawesome/pro-solid-svg-icons/faPlus';
import { faWrench } from '@fortawesome/pro-solid-svg-icons/faWrench';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  public title = 'Visual Regression';
  public progress = false;
  public iconPlus = faPlus;
  public iconWrench = faWrench;
  public iconHome = faHome;

  public run(): void {
    this.progress = true;
  }
}
