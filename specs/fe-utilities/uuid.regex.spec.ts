import { uuidRegex } from '@terminus/fe-utilities';

describe(`uuidRegex`, function() {
  const validUuids = [
    '6948DF80-14BD-4E04-8842-7668D9C001F5',
    '4B8302DA-21AD-401F-AF45-1DFD956B80B5',
    '8628FE7C-A4E9-4056-91BD-FD6AA7817E39',
    '10929DF8-15C5-472B-9398-7158AB89A0A6',
    'ED280816-E404-444A-A2D9-FFD2D171F928',
    'D952EB9F-7AD2-4B1B-B3CE-386735205990',
    '3F897E85-62CE-4B2C-A957-FCF0CCE649FD',
    '8E7C2F0A-6BB8-485C-917E-6B605A0DDF29',
    '1AD2F3EF-87C8-46B4-BD1D-94C174C278EE',
    'AA97B177-9383-4934-8543-0F91A7A02836',
  ];

  const invalidUuids = [
    '-6948DF80-14BD-4E04-8842-7668D9C001F5',
    'AA97B177-9383-4934-8543-0F91A7A028360',
    'test',
    'AA97B177-9383-1934-8543-0F91A7A028360',
    'AA97B177-9383-1934-0543-0F91A7A028360',
    '*',
    undefined as any,
    null as any,
    '',
  ];

  test(`should return true for valid UUIDs`, () => {
    for (const uuid of validUuids) {
      expect(uuidRegex.test(uuid)).toEqual(true);
    }
  });

  test(`should return false for invalid UUIDs`, () => {
    for (const uuid of invalidUuids) {
      expect(uuidRegex.test(uuid)).toEqual(false);
    }
  });
});
