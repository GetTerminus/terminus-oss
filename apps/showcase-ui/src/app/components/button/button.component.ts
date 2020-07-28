import { Component } from '@angular/core';
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';
import { faPlus } from '@fortawesome/pro-solid-svg-icons/faPlus';
import { faWrench } from '@fortawesome/pro-solid-svg-icons/faWrench';

import {
  TsButtonFormatTypes,
  tsButtonThemes,
  TsButtonThemeTypes,
} from '@terminus/ui-button';


@Component({
  selector: 'demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public addIcon = faPlus;
  public homeIcon = faHome;
  public wrenchIcon = faWrench;
  public disabled = false;
  public progress1 = false;
  public progress2 = false;
  public formatCollapsible: TsButtonFormatTypes = 'collapsible';
  public myTheme: TsButtonThemeTypes = 'default';
  public themes: TsButtonThemeTypes[] = tsButtonThemes.slice();
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
