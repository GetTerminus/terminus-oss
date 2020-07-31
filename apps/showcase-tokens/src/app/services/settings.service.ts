import {
  Inject,
  Injectable,
  OnDestroy,
} from '@angular/core';
import {
  LOCAL_STORAGE,
  WebStorageService,
} from 'ngx-webstorage-service';
import { BehaviorSubject } from 'rxjs';

import { untilComponentDestroyed } from '@terminus/fe-utilities';

import { TsdtColorFormat } from '../pipes/color-format.pipe';


@Injectable({ providedIn: 'root' })
export class SettingsService implements OnDestroy {
  // REFERENCES
  public readonly referencesKey = 'tsSelectedReferences';
  public selectedReferences$: BehaviorSubject<string[]> = new BehaviorSubject(this.allPossibleReferences.map(v => v.value));
  private _allPossibleReferences: Record<string, any>[] = [
    {
      name: 'CSS custom properties',
      value: 'css',
    },
    {
      name: 'Sass variable',
      value: 'sass-variable',
    },
    {
      name: 'Sass map',
      value: 'sass-map',
    },
    {
      name: 'JavaScript constant',
      value: 'js',
    },
    {
      name: 'JSON path',
      value: 'json',
    },
  ];
  public get allPossibleReferenceValues(): string[] {
    return this.allPossibleReferences.map(v => v.value);
  }
  public get allPossibleReferences(): Record<string, any>[] {
    // TODO: why the f is this needed?
    return this._allPossibleReferences ? this._allPossibleReferences.slice() : [];
  }
  // COLOR FORMAT
  public readonly colorFormatKey = 'tsSelectedColorFormat';
  public selectedColorFormat$: BehaviorSubject<TsdtColorFormat> = new BehaviorSubject(this.allPossibleColorFormats[0]);
  private _allPossibleColorFormats: TsdtColorFormat[] = ['hex', 'rgb', 'hsl'];
  public get allPossibleColorFormats(): TsdtColorFormat[] {
    // TODO: why the f is this needed?
    return this._allPossibleColorFormats ? this._allPossibleColorFormats.slice() : [];
  }


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.init();
  }

  // Needed for `untilComponentDestroyed`
  public ngOnDestroy() {}

  /**
   * Update the user selected visible references
   *
   * @param references - The array of visible references
   */
  public updateSelectedReferences(references: string[]): void {
    this.selectedReferences$.next(references);
    this.saveInLocalStorage(this.referencesKey, references);
  }

  /**
   * Update the user selected format
   *
   * @param format - The chosen format
   */
  public updateSelectedColorFormat(format: TsdtColorFormat): void {
    this.selectedColorFormat$.next(format);
    this.saveInLocalStorage(this.colorFormatKey, format);
  }

  /**
   * Retrieve data from local storage
   *
   * @param key - The key to retrieve from storage
   * @returns The retrieved value
   */
  public getFromLocalStorage(key: string): any {
    return this.storage.get(key);
  }

  /**
   * Save data to local storage
   *
   * @param key - The key to save the information at
   * @param value - The key information to save
   */
  public saveInLocalStorage(key: string, value: any): void {
    this.storage.set(key, value);
  }

  /**
   * Get any saved user settings from storage
   */
  private hydrateFromStorage(): void {
    const userReferences = this.getFromLocalStorage(this.referencesKey);
    const userColorFormat = this.getFromLocalStorage(this.colorFormatKey);
    if (userReferences && userReferences.length) {
      this.selectedReferences$.next(userReferences);
    }
    if (userColorFormat) {
      this.selectedColorFormat$.next(userColorFormat);
    }
  }

  /**
   * Initialize the service and wire up local storage
   */
  private init(): void {
    this.hydrateFromStorage();

    // Watch for changes and update storage
    this.selectedReferences$.pipe(untilComponentDestroyed(this)).subscribe(v => {
      this.saveInLocalStorage(this.referencesKey, v);
    });
    this.selectedColorFormat$.pipe(untilComponentDestroyed(this)).subscribe(v => {
      this.saveInLocalStorage(this.colorFormatKey, v);
    });
  }
}
