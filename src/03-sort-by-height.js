/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const test = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      test.push(arr[i]);
    }
  }

  function sorting(a, b) {
    if (a > b) {
      return 1;
    } if (a === b) {
      return 0;
    } if (a < b) { return -1; } return false;
  }
  test.sort(sorting);
  const result = [];
  let x = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== -1) {
      result.push(test[x]);
      x += 1;
    } else { result.push(arr[j]); }
  }
  return result;
}
module.exports = sortByHeight;
