const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr);
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let outputArr = [];
  let isNextDiscarded = false;
  for (let i = 0; i < arr.length; i++) {
    if (isNextDiscarded) {
      isNextDiscarded = false;
      continue;
    }
    switch (arr[i]) {
      case '--discard-next':
        isNextDiscarded = true;
        break;
      case '--discard-prev':
        if (outputArr[outputArr.length - 1] === arr[i - 1]) {
          outputArr.pop();
        }
        break;
      case '--double-next':
        outputArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (outputArr[outputArr.length - 1] === arr[i - 1]) {
          outputArr.push(arr[i - 1]);
        }
        break;
      default:
        outputArr.push(arr[i]);
    }
  }
  outputArr = outputArr.filter(el => el !== undefined);
  return outputArr;
}

module.exports = {
  transform
};
