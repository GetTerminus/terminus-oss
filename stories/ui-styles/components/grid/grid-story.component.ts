import { Component } from '@angular/core';

@Component({
  selector: 'grid-story',
  styleUrls: ['./grid-story.component.scss'],
  templateUrl: 'grid-story.component.html',
})
export class GridStoryComponent {
  code1 = `.demo1 {
  .container {
    @include grid-container(150px auto 150px, repeat(3, 100px));
  }

  .item {
    &:nth-child(1),
    &:nth-child(5) {
      @include grid-column(1, 4);
    }
  }
}`;
  code2 = `.demo2 {
  .container {
    @include grid-container(150px auto 150px);
  }

  .item {
    @include grid-column(1, 4);

    @include bp(layout-gt-sm) {
      @include grid-column();

      &:nth-child(1),
      &:nth-child(5) {
        @include grid-column(1, 4);
      }
    }
  }
}`;
  code3 = `.demo3 {
  .container {
    // Second column: columnWidth - outerPadding
    @include grid-container(75% calc(25% - 1rem), 10vw 30vw 10vw);
  }

  .item {
    &-1,
    &-4 {
      @include grid-column(1, span 2);
    }
  }
}`;
  code4 = `.demo4 {
  .container {
    @include grid-container(repeat(4, 1fr), 10vw 30vw 10vw);
  }

  .item {
    &-1,
    &-4 {
      @include grid-column(1, span 5);
    }
    &-2,
    &-3 {
      @include grid-column(1, span 5);
    }

    @include bp(layout-gt-sm) {
      &-2 {
        @include grid-column(1, span 3);
      }
      &-3 {
        @include grid-column(span 2);
      }
    }
  }
}`;
  code5 = `.demo5 {
  .container {
    @include grid-container(
      repeat(auto-fill, minmax(100px, 1fr)),
      minmax(50px, auto)
    );
  }

  .item {
    height: 100px;
  }
}`;
  code6 = `.demo6 {
  ul {
    @include grid-container(repeat(7, 1fr), $gap: .25em);
    margin: 0;
    max-width: 40rem;
    padding: 0;

    &.weekdays {
      color: #b5b3b3;
      margin-bottom: 1em;

      li {
        font-size: 0;
        height: 4vw;
      }

      abbr {
        &[title] {
          border: none;
          font-size: 0;
          font-weight: 800;
          text-decoration: none;
        }

        &::after {
          content: attr(title);
          font-size: 14px;
          text-align: center;
        }
      }
    }

    &.day-grid {
      li {
        @include responsive-ratio(1, 1);
        background-color: rgba(#fff, .5);
        border: 1px solid rgba(#fff, .8);
        border-radius: 4px;
        position: relative;

        &::after {
          @include take-space;
          @include flex-container(row, nowrap, center, center);
          content: attr(data-day);
        }

        &.month-prev,
        &.month-next {
          background-color: rgba(#fff, .3);
          color: rgba(#fff, .5);
        }
      }
    }
  }

  li {
    @include flex-container(row, nowrap, center, center);
    list-style: none;
    margin-left: 0;
  }

  @include bp(layout-gt-sm) {
    ul {
      @include grid-container(repeat(7, 1fr));

      &.weekdays {
        li {
          font-size: inherit;
        }

        abbr {
          &[title] {
            font-size: 14px;
          }

          &::after {
            display: none;
          }
        }
      }
    }
  }
}`;
  code7 = `.demo7 {
  .container {
    @include grid-container(repeat(5, 6vw), repeat(5, 6vw));
    align-content: center;
    justify-content: center;
  }

  $boxPositions: (
    (1, 1), (1, 2), (1, 3), (1, 4),
    (1, 5), (2, 5), (3, 5), (4, 5),
    (5, 5), (5, 4), (5, 3), (5, 2),
    (5, 1), (4, 1), (3, 1), (2, 1)
  );

  .item {
    @for $i from 1 through length($boxPositions) {
      &-#{$i} {
        $innerList: nth($boxPositions, $i);
        grid-column: nth($innerList, 2);
        grid-row: nth($innerList, 1);
      }
    }
  }
}`;
}
