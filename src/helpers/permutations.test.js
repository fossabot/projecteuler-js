import { heapPermutations } from './index.js';

describe('permutations', () => {
  it('some permutations', () => {
    expect.assertions(2);

    // console.log(heapPermutations(['a', 'b']));

    expect(heapPermutations(['A', 'B'])).toStrictEqual([
      ['A', 'B'],
      ['B', 'A']
    ]);

    expect(heapPermutations(['A', 'B', 'C', 'D'])).toStrictEqual([
      ['A', 'B', 'C', 'D'],
      ['B', 'A', 'C', 'D'],
      ['C', 'A', 'B', 'D'],
      ['A', 'C', 'B', 'D'],
      ['B', 'C', 'A', 'D'],
      ['C', 'B', 'A', 'D'],

      ['D', 'B', 'A', 'C'],
      ['B', 'D', 'A', 'C'],
      ['A', 'D', 'B', 'C'],
      ['D', 'A', 'B', 'C'],
      ['B', 'A', 'D', 'C'],
      ['A', 'B', 'D', 'C'],

      ['A', 'C', 'D', 'B'],
      ['C', 'A', 'D', 'B'],
      ['D', 'A', 'C', 'B'],
      ['A', 'D', 'C', 'B'],
      ['C', 'D', 'A', 'B'],
      ['D', 'C', 'A', 'B'],

      ['D', 'C', 'B', 'A'],
      ['C', 'D', 'B', 'A'],
      ['B', 'D', 'C', 'A'],
      ['D', 'B', 'C', 'A'],
      ['C', 'B', 'D', 'A'],
      ['B', 'C', 'D', 'A']
    ]);
  });
});
