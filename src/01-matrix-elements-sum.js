/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  function seeZero(x, i) {
    let z = 0;
    let result = 0;
    while (z < x.length) {
      if (x[z][i] !== 0) {
        result += x[z][i];
        z++;
      } else {
        return result;
      }
    }
    return result;
  }
  let finish = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    finish += seeZero(matrix, i);
  }
  return finish;
}

module.exports = getMatrixElementsSum;
