import { Component } from '@angular/core';

@Component({
  selector: 'scrollbars-story',
  styleUrls: ['./scrollbars-story.component.scss'],
  templateUrl: 'scrollbars-story.component.html',
})
export class ScrollbarsStoryComponent {
  code1 = `.demo1 {
  .container {
    @include visible-scrollbars(red);
    height: 200px;
    overflow: scroll;
    padding: 1rem;
    width: 400px;
  }
}`;
  code2 = `.demo2 {
  .container {
    @include hidden-scrollbars;
    height: 200px;
    overflow: scroll;
    padding: 1rem;
    width: 400px;
  }
}`;
}
