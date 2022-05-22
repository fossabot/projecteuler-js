/**
 * Heap's permutations algorithm
 *
 * Implementation from:
 * https://www.youtube.com/watch?v=xghJNlMibX4
 * https://gist.github.com/angle943/9a1d4e304b02a6f0579c455eb0dda0d2
 * https://en.wikipedia.org/wiki/Heap%27s_algorithm
 */

export const heapPermutations = (arr) => {
  const output = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    // eslint-disable-next-line no-param-reassign
    arrToSwap[indexA] = arrToSwap[indexB];
    // eslint-disable-next-line no-param-reassign
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());

  return output;
};

export default {
  heapPermutations
};
