import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import {
  OnDestroyMixin,
  untilComponentDestroyed,
} from '@w11k/ngx-componentdestroyed';

import { SettingsService } from '../../services/settings.service';


/**
 * Global toolbar
 */
@Component({
  selector: 'tsdt-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent extends OnDestroyMixin implements OnInit {
  public allPossibleReferences = this.settingsService.allPossibleReferences;
  public allPossibleColorFormats = this.settingsService.allPossibleColorFormats;
  private defaultVisibleReferences = this.allPossibleReferences.map(v => v.value);
  public defaultColorFormat = this.allPossibleColorFormats[0];
  public toolbarForm = new FormGroup({
    selectedReferences: new FormControl(this.defaultVisibleReferences),
    selectedColorFormat: new FormControl(this.defaultColorFormat),
  });

  constructor(
    private settingsService: SettingsService,
  ) {
    super();
  }

  /**
   * Initial setup and subscriptions
   */
  public ngOnInit(): void {
    this.initVisibleReferences();
    this.initColorFormats();

    this.toolbarForm.valueChanges
      .pipe(untilComponentDestroyed(this))
      .subscribe(value => {
        const { selectedReferences, selectedColorFormat } = value;
        if (selectedReferences) {
          this.settingsService.updateSelectedReferences(selectedReferences);
        }
        if (selectedColorFormat) {
          this.settingsService.updateSelectedColorFormat(selectedColorFormat);
        }
      });
  }

  /**
   * Initialize visible references with any saved user preferences
   */
  private initVisibleReferences(): void {
    const userSettings = this.settingsService.selectedReferences$.value;
    const initialSettings = (userSettings && userSettings.length) ? userSettings : this.defaultVisibleReferences;
    this.toolbarForm.get('selectedReferences').setValue(initialSettings);
  }

  /**
   * Initialize color format with any saved user preferences
   */
  private initColorFormats(): void {
    const userSettings = this.settingsService.selectedColorFormat$.value;
    const initialSettings = (userSettings && userSettings.length) ? userSettings : this.defaultColorFormat;
    this.toolbarForm.get('selectedColorFormat').setValue(initialSettings);
  }

}
