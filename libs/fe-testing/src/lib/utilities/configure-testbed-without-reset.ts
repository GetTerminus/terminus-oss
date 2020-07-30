import {
  async,
  TestBed,
  TestModuleMetadata,
} from '@angular/core/testing';


/**
 * Set up the TestBed without resetting the TestBed for every test
 *
 * https://github.com/angular/angular/issues/12409
 *
 * @param moduleDef - The module definition
 */
export function configureTestBedWithoutReset(moduleDef: TestModuleMetadata) {
  const resetTestingModule = TestBed.resetTestingModule;
  const preventAngularFromResetting = () => {
    TestBed.resetTestingModule = () => TestBed;
    return TestBed.resetTestingModule;
  };
  const allowAngularToReset = () => {
    TestBed.resetTestingModule = resetTestingModule;
    return TestBed.resetTestingModule;
  };

  // eslint-disable-next-line no-undef
  beforeAll(async(
    async function() {
      resetTestingModule();
      preventAngularFromResetting();
      TestBed.configureTestingModule(moduleDef);
      await TestBed.compileComponents();
    },
  ));

  // eslint-disable-next-line no-undef
  afterAll(() => allowAngularToReset());
}
