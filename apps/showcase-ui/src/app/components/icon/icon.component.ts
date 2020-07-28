import { Component } from '@angular/core';
import { faAmericanSignLanguageInterpreting } from '@fortawesome/pro-solid-svg-icons/faAmericanSignLanguageInterpreting';
import { faCoffee } from '@fortawesome/pro-solid-svg-icons/faCoffee';
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome';
import { faHorseSaddle } from '@fortawesome/pro-solid-svg-icons/faHorseSaddle';
import { faPlusSquare } from '@fortawesome/pro-solid-svg-icons/faPlusSquare';

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
