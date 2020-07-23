import { Component } from '@angular/core';
import { faBacteria } from '@fortawesome/pro-regular-svg-icons/faBacteria';
import { faPortalEnter } from '@fortawesome/pro-regular-svg-icons/faPortalEnter';
import { faPortalExit } from '@fortawesome/pro-regular-svg-icons/faPortalExit';
import { faRocketLaunch } from '@fortawesome/pro-regular-svg-icons/faRocketLaunch';


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
