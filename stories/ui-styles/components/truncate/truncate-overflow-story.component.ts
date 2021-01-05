import { Component } from '@angular/core';

@Component({
  selector: 'truncate-overflow-story',
  styleUrls: ['./truncate-overflow-story.component.scss'],
  templateUrl: 'truncate-overflow-story.component.html',
})
export class TruncateOverflowStoryComponent {
  code1 = `.demo1 {
  .truncate {
    @include truncate-overflow;
    width: 200px;
  }
}`;
}
