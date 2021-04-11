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
  const countList = {}; // значение -количество
  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split('.');
    let unreadyLetter = '';
    for (let j = 0; j < arr.length; j++) {
      unreadyLetter += `.${arr[arr.length - 1 - j]}`;
      const domain = unreadyLetter;
      if (!(domain in countList)) countList[domain] = 0;
      countList[domain]++;
    }
  }
  return countList;
}

module.exports = getDNSStats;
