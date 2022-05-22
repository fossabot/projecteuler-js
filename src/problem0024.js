/**
 *
 * <TITLE>
 *
 * https://projecteuler.net/problem=XX
 *
 * <DESCRIPTION>
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Result found:
 * ////////////////////////////////////////////////////////////////////////////
 */

import { getPermutations } from './helpers/permutations.js';

export function problem0024(_DEBUG) {
  const result = null;

  // Driver code
  const a = ['a', 'b', 'c', 'd'];

  const perms = getPermutations(a);
  console.log('perms', perms);

  if (_DEBUG) {
    console.log(`result`, result);
  }

  return result;
}

export default { problem0024 };
