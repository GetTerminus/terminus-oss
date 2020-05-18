import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'terminus-oss-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'showcase';
  checkboxModel = true;
  checkboxCtrl = new FormControl(true);
  change(e) {
    console.log('checkbox change: ', e);
  }
}
