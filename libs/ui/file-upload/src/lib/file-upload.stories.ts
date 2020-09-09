import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  array,
  boolean,
  number,
  object,
  withKnobs,
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  TsFileUploadComponent,
  TsFileUploadModule,
  TsSelectedFile,
} from '@terminus/ui-file-upload';

function dataURLtoFile(dataUrl: string, filename: string): File {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

const SEED_FILE = dataURLtoFile(
  // eslint-disable-next-line max-len
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAAA1BMVEV6IiKMzteYAAAAE0lEQVR4AWOgKxgFo2AUjIJRAAAFeAABHs0ozQAAAABJRU5ErkJggg==',
  'test-file.png',
);

export default {
  title: 'Components/Data Entry/File Upload',
  component: TsFileUploadComponent,
  subcomponents: {
    TsSelectedFile,
  },
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        TsFileUploadModule,
      ],
    }),
  ],
};

export const basic = () => ({
  component: TsFileUploadComponent,
  props: {
    formControl: new FormControl(),
    isDisabled: boolean('Disabled', false),
    cleared: action('File cleared'),
    enter: action('Drag: Enter'),
    exit: action('Drag: Exit'),
    selected: action('File selected'),
  },
});
basic.parameters = {
  docs: { iframeHeight: 160 },
};

export const themes = () => ({
  component: TsFileUploadComponent,
  template: `
    <ts-file-upload [formControl]="formControl" [isDisabled]="isDisabled" theme="default" tsVerticalSpacing="large--1"></ts-file-upload>
    <ts-file-upload [formControl]="formControl" [isDisabled]="isDisabled" theme="secondary" tsVerticalSpacing="large--1"></ts-file-upload>
    <ts-file-upload [formControl]="formControl" [isDisabled]="isDisabled" theme="warning"></ts-file-upload>
  `,
  props: {
    formControl: new FormControl(),
    isDisabled: boolean('Disabled', false),
  },
});
themes.parameters = {
  docs: { iframeHeight: 600 },
  actions: { disabled: true },
  knobs: { disabled: true },
};

export const progressAndSeededFile = () => ({
  component: TsFileUploadComponent,
  props: {
    formControl: new FormControl(),
    seedFile: SEED_FILE,
    progress: number('Upload progress', 23),
  },
});
progressAndSeededFile.parameters = {
  docs: { iframeHeight: 160 },
  actions: { disabled: true },
};

const ALL_MIME_TYPES = [
  'image/png',
  'image/jpg',
  'image/jpeg',
  'text/csv',
  'video/mp4',
  'video/x-flv',
  'video/webm',
  'video/quicktime',
  'video/mpeg',
];
const DIMENSIONS = [
  {
    height: {
      min: 50,
      max: 100,
    },
    width: {
      min: 50,
      max: 100,
    },
  },
  {
    height: {
      min: 72,
      max: 72,
    },
    width: {
      min: 72,
      max: 72,
    },
  },
];

export const constraints = () => ({
  component: TsFileUploadComponent,
  props: {
    formControl: new FormControl(),
    seedFile: SEED_FILE,
    dimensionConstraints: object('Accepted dimensions', DIMENSIONS),
    accept: array('Accepted mime types', ALL_MIME_TYPES),
    maximumKilobytesPerFile: number('Maximum kilobytes per file', 10240),
    ratioConstraints: array('Ratio constraints', ['1:2', '1.9:1', '5:1']),
  },
});
constraints.parameters = {
  docs: { iframeHeight: 160 },
  actions: { disabled: true },
};

export const hideUploadButton = () => ({
  component: TsFileUploadComponent,
  props: {
    formControl: new FormControl(),
    hideButton: boolean('Hide button', true),
  },
});
hideUploadButton.parameters = {
  docs: { iframeHeight: 160 },
  actions: { disabled: true },
};

@Component({
  selector: 'ts-file-upload-wrapper',
  template: `
    <ts-file-upload
      [multiple]="true"
      (selected)="selected($event)"
      (selectedMultiple)="selectedMultiple($event)"
      (cleared)="file = null"
    ></ts-file-upload>

    <ng-container *ngFor="let v of files">
      <ts-file-upload
        *ngIf="fileExists(v.id)"
        [seedFile]="v.file"
        (selected)="selected($event)"
        (cleared)="clearFile(v.id)"
      ></ts-file-upload>
    </ng-container>
  `,
})
class FileUploadWrapper {
  file: any;
  files: {id: number; file: File}[] = [];
  progress = 0;

  selected(e: TsSelectedFile): void {
    console.log('DEMO: selected: ', e);
    this.file = e;
    this.startProgress();
  }

  startProgress(): void {
    this.progress = 0;
    const counting = setInterval(() => {
      if (this.progress < 100) {
        this.progress++;
      } else {
        clearInterval(counting);
      }
    }, 20);
  }

  selectedMultiple(e: File[]): void {
    console.log('DEMO: selected multiple: ', e);
    let index = -1;

    this.files = e.map(f => {
      index = index + 1;
      return {
        id: index,
        file: f,
      };
    });
  }

  clearFile(id: number): void {
    if (!this.files || this.files.length < 1) {
      return;
    }
    this.files = this.files.filter(obj => obj.id !== id);
  }

  fileExists(id: number): boolean {
    if (!this.files || this.files.length < 1) {
      return false;
    }
    const found = this.files.find(v => v.id === id);
    return !!found;
  }
}

export const multiple = () => ({
  component: FileUploadWrapper,
});
multiple.parameters = {
  docs: { iframeHeight: 600 },
  actions: { disabled: true },
  knobs: { disabled: true },
};
