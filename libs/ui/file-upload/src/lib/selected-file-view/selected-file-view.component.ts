import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { TsSelectedFileUploadStats } from '../selected-file-upload-stats';
import { TsSelectedFile } from '../ui-file-upload.module';

@Component({
  selector: 'ts-selected-file-view',
  templateUrl: './selected-file-view.component.html',
  styleUrls: ['./selected-file-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedFileViewComponent {
  /**
   * Define the selected file to be displayed.
   *
   * @param value
   */
  @Input() public readonly file: TsSelectedFile;

  /**
   * Define the upload stats for the selected file.
   *
   * @param value
   */
  @Input() public readonly uploadStats?: TsSelectedFileUploadStats;

  /**
   * Event emitted when the user remove the file
   */
  @Output() public readonly removed = new EventEmitter<void>();
}
