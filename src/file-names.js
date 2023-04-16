const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let outputArr = [...names];
  outputArr.forEach((el, indx) => {
    let arr = outputArr.slice(0, indx).filter((file) => file === el);
    if (arr.length > 0) {
      outputArr[indx] = `${el}(${arr.length})`
      for (let i = 1; outputArr.indexOf(outputArr[indx]) !== indx; i++) {
        outputArr[indx] = `${el}(${arr.length + i})`
      }
    };
  })
  return outputArr;
}

module.exports = {
  renameFiles
};
