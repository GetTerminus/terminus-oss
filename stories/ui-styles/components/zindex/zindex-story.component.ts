import { Component } from '@angular/core';

@Component({
  selector: 'zindex-story',
  styleUrls: ['./zindex-story.component.scss'],
  templateUrl: 'zindex-story.component.html',
})
export class ZindexStoryComponent {
  code1 = `.demo1 {
  .box {
    height: 100px;
    left: 50px;
    padding: .5em;
    position: absolute;
    top: 50px;
    width: 200px;
  }

  .one {
    z-index: z(menu-trigger);
  }

  .two {
    transform: translate(50px, 50px);
    z-index: z(attached-panel-overlay);
  }

  .three {
    transform: translate(100px, 100px);
    z-index: z(drawer);
  }
}`;
}
