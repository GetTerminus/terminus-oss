import { Component } from '@angular/core';

@Component({
  selector: 'visually-hidden-story',
  styleUrls: ['./visually-hidden-story.component.scss'],
  templateUrl: 'visually-hidden-story.component.html',
})
export class VisuallyHiddenStoryComponent {
  code1 = `.demo1 {
  .hidden {
    @include visually-hidden;
  }
}`;
  code2 = `Class 'u-visually-hidden' added: `;
}
