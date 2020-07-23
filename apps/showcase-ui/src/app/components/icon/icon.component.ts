import { Component } from '@angular/core';
import { faAmericanSignLanguageInterpreting } from '@fortawesome/pro-regular-svg-icons/faAmericanSignLanguageInterpreting';
import { faCoffee } from '@fortawesome/pro-regular-svg-icons/faCoffee';
import { faHome } from '@fortawesome/pro-regular-svg-icons/faHome';
import { faHorseSaddle } from '@fortawesome/pro-regular-svg-icons/faHorseSaddle';
import { faPlusSquare } from '@fortawesome/pro-regular-svg-icons/faPlusSquare';

@Component({
  selector: 'demo-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  coffee = faCoffee;
  home = faHome;
  queue = faPlusSquare;
  horse = faHorseSaddle;
  signs = faAmericanSignLanguageInterpreting;
}
