import { Component } from '@angular/core';

import {
  ConfigureTestBedFn,
  configureTestBedWhitespace,
  TestBedCompilerOptions,
} from '@terminus/fe-testing';

@Component({ template: `` })
class TestHostComponent {}

describe(`configureTestBedWhitespace`, function() {
  const configure: ConfigureTestBedFn = testBed => {
    testBed.configureTestingModule({ declarations: [TestHostComponent] });
  };

  test(`should return a configured TestBed`, () => {
    configureTestBedWhitespace(configure).then(testBed => {
      expect(testBed).toEqual(expect.any(Function));
      const bed = new testBed;
      expect(bed.ngModule).toEqual(null);
    });
  });

  test(`should return a configured TestBed`, () => {
    const options: TestBedCompilerOptions = { preserveWhitespaces: true };

    configureTestBedWhitespace(configure, options).then(testBed => {
      expect(testBed).toEqual(expect.any(Function));
      const bed = new testBed;
      expect(bed.ngModule).toEqual(null);
    });
  });
});
