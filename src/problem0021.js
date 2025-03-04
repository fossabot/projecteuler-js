/**
 *
 * Amicable numbers
 *
 * https://projecteuler.net/problem=21
 *
 * Let d(n) be defined as the sum of proper divisors of n
 * (numbers less than n which divide evenly into n).
 *
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are
 * an amicable pair and each of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10,
 * 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
 *
 * The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under 10000.
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Result found: 31626
 *
 * Amicable numbers found:
 * amicableNumbers [
      '220',  '284',
      '1184', '1210',
      '2620', '2924',
      '5020', '5564',
      '6232', '6368'
    ]
 * ////////////////////////////////////////////////////////////////////////////
 */

import logger from './logger.js';

import { divisors, bigSumMany } from './helpers/index.js';

export function problem0021() {
  const start = 1;
  const limit = 10000;

  const data = {};

  for (let i = start; i <= limit; i++) {
    data[i] = `${divisors(i).reduce((x, y) => x + y, 0) - i}`;
  }

  const amicableNumbers = [];

  Object.entries(data).forEach((entry) => {
    const [index, value] = entry;

    if (
      value &&
      data[index] &&
      data[data[index]] &&
      index !== data[index] &&
      index === data[data[index]]
    ) {
      amicableNumbers.push(`${index}`);
    }
  });

  logger.info(`result`, data);
  logger.info(`amicableNumbers`, amicableNumbers);

  return bigSumMany(amicableNumbers);
}

export default { problem0021 };
