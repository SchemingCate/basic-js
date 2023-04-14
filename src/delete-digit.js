const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let inputNumberStr = '' + num;
  let deletedDigitNumbersArr = [];
  for (let i = 0; i < inputNumberStr.length; i++) {
    let currNum = inputNumberStr.split('');
    currNum.splice(i, 1);
    deletedDigitNumbersArr.push(currNum.join(''));
  }
  return Number(deletedDigitNumbersArr.sort((a,b) => b - a)[0]);
}

module.exports = {
  deleteDigit
};
