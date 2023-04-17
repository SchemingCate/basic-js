const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = (options['repeatTimes']) ? options['repeatTimes'] : 1;
  let separator = (options['separator']) ? options['separator'] : '+';
  let addition = (options['addition'] !== undefined) ? options['addition'] : '';
  let additionRepeatTimes = (options['additionRepeatTimes']) ? options['additionRepeatTimes'] : (options['addition']) ? 1 : 0;
  let additionSeparator = (options['additionSeparator']) ? options['additionSeparator'] : '|';
  let output = [];
  for (let i = 0; i < repeatTimes; i++){
    
    let currAdditions = [];
    for (let j = 0; j < additionRepeatTimes; j++) {
      currAdditions.push(`${addition}`);
    }
    output.push(`${str}` + currAdditions.join(additionSeparator));
  }
  return output.join(separator);
}

module.exports = {
  repeater
};
