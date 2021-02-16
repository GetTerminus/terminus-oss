import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TsButtonModule } from '@terminus/ui-button';
import { TsInputModule } from '@terminus/ui-input';

import { TsSearchComponent, TsSearchDefaultOptions } from './search/search.component';
import { defaultOptions } from './ui-search.const';
import { TS_SEARCH_DEFAULT_OPTIONS } from './ui-search.token';

export * from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TsButtonModule,
    TsInputModule,
  ],
  exports: [TsSearchComponent],
  declarations: [TsSearchComponent],
  providers: [
    {
      provide: TS_SEARCH_DEFAULT_OPTIONS,
      useValue: defaultOptions,
    },
  ],
})
export class TsSearchModule {
  public static forRoot(options: TsSearchDefaultOptions): ModuleWithProviders<TsSearchModule> {
    return {
      ngModule: TsSearchModule,
      providers: [
        {
          provide: TS_SEARCH_DEFAULT_OPTIONS,
          useValue: {
            ...defaultOptions,
            ...options,
          },
        },
      ],
    };
  }
}
