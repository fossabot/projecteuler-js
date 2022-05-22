import { getPermutations } from './index.js';

describe('permutations', () => {
  it('some permutations', () => {
    expect.assertions(4);

    console.log(getPermutations(['a', 'b']));

    expect(getPermutations(['a', 'b'])).toStrictEqual([
      ['a', 'b'],
      ['b', 'a']
    ]);

    expect(getPermutations([1, 2])).toStrictEqual([
      [1, 2],
      [2, 1]
    ]);

    expect(getPermutations([1, 2, 3])).toStrictEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 3, 1],
      [2, 1, 3],
      [3, 1, 2],
      [3, 2, 1]
    ]);

    expect(getPermutations(['a', 'b', 'c'])).toStrictEqual([
      ['a', 'b', 'c'],
      ['a', 'c', 'b'],
      ['b', 'c', 'a'],
      ['b', 'a', 'c'],
      ['c', 'a', 'b'],
      ['c', 'b', 'a']
    ]);
  });
});
