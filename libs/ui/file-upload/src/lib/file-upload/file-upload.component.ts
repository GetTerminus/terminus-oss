import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  isDevMode,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import type {
  AfterContentInit,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import type { ValidationErrors } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

import {
  coerceArray,
  coerceNumberProperty,
  inputHasChanged,
  isDragEvent,
  isHTMLInputElement,
  isNumber,
  KEYS,
  TsDocumentService,
  untilComponentDestroyed,
} from '@terminus/fe-utilities';
import { TS_SPACING } from '@terminus/ui-spacing';
import {
  ControlValueAccessorProviderFactory,
  TsReactiveFormBaseComponent,
} from '@terminus/ui-utilities';

import { TsDropProtectionService } from '../drop-protection/drop-protection.service';
import { TsFileImageDimensionConstraints } from '../image-dimension-constraints';
import { TS_ACCEPTED_MIME_TYPES, TsFileAcceptedMimeTypes } from '../mime-types';
import { TsSelectedFileUploadStats } from '../selected-file-upload-stats';
import { TsSelectedFile } from '../selected-file/selected-file';

export interface ImageRatio {
  widthRatio: number;
  heightRatio: number;
}

// NOTE: During the last batch of dependency upgrades `DragEvent` began throwing a reference error:
// `ReferenceError: DragEvent is not defined`. A workaround is to assign it first to our own type.
// See https://github.com/thymikee/jest-preset-angular/issues/245#issuecomment-475982348
export type TsFileUploadDragEvent = DragEvent;

/**
 * The maximum file size in bytes
 *
 * NOTE: Currently nginx has a hard limit of 10mb
 */
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const MAXIMUM_KILOBYTES_PER_FILE = 10 * 1024;

/**
 * Unique ID for each instance
 */
let nextUniqueId = 0;

/**
 * A component that offers classic file uploading or drag and drop file uploading.
 *
 * @example
 * <ts-file-upload
 *              accept="['image/png', 'image/jpg']"
 *              dimensionConstraints="myConstraints" (see TsFileImageDimensionConstraints)
 *              [formControl]="myForm.get('myControl')"
 *              [hideButton]="false"
 *              id="my-id"
 *              [isDisabled]="true"
 *              maximumKilobytesPerFile="{{ 10 * 1024 }}"
 *              [multiple]="false"
 *              [uploadStats]="uploadStats"
 *              ratioConstraints="['2:1', '3:4']"
 *              [files]="[myFile]"
 *              (enter)="userDragBegin($event)"
 *              (exit)="userDragEnd($event)"
 *              (selected)="handleFile($event)"
 * ></ts-file-upload>
 *
 * <example-url>https://release--5f0ca4e61af3790022cad2fe.chromatic.com/?path=/story/components-data-entry-file-upload</example-url>
 */
@Component({
  selector: 'ts-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  host: {
    class: 'ts-file-upload',
  },
  providers: [
    ControlValueAccessorProviderFactory<TsFileUploadComponent>(
      TsFileUploadComponent,
    ),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tsFileUpload',
})
export class TsFileUploadComponent extends TsReactiveFormBaseComponent
  implements OnInit, OnChanges, OnDestroy, AfterContentInit {
  /**
   * Define the default component ID
   */
  protected uid = `ts-file-upload-${nextUniqueId++}`;

  /**
   * Store reference to the generated file input
   */
  private readonly virtualFileInput: HTMLInputElement = this.createFileInput();

  /**
   * Store all selected files
   */
  public readonly files$ = new BehaviorSubject<TsSelectedFile[] | undefined>(
    undefined,
  );

  public readonly hasFiles$ = this.files$.pipe(
    map(files => !!files && files.length > 0),
  );

  public readonly notHasFiles$ = this.hasFiles$.pipe(
    map(hasFiles => !hasFiles),
  );

  /**
   * Formatted hint for formats
   *
   * @returns A string containing all allowed formats
   */
  public get formatsHint(): string {
    return this.acceptedTypes
      .slice()
      .map(v => v.split('/')[1])
      .join(', ');
  }

  /**
   * Formatted hint for ratios
   *
   * @returns A string containing all allowed ratios
   */
  public get ratiosHint(): string {
    return this.ratioConstraints
      ? this.ratioConstraints.slice().join(', ')
      : '';
  }

  /**
   * Formatted hint for image dimensions
   *
   * @returns A string containing all allowed image dimensions
   */
  public get supportedImageDimensionsHint(): string {
    let myString = '';

    // istanbul ignore else
    if (this.dimensionConstraints) {
      const constraints = this.dimensionConstraints.slice();

      for (const c of constraints) {
        // If not the first item, add a comma between the last item and the new
        if (myString.length > 0) {
          myString += ', ';
        }

        // If a fixed size
        if (c.height.min === c.height.max && c.width.min === c.width.max) {
          myString += `${c.width.min.toLocaleString()}x${c.height.min.toLocaleString()}`;
        } else {
          // Dealing with a size range
          const height =
            c.height.min === c.height.max
              ? c.height.min.toLocaleString()
              : `${c.height.min.toLocaleString()}-${c.height.max.toLocaleString()}`;
          const width =
            c.width.min === c.width.max
              ? c.width.min.toLocaleString()
              : `${c.width.min.toLocaleString()}-${c.width.max.toLocaleString()}`;
          const range = `${width}x${height}`;
          myString += range;
        }
      }
    }

    return myString;
  }

  /**
   * Define the stats of each currently selected file
   *
   * @param value
   */
  @Input() public readonly uploadStats?: TsSelectedFileUploadStats[];

  /**
   * Define seeded files
   *
   * @param files
   */
  @Input()
  public set files(files: File[]) {
    const selectedFiles = files.map(file => new TsSelectedFile(
      file,
      this.dimensionConstraints,
      this.acceptedTypes,
      this.maximumKilobytesPerFile,
      this._ratioConstraints,
    ));

    if (this.multiple) {
      this.files$.next(selectedFiles);
    } else {
      this.files$.next([selectedFiles[0]]);
    }
  }

  /**
   * Define the accepted mime types
   *
   * @param value
   */
  @Input()
  public set accept(
    value: TsFileAcceptedMimeTypes | TsFileAcceptedMimeTypes[] | undefined,
  ) {
    if (value) {
      this._acceptedTypes = coerceArray(value);
    } else {
      this._acceptedTypes = TS_ACCEPTED_MIME_TYPES.slice();
    }
  }
  // NOTE: Setter name is different to allow different types passed in vs returned
  public get acceptedTypes(): TsFileAcceptedMimeTypes[] {
    return this._acceptedTypes;
  }
  private _acceptedTypes: TsFileAcceptedMimeTypes[] = TS_ACCEPTED_MIME_TYPES.slice();

  /**
   * Define maximum and minimum pixel dimensions for images
   *
   * @param value
   */
  @Input()
  public set dimensionConstraints(
    value: TsFileImageDimensionConstraints | undefined,
  ) {
    this._sizeConstraints = value;
  }
  public get dimensionConstraints():
    | TsFileImageDimensionConstraints
    | undefined {
    return this._sizeConstraints;
  }
  private _sizeConstraints: TsFileImageDimensionConstraints | undefined;

  /**
   * Define an ID for the component
   *
   * @param value
   */
  @Input()
  public set id(value: string) {
    this._id = value || this.uid;
  }
  public get id(): string {
    return this._id;
  }
  private _id: string = this.uid;

  /**
   * Define if the component is disabled
   */
  @Input()
  public isDisabled = false;

  /**
   * Define the maximum file size in kilobytes
   *
   * @param value
   */
  @Input()
  public set maximumKilobytesPerFile(value: number) {
    this._maximumKilobytesPerFile = value || MAXIMUM_KILOBYTES_PER_FILE;
  }
  public get maximumKilobytesPerFile(): number {
    return this._maximumKilobytesPerFile;
  }
  private _maximumKilobytesPerFile: number = MAXIMUM_KILOBYTES_PER_FILE;

  /**
   * Define supported ratio for images
   *
   * @param values
   */
  @Input()
  public set ratioConstraints(values: Array<string> | undefined) {
    if (values) {
      for (const value of values) {
        const v = value.split(':');
        const minPartsForValidRatio = 2;
        if (
          v.length !== minPartsForValidRatio
          || !isNumber(v[0])
          || !isNumber(v[1])
        ) {
          throw new Error(
            'TsFileUploadComponent: An array of image ratios should be formatted as ["1:2", "3:4"]',
          );
        }
      }
    }
    this._ratioConstraints = this.parseRatioStringToObject(values);
  }
  public get ratioConstraints(): Array<string> | undefined {
    return this.parseRatioToString(this._ratioConstraints);
  }
  private _ratioConstraints: Array<ImageRatio> | undefined;

  /**
   * Define if multiple files may be uploaded
   */
  @Input()
  public multiple = false;

  /**
   * Define the label for the formats hint
   */
  @Input() public readonly formatsLabel = 'Formats';

  /**
   * Define the label for the ratios hint
   */
  @Input() public readonly ratiosLabel = 'Ratios';

  /**
   * Define the label for the dimensions hint
   */
  @Input() public readonly dimensionsLabel = 'Dimensions';

  /**
   * Define the label for the resources hint
   */
  @Input() public readonly resourcesLabel = 'Resources';

  /**
   * Define a footer note
   */
  @Input() public readonly noteLabel: string;

  /**
   * Event emitted when the user's cursor enters the field while dragging a file
   */
  @Output()
  public readonly enter = new EventEmitter<boolean>();

  /**
   * Event emitted when the user's cursor exits the field while dragging a file
   */
  @Output()
  public readonly exit = new EventEmitter<boolean>();

  /**
   * Event emitted when the user drops or selects files
   */
  @Output()
  public readonly selected = this.files$.pipe(
    filter(files => !!files),
    // distinctUntilChanged((a, b) => isEqual(a, b))
  );

  /**
   * HostListeners
   *
   * @param event
   */
  @HostListener('dragover', ['$event'])
  public handleDragover(event: TsFileUploadDragEvent) {
    // istanbul ignore else
    if (!this.isDisabled) {
      this.preventAndStopEventPropagation(event);
      this.enter.emit(true);
    }
  }

  @HostListener('dragleave', ['$event'])
  public handleDragleave(event: TsFileUploadDragEvent) {
    // istanbul ignore else
    if (!this.isDisabled) {
      this.preventAndStopEventPropagation(event);
      this.exit.emit(true);
    }
  }

  @HostListener('drop', ['$event'])
  public handleDrop(event: TsFileUploadDragEvent) {
    // istanbul ignore else
    if (!this.isDisabled) {
      this.preventAndStopEventPropagation(event);
      this.collectFilesFromEvent(event);
    }
  }

  constructor(
    private documentService: TsDocumentService,
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
    private dropProtectionService: TsDropProtectionService,
  ) {
    super();
  }

  /**
   * Update the inner value when the formControl value is updated
   *
   * @param value - The value to set
   */
  public updateInnerValue = (value: string): void => {
    this.value = value;

    // NOTE: This `if` is to avoid: `Error: ViewDestroyedError: Attempt to use a destroyed view: detectChanges`
    // istanbul ignore else
    // eslint-disable-next-line dot-notation
    if (!this.changeDetectorRef['destroyed']) {
      this.changeDetectorRef.detectChanges();
    }
  };

  /**
   * Enable drop protection
   */
  public ngOnInit(): void {
    this.dropProtectionService.add();
    if (this.formControl) {
      this.formControl.valueChanges
        .pipe(untilComponentDestroyed(this))
        .subscribe(() => {
          // NOTE: This `if` is to avoid: `Error: ViewDestroyedError: Attempt to use a destroyed view: detectChanges`
          // istanbul ignore else
          // eslint-disable-next-line dot-notation
          if (!this.changeDetectorRef['destroyed']) {
            this.changeDetectorRef.detectChanges();
          }
        });
    }
  }

  /**
   * Update the virtual file input when the change event is fired
   */
  public ngAfterContentInit(): void {
    this.virtualFileInput.addEventListener(
      'change',
      this.onVirtualInputElementChange.bind(this),
    );
    this.updateVirtualFileInputAttrs(this.virtualFileInput);
  }

  /**
   * Update the virtual file input's attrs when specific inputs change
   *
   * @param changes - The changed inputs
   */
  public ngOnChanges(changes: SimpleChanges): void {
    // istanbul ignore else
    if (
      inputHasChanged(changes, 'multiple')
      || inputHasChanged(changes, 'accept')
    ) {
      this.updateVirtualFileInputAttrs(this.virtualFileInput);
      this.registerOnChangeFn(this.updateInnerValue);
    }
  }

  /**
   * Remove event listener when the component is destroyed
   */
  public ngOnDestroy(): void {
    if (this.virtualFileInput) {
      this.virtualFileInput.removeEventListener(
        'change',
        this.onVirtualInputElementChange.bind(this),
      );
    }
  }

  /**
   * Open the file selection window when the user interacts
   */
  public promptForFiles(): void {
    this.virtualFileInput.click();
  }

  /**
   * Create a virtual file input
   *
   * @returns The HTMLInputElement for file collection
   */
  private createFileInput(): HTMLInputElement {
    // eslint-disable-next-line deprecation/deprecation
    const input: HTMLInputElement = this.documentService.document.createElement(
      'input',
    );
    input.setAttribute('type', 'file');
    input.style.display = 'none';
    return input;
  }

  /*
   * Stops event propagation
   *
   * NOTE: Making this static seems to break our tests.
   */
  private preventAndStopEventPropagation(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Parse ratio from Array of string to Array of ImageRatio
   *
   * @param ratios - Array of string
   * @returns - Array of ImageRatio
   */
  private parseRatioStringToObject(
    ratios: Array<string> | undefined,
  ): Array<ImageRatio> | undefined {
    if (!ratios) {
      return undefined;
    }
    const parsedImageRatio: Array<ImageRatio> = [];
    ratios.map(r => parsedImageRatio.push({
      widthRatio: Number(r.split(':')[0]),
      heightRatio: Number(r.split(':')[1]),
    }));
    return parsedImageRatio;
  }

  /**
   * Parse ratio from Array of ImageRatio to Array of string
   *
   * @param ratios - Array of ImageRatio
   * @returns - Array of string
   */
  private parseRatioToString(
    ratios: Array<ImageRatio> | undefined,
  ): Array<string> | undefined {
    if (!ratios) {
      return undefined;
    }
    const parsedRatio: Array<string> = [];
    ratios.map(r => parsedRatio.push(`${r.widthRatio.toString()}:${r.heightRatio.toString()}`));
    return parsedRatio;
  }

  private collectFilesFromEvent(event: TsFileUploadDragEvent | Event): void {
    let files: FileList | undefined;

    if (isDragEvent(event)) {
      files =
        event.dataTransfer && event.dataTransfer.files
          ? event.dataTransfer.files
          : undefined;
    }

    if (event.target && isHTMLInputElement(event.target)) {
      files = event.target.files ? event.target.files : undefined;
    }

    if ((!files || files.length < 1) && isDevMode()) {
      throw Error('TsFileUpload: Event contained no file.');
    }

    // Convert the FileList to an Array
    const filesArray: File[] = files
      ? Array.from(files) /* istanbul ignore next - Unreachable */
      : [];

    const selectedFiles = filesArray.map(file => new TsSelectedFile(
      file,
      this.dimensionConstraints,
      this.acceptedTypes,
      this.maximumKilobytesPerFile,
      this._ratioConstraints,
    ));

    if (this.multiple) {
      this.files$.next(selectedFiles);
    } else {
      this.files$.next([selectedFiles[0]]);
    }
  }

  /**
   * Listen for changes to the virtual input
   *
   * @param event - The event
   */
  private onVirtualInputElementChange(event: Event): void {
    // istanbul ignore else
    if (!this.isDisabled) {
      this.collectFilesFromEvent(event);
      this.virtualFileInput.value = '';
    }
  }

  public fileRemoved(index: number): void {
    const files = this.files$.value;
    this.files$.next(files.filter((file, i) => i !== index));
  }

  /**
   * Function for tracking for-loops changes
   *
   * @param file - The file to track
   * @returns The unique ID
   */
  public trackByFyleNameFn(file: TsSelectedFile): string {
    return file.name;
  }

  /**
   * Update the attributes of the virtual file input based on @Inputs
   *
   * @param input - The HTML input element
   */
  private updateVirtualFileInputAttrs(input: HTMLInputElement): void {
    const hasMultipleSetting: boolean = input.hasAttribute('multiple');

    // Should set multiple
    // istanbul ignore else
    if (this.multiple && !hasMultipleSetting) {
      this.virtualFileInput.setAttribute('multiple', 'true');
    }

    // Should remove multiple
    // istanbul ignore else
    if (!this.multiple && hasMultipleSetting) {
      this.virtualFileInput.removeAttribute('multiple');
    }

    // Should set accept
    // istanbul ignore else
    if (this.acceptedTypes) {
      this.virtualFileInput.setAttribute(
        'accept',
        this.acceptedTypes.toString(),
      );
    }
  }

  /**
   * Register our custom onChange function
   *
   * @param fn - The onChange function
   */
  private registerOnChangeFn(fn: Function): void {
    // istanbul ignore else
    if (this.formControl) {
      this.formControl.registerOnChange(fn);
    }
  }
}
