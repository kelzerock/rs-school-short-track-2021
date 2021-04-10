/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.toString().split('-');
  if (arr.length !== 6) {
    return false;
  }
  arr = arr.join('').split('');
  for (let i = 0; i < arr.length; i++) {
    let integer = 0;
    let liter = 0;
    if (arr[i] >= 0 && arr[i] <= 9) {
      integer = 1;
    }
    if (arr[i] >= 'A' && arr[i] <= 'F') {
      liter = 1;
    }
    if (integer === 0 && liter === 0) return false;
  }
  return true;
}

module.exports = isMAC48Address;
