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
  const result = [];
  let i = 0;
  while (i < str.length) {
    const lastLetter = result[result.length - 1];
    let clearLetter;
    if (lastLetter !== undefined) {
      clearLetter = lastLetter.slice(lastLetter.length - 1, lastLetter.length);
    } else { clearLetter = 0; }
    if (str[i] !== clearLetter) {
      if (str[i] !== str[i + 1]) {
        result.push(str[i]);
      } else {
        let count = 1;
        let x = 0;
        while (str[i] === str[i + 1 + x]) {
          x++;
        }
        count += x;
        result.push(count + str[i]);
      }
    }
    i++;
  }
  return result.join('');
}

module.exports = encodeLine;
