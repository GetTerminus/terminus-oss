import { Component } from '@angular/core';

@Component({
  selector: 'placeholder-story',
  styleUrls: ['./placeholder-story.component.scss'],
  templateUrl: 'placeholder-story.component.html',
})
export class PlaceholderStoryComponent {
  code1 = `.demo1 {
  input {
    @include input-placeholder {
      color: #f00;
    }
  }
}`;
}
