import { Component } from '@angular/core';

@Component({
  selector: 'responsive-ratio-story',
  styleUrls: ['./responsive-ratio-story.component.scss'],
  templateUrl: 'responsive-ratio-story.component.html',
})
export class ResponsiveRatioStoryComponent {
  code1 = `.demo1 {
  .ratio {
    @include responsive-ratio(16, 9);
  }
}`;
  code2 = `.demo2 {
  .ratio {
    @include responsive-ratio(1, 1);
  }
}`;
  code3 = `.demo3 {
  .ratio {
    @include responsive-ratio(
      4,
      3,
      false,
      'https://via.placeholder.com/350x65'
    );
  }
}`;
}
