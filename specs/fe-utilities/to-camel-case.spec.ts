import { toCamelCase } from '@terminus/fe-utilities';

describe(`toCamelCase`, function() {
  test(`should return undefined if no value is passed in`, () => {
    const values: any[] = [null, undefined, ''];

    for (const value of values) {
      expect(toCamelCase(value)).toEqual(undefined);
    }
  });

  test(`should return the string converted to camelcase`, () => {
    const values = [
      'EquipmentClass name',
      'Equipment className',
      'equipment class name',
      'Equipment Class Name',
      'equipment-class-name',
      'equipment_class_name',
      'equipment__class--name',
      'EQUIPMENT_CLASS_NAME',
      'EQUIPMENT-CLASS--NAME',
    ];

    for (const val of values) {
      expect(toCamelCase(val)).toEqual('equipmentClassName');
    }

    expect(toCamelCase('E')).toEqual('e');
  });

  test(`should return the string in pascal case`, () => {
    const values = [
      'EquipmentClass name',
      'equipment_class_name',
      'EQUIPMENT_CLASS_NAME',
    ];

    for (const val of values) {
      expect(toCamelCase(val, true)).toEqual('EquipmentClassName');
    }

    expect(toCamelCase('e', true)).toEqual('E');
  });

  test(`should convert a string containing numbers`, () => {
    expect(toCamelCase('FOO2BAR3')).toEqual('foo2Bar3');
  });

  test(`should handle a string containing only lowercase letters`, () => {
    expect(toCamelCase('foobar')).toEqual('foobar');
  });
});
