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

import { problem0024 } from './problem0024.js';

const DEBUG =
  process.env._DEBUG === 'true' || process.env.DEBUG === '1' || false;

describe('problem 0024', () => {
  it('problem 0024 solution found', () => {
    expect.assertions(1);

    const solutionFound = null;

    const calculated = problem0024(DEBUG);

    console.log(`PROBLEM 0024 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
