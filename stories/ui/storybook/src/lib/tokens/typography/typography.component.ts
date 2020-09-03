import { Component } from '@angular/core';

import { SettingsService } from '../shared/services/settings.service';
import { TokensService } from '../shared/services/tokens.service';
import { jsonPathToString } from '../shared/utilities/jsonPathToString';
import { jsonToHumanName } from '../shared/utilities/jsonToHumanName';
import { jsonToJsToken } from '../shared/utilities/jsonToJsToken';
import { jsonToSassToken } from '../shared/utilities/jsonToSassToken';
import { objToArray } from '../shared/utilities/objectToArray';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'tsdt-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  // Store the formatted stacks data
  public formatted;
  // TODO move to base class? Global service?
  public svgAsset = '/assets/chain.svg';
  public demoText = `The quick brown fox jumps over the lazy dog`;
  public typographySizes: Record<string, any>[];
  public compoundStyles: Record<string, any>[];

  constructor(
    public settingsService: SettingsService,
    private tokensService: TokensService,
  ) {
    this.formatted = TypographyComponent.formatTypographyStacks(this.tokensService.tokens$.getValue().typography.stack.base);
    this.typographySizes = objToArray(this.tokensService.tokens$.getValue().typography.size);
    this.compoundStyles = TypographyComponent.formatTypographyStacks(this.tokensService.tokens$.getValue().typography.compound);
  }

  /**
   * Format the typography stacks into an array for the DOM
   *
   * @param data - The raw data
   * @returns The array of formatted stacks
   */
  private static formatTypographyStacks(data: Record<string, any>): Record<string, any>[] {
    const stackNames = Object.keys(data);
    const newArray = [];

    for (const stackName of stackNames) {
      const stack = data[stackName];
      const item = {
        name: stack.name,
        value: stack.value,
        jsName: jsonToJsToken(stack.path),
        sassName: jsonToSassToken(stack.path),
        humanName: jsonToHumanName(stack.path),
        jsonPath: jsonPathToString(stack.path),
      };
      newArray.push(item);
    }

    return newArray;
  }
}
