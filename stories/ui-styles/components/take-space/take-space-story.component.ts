import { Component } from '@angular/core';

@Component({
  selector: 'take-space-story',
  styleUrls: ['./take-space-story.component.scss'],
  templateUrl: 'take-space-story.component.html',
})
export class TakeSpaceStoryComponent {
  code1 = `.demo1 {
  .space__inner {
    @include take-space;
  }
}`;
  code2 = `.demo2 {
  .space__inner {
    @include take-space(2em);
  }
}`;
}
