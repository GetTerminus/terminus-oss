import { Component } from '@angular/core';

@Component({
  selector: 'breakpoints-story',
  styleUrls: ['./breakpoints-story.component.scss'],
  templateUrl: 'breakpoints-story.component.html',
})
export class BreakpointsStoryComponent {
  code1 = `.demo1 {
  .item {
    @each $break in $breakpoints {
      &--#{$break} {
        @include bp($break) {
          background-color: rgba(#fff, .5);

          &::before {
            color: #fff;
            content: '\\279C';
            display: block;
            opacity: .5;
            position: absolute;
            right: calc(100% + 6px);
            top: 50%;
            transform: translateY(-50%);
          }
        };
      }
    }
  }
}`;
}
