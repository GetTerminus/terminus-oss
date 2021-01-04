import { Component } from '@angular/core';

@Component({
  selector: 'triangle-story',
  styleUrls: ['./shapes-story.component.scss'],
  templateUrl: 'shapes-story.component.html',
})
export class ShapesStoryComponent {
  code1 = `.demo1 {
  .triangle {
    background-color: #fff;
    position: relative;
    width: 6em;

    &-1 {
      height: 2em;
    }

    &-2 {
      height: 64px;
    }
  }
  .item-1 {
    @include triangle(top);
    bottom: calc(100% - 1px);
    color: #f1ff34;
  }

  .item-2 {
    @include triangle(left, #f1ff34, 32px);
    right: calc(100% - 1px);
  }
}`;
}
