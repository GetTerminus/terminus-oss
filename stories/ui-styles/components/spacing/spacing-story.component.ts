import { Component } from '@angular/core';

@Component({
  selector: 'spacing-story',
  styleUrls: ['./spacing-story.component.scss'],
  templateUrl: 'spacing-story.component.html',
})
export class SpacingStoryComponent {
  code1 = `.demo1 {
  .box {
    margin-bottom: spacing(large, 0);
    outline: 1px solid #add8e6;

    // Create classes to demonstrate all spacing options
    @each $type, $sizes in $g-spacings {
      @each $size, $space in $sizes {
        &--#{$type}--#{$size} {
          @if $space {
            padding: spacing($type, $size);
          } @else {
            padding: spacing($type);
          }
        }
      }
    }
  }
}`;
}
