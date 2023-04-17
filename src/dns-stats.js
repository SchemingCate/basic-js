const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsArr = []
  domains.forEach(domain => domainsArr.push(domain.split('.').reverse()));
  outputObj = {};
  domainsArr.forEach(domainsArr => {
    let currKey = '.';
    for (let i = 0; i < domainsArr.length; i++) {
      currKey += domainsArr[i];
      outputObj[currKey] = (Object.hasOwn(outputObj, currKey)) ? outputObj[currKey] + 1 : 1;
      currKey += '.';
    }
  });
  return outputObj;
}

module.exports = {
  getDNSStats
};
