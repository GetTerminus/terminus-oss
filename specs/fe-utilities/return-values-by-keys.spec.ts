import { returnValuesByKeys } from '@terminus/fe-utilities';

describe(`returnValuesByKeys`, function() {
  interface Tactic {
    id: number;
    name: string;
    goal: string;
  }
  const tactic1: Tactic = {
    id: 1,
    name: 'tactic1',
    goal: 'goal1',
  };
  const tactic2: Tactic = {
    id: 2,
    name: 'tactic2',
    goal: 'goal2',
  };
  const tactics = {
    1: tactic1,
    2: tactic2,
  };

  test(`should return array of object with matched key with array of numbers`, () => {
    expect(returnValuesByKeys<Tactic>([1], tactics)).toEqual([tactic1]);
  });

  test(`should return array of object with matched key with array of strings`, () => {
    expect(returnValuesByKeys<Tactic>(['1'], tactics)).toEqual([tactic1]);
  });

  test(`should only return matched object`, () => {
    expect(returnValuesByKeys<Tactic>([1, 3], tactics)).toEqual([tactic1]);
  });

  test(`should return empty array if no keys matched`, () => {
    expect(returnValuesByKeys<Tactic>([3], tactics)).toEqual([]);
  });
});
