import { Component } from '@angular/core';
import { faHome } from '@fortawesome/pro-regular-svg-icons/faHome';
import { faPlus } from '@fortawesome/pro-regular-svg-icons/faPlus';
import { faWrench } from '@fortawesome/pro-regular-svg-icons/faWrench';

import { TsButtonFormatTypes } from '@terminus/ui-button';
import { TsStyleThemeTypes } from '@terminus/ui-utilities';


@Component({
  selector: 'demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public addIcon = faPlus;
  public homeIcon = faHome;
  public wrenchIcon = faWrench;
  public style = 'primary';
  public disabled = false;
  public progress1 = false;
  public progress2 = false;
  public formatCollapsible = 'collapsible';
  public formats: TsButtonFormatTypes[] = ['filled', 'hollow', 'collapsible'];
  public myFormat = 'filled';
  public myTheme: TsStyleThemeTypes = 'primary';
  public themes: TsStyleThemeTypes[] = ['primary', 'accent', 'warn'];
  public layoutIsRightAligned = false;
  public get layout(): string {
    return this.layoutIsRightAligned ? 'right' : 'left';
  }

  public run(progress: string): void {
    console.log('Demo: In run!');

    if (progress === 'progress1') {
      this.progress1 = true;
    }
    if (progress === 'progress2') {
      this.progress2 = true;
    }

    setTimeout(() => {
      if (progress === 'progress1') {
        this.progress1 = false;
      }
      if (progress === 'progress2') {
        this.progress2 = false;
      }
    }, 2000);
  }
}
