import {
  Component,
  Inject,
} from '@angular/core';
import {
  LOCAL_STORAGE,
  WebStorageService,
} from 'ngx-webstorage-service';

import { SettingsService } from '../shared/services/settings.service';
import { TokensService } from '../shared/services/tokens.service';
import {
  jsonPathToString,
  jsonToHumanName,
  jsonToJsToken,
  jsonToSassToken,
} from '../shared/utilities/index';

/**
 * Define the structure for a color definition
 */
export interface TsColor {
  name: string;
  colors: Record<string, any>[];
}

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'tsdt-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent {
  // private tokens = TOKENS_TREE;
  private fragment: string | undefined;
  public colors: TsColor[];
  public svgAsset = '/assets/chain.svg';

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    public settingsService: SettingsService,
    private tokensService: TokensService,
  ) {
    this.colors = ColorComponent.formatData(this.tokensService.tokens$.getValue().color.base);
  }

  /**
   * Format the original color data for usage in the template
   *
   * @param colors - The raw data
   * @returns The array of formatted color data
   */
  private static formatData(colors: Record<string, any>): TsColor[] {
    const originalColorKeys = Object.keys(colors);
    const newColorArray = [];

    for (const value of originalColorKeys) {
      if ('value' in colors[value]) {
        const item = {
          name: value,
          colors: [colors[value]],
        };
        item.colors[0].jsName = jsonToJsToken(colors[value].path);
        item.colors[0].sassName = jsonToSassToken(colors[value].path);
        item.colors[0].humanName = jsonToHumanName(colors[value].path);
        item.colors[0].jsonPath = jsonPathToString(colors[value].path);
        newColorArray.push(item);
      } else {
        const palette = colors[value];
        const paletteKeys = Object.keys(palette);
        const item = {
          name: value,
          colors: [],
        };

        for (const inner of paletteKeys) {
          palette[inner].jsName = jsonToJsToken(palette[inner].path);
          palette[inner].sassName = jsonToSassToken(palette[inner].path);
          palette[inner].humanName = jsonToHumanName(palette[inner].path);
          palette[inner].jsonPath = jsonPathToString(palette[inner].path);
          item.colors.push(palette[inner]);
        }

        newColorArray.push(item);
      }
    }
    return newColorArray;
  }
}
