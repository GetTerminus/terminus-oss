import { Component } from '@angular/core';
import { faBacteria } from '@fortawesome/pro-solid-svg-icons/faBacteria';
import { faPortalEnter } from '@fortawesome/pro-solid-svg-icons/faPortalEnter';
import { faPortalExit } from '@fortawesome/pro-solid-svg-icons/faPortalExit';
import { faRocketLaunch } from '@fortawesome/pro-solid-svg-icons/faRocketLaunch';


@Component({
  selector: 'demo-icon-button',
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  iconBacteria = faBacteria;
  iconPortalEnter = faPortalEnter;
  iconPortalExit = faPortalExit;
  iconRocketLaunch = faRocketLaunch;

  clickTheme(v: string): void {
    console.log(`DEMO: '${v}' icon-button clicked.`);
  }

}
