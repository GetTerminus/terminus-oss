import { TestBed } from '@angular/core/testing';


/**
 * Define the structure of the options object passed to `configureTestBed`
 */
export type TestBedCompilerOptions = Partial<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  providers: any[];
  useJit: boolean;
  preserveWhitespaces: boolean;
}>;


/**
 * Define the structure of the function passed to `configureTestBed`
 *
 * @param testBed - The TestBed instance
 */
export type ConfigureTestBedFn = (testBed: typeof TestBed) => void;


/**
 * Create an instance of the TestBed and compile components
 *
 * @param configureFn - The configuration function for the TestBed
 * @param compilerOptions
 * @returns A promise-wrapped TestBed instance
 */
export function configureTestBedWhitespace(
  configureFn: ConfigureTestBedFn,
  compilerOptions: TestBedCompilerOptions = {},
): Promise<typeof TestBed> {

  const compilerConfig: TestBedCompilerOptions = {
    preserveWhitespaces: false,
    ...compilerOptions,
  };

  const configuredTestBed: typeof TestBed = TestBed.configureCompiler(compilerConfig);
  configureFn(configuredTestBed);

  return configuredTestBed.compileComponents().then(() => configuredTestBed);
}
