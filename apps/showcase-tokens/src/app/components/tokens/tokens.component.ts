import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { TsdtColorFormat } from '../../pipes/color-format.pipe';
import { SettingsService } from '../../services/settings.service';


/**
 * Display style tokens
 */
@Component({
  selector: 'tsdt-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
})
export class TokensComponent implements OnInit {
  public visibleReferences = [];
  public initialReferenceSelection = this.settingsService.allPossibleReferenceValues;

  /**
   * Define the item who's values should be displayed
   */
  @Input()
  public item: any;

  /**
   * Define which references should be visible
   */
  @Input()
  public set selectedReferences(value: string[]) {
    this._selectedReferences = (value && value.length) ? value : this.initialReferenceSelection;
    this.visibleReferences = this.selectedReferences.slice();
  }
  public get selectedReferences(): string[] {
    return this._selectedReferences;
  }
  private _selectedReferences: string[] = this.initialReferenceSelection;

  /**
   * The format that should be used for the color values
   */
  @Input()
  public colorFormat: TsdtColorFormat = 'hex';

  /**
   * Define if the value is a color
   *
   * NOTE: This is used to determine if the color format pipe should be used
   */
  @Input()
  public isColor = false;

  constructor(private settingsService: SettingsService) {}

  public ngOnInit(): void {}

}
