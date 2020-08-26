import {
  Component,
  Input,
} from '@angular/core';
import {
  boolean,
  withKnobs,
} from '@storybook/addon-knobs';

import { TsLoadingOverlayModule } from '@terminus/ui-loading-overlay';

const MODULE_METADATA = {
  imports: [
    TsLoadingOverlayModule,
  ],
};

export default {
  title: 'Components/Feedback/Loading Overlay',
  decorators: [withKnobs],
};

@Component({
  selector: 'ts-loading-overlay-wrapper',
  styles: [
    `
      :host {
        display: block;
      }
      .wrapper {
        outline: 2px solid #b55949;
        display: block;
        padding: 2rem;
      }
    `,
  ],
  template: `
    <div class="wrapper" [tsLoadingOverlay]="isLoading">
      <p>Dolore aperiam maiores totam sit facere. Pariatur nostrum totam laboriosam ex deleniti necessitatibus. Nihil et laudantium aliquid
        ipsum.</p>
      <p>Debitis sed minima consequatur earum voluptatum. Tempore repudiandae rem molestias veritatis. Nisi perspiciatis aspernatur at
        consequuntur fuga aperiam.</p>
      <p>Animi voluptatem provident ipsum distinctio alias. Qui doloribus pariatur. Quae accusamus cumque sequi commodi odio eaque.</p>
      <p>Dolorum sint aliquam sapiente commodi tenetur. Sint earum ex id numquam aliquam molestias. Rem reprehenderit maiores.</p>
    </div>
  `,
})
class LoadingOverlayWrapper {
  @Input() public isLoading: boolean;
}

export const basic = () => ({
  component: LoadingOverlayWrapper,
  moduleMetadata: MODULE_METADATA,
  props: {
    isLoading: boolean('Loading', true),
  },
});
basic.parameters = {
  actions: { disabled: true },
};
