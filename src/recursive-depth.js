const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depthCount = 1) {
    if (!arr.some((el) => Array.isArray(el))) {
      return depthCount;
    }
    return arr.filter((el) => Array.isArray(el)).map((el) => this.calculateDepth(el, depthCount + 1)).sort((a, b) => b - a)[0];
  }
}

module.exports = {
  DepthCalculator
};
