import { TsDocumentService } from '@terminus/fe-utilities';

describe(`TsDocumentService`, function() {
  test(`should return the window object`, () => {
    const service = new TsDocumentService();

    expect(service.document).toBeTruthy();
  });
});
