import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsChipBadgeDirective,
  TsChipCollectionChange,
  TsChipCollectionComponent,
  TsChipCollectionOrientation,
  TsChipEvent,
  TsChipModule,
} from '@terminus/ui-chip';
import { TsSpacingModule } from '@terminus/ui-spacing';

export default {
  title: 'Components/Data Display/Chip',
  component: TsChipCollectionComponent,
  subcomponents: {
    TsChipCollectionComponent,
    TsChipBadgeDirective,
  },
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        TsChipModule,
        TsSpacingModule,
      ],
    }),
  ],
};

export const basic = () => ({
  template: `
    <ts-chip
      [isRemovable]="isRemovable"
      [isDisabled]="isDisabled"
    >My chip</ts-chip>
  `,
  props: {
    isRemovable: boolean('Removable', true),
    isDisabled: boolean('Disabled', false),
  },
});
basic.parameters = {
  actions: { disabled: true },
  docs: { iframeHeight: 60 },
};

@Component({
  selector: 'ts-chip-wrapper',
  template: `
    <ts-chip-collection
      [allowMultipleSelections]="true"
      [isDisabled]="isDisabled"
      [orientation]="orientation"
      (collectionChange)="collectionChange.emit($event)"
      (removed)="removed.emit($event)"
      (tabUpdateFocus)="tabUpdateFocus.emit()"
    >
      <ts-chip
        *ngFor="let chip of options;"
        [isRemovable]="isRemovable"
        [isDisabled]="isDisabled"
        [value]="chip"
        (remove)="removeChip($event)"
      >{{ chip }}</ts-chip>
    </ts-chip-collection>
  `,
})
class ChipWrapper {
  public optionsOriginal = ['banana', 'apple', 'orange', 'pear'];
  public options = this.optionsOriginal.slice();
  @Input() public orientation: TsChipCollectionOrientation;
  @Input() public isRemovable;
  @Input() public isDisabled;
  @Output() public readonly collectionChange = new EventEmitter<TsChipCollectionChange>();
  @Output() public readonly removed = new EventEmitter<TsChipEvent>();
  @Output() public readonly tabUpdateFocus = new EventEmitter<void>();

  public removeChip(event: TsChipEvent): void {
    if (!event.chip.value) {
      return;
    }
    const index = this.options.indexOf(event.chip.value);
    if (index < 0) {
      return;
    }
    this.options.splice(index, 1);
  }
}

export const chipCollection = () => ({
  component: ChipWrapper,
  props: {
    isRemovable: boolean('Removable', true),
    isDisabled: boolean('Disabled', false),
    orientation: select('Orientation', ['horizontal', 'vertical'], 'horizontal'),
    options: ['banana', 'apple', 'orange', 'pear'],
    removed: action('Chip removed'),
    collectionChange: action('Collection changed'),
    tabUpdateFocus: action('Tab focus updated'),
  },
});
chipCollection.parameters = {
  docs: { iframeHeight: 60 },
};
