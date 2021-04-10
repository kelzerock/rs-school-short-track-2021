/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  function search(arr, val, start, end) {
    const center = Math.floor((start + end) / 2);
    if (val === arr[center]) {
      return center;
    } if (end - 1 === start) {
      return Math.abs(arr[start] - val)
      > Math.abs(arr[end] - val) ? end : start;
    } if (val > arr[center]) {
      return search(arr, val, center, end);
    } if (val < arr[center]) {
      return search(arr, val, start, center);
    } return false;
  }
  const result = search(array, value, 0, array.length);
  return Number(result);
}

module.exports = findIndex;
