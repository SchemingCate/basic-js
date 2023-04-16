const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
let strArr = str.split('');
let outputArr = []
let dublicatesCount = 1;
for (let i = 0; i < strArr.length; i++) {
  if (strArr[i] === strArr[i + 1]) {
    dublicatesCount += 1;
    continue;
  }
  if (strArr[i - 1] === strArr[i]) {
    outputArr.push(`${dublicatesCount}${strArr[i]}`);
    dublicatesCount = 1;
    continue;
  }
  outputArr.push(strArr[i]);
}
return outputArr.join('');
}

module.exports = {
  encodeLine
};
