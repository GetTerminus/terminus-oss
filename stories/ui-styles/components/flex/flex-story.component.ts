import { Component } from '@angular/core';

@Component({
  selector: 'flex-story',
  styleUrls: ['./flex-story.component.scss'],
  templateUrl: 'flex-story.component.html',
})
export class FlexStoryComponent {
  code1 = `.demo1 {
  .container {
    @include flex-container;
  }

  .item {
    @include flex-item(1);

    + .item {
      margin-left: 2%;
    }
  }
}`;
  code2 = `.demo2 {
  .container {
    @include flex-container;
  }

  .item {
    width: 100px;

    + .item {
      margin-left: 2%;
    }

    &.center {
      @include flex-item(1);
    }
  }
}`;
  code3 = `.demo3 {
  .container {
    @include flex-container(row, wrap, space-between);
    padding-bottom: 0;
  }

  .item {
    margin-bottom: 2%;
    margin-left: 0;
    width: 48%;

    &:nth-child(3n) {
      width: 100%;
    }
  }
}`;
  code4 = `.demo4 {
  .container {
    @include flex-container(row, wrap, space-between);
    padding-bottom: 0;
  }

  .item {
    @include flex-item(0, 1, 32%);
    margin-bottom: 2%;
  }
}`;
  code5 = `.demo5 {
  .container {
    @include flex-container($mainAxis: space-between, $crossAxis: flex-end);
    height: 300px;
  }

  .item {
    width: 14%;

    $heights: ('1': '40%', '2': '50%', '3': '60%', '4': '20%', '5': '30%');
    @each $number, $height in $heights {
      &-#{$number} {
        height: #{$height};
      }
    }
  }
}`;
  code6 = `.demo6 {
  .container {
    @include flex-container($direction: column, $mainAxis: space-between);
    height: 300px;
  }

  .item {
    height: 14%;

    $widths: ('1': '40%', '2': '50%', '3': '60%', '4': '20%', '5': '30%');
    @each $number, $width in $widths {
      &-#{$number} {
        width: #{$width};
      }
    }
  }
}`;
  code7 = `.demo7 {
  .container {
    @include flex-container($direction: column, $crossAxis: center);
  }

  .item {
    height: 40px;
    margin-bottom: 10px;
    width: 40%;
  }
}`;
  code8 = `.demo8 {
  .container {
    @include flex-container(column, wrap, $crossAxis: space-between);
    height: 630px;
    padding: 1rem;

    &::before,
    &::after {
      content: '';
      flex-basis: 100%;
      opacity: .2;
      order: 2;
      width: 0;
    }
  }

  .item {
    margin-bottom: 2%;
    width: 32%;

    &:nth-child(3n+1) {
      order: 1;
    }
    &:nth-child(3n+2) {
      order: 2;
    }
    &:nth-child(3n) {
      order: 3;
    }

    $heights: (
      '1': '200px',
      '2': '250px',
      '3': '225px',
      '4': '100px',
      '5': '100px',
      '6': '125px',
      '7': '100px',
      '8': '75px',
      '9': '100px',
      '10': '100px'
    );
    @each $number, $height in $heights {
      &-#{$number} {
        height: #{$height};
      }
    }
  }
}`;
}
