/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const x = matrix.length;
  const y = matrix[0].length;
  const arr = new Array(x);
  if (y > 0) {
    for (let i = 0; i < x; i++) {
      arr[i] = new Array(y);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      arr[i][j] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j] === true) { arr[i][j] += 1; }
      }
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j] === true) { arr[i][j] += 1; }
      }
      if (matrix[j + 1] !== undefined) {
        if (matrix[i][j + 1] === true) { arr[i][j] += 1; }
      }
      if (matrix[j - 1] !== undefined) {
        if (matrix[i][j - 1] === true) { arr[i][j] += 1; }
      }
      if (matrix[i + 1] !== undefined && matrix[j + 1] !== undefined) {
        if (matrix[i + 1][j + 1] === true) { arr[i][j] += 1; }
      }
      if (matrix[i + 1] !== undefined && matrix[j - 1] !== undefined) {
        if (matrix[i + 1][j - 1] === true) { arr[i][j] += 1; }
      }
      if (matrix[i - 1] !== undefined && matrix[j + 1] !== undefined) {
        if (matrix[i - 1][j + 1] === true) { arr[i][j] += 1; }
      }
      if (matrix[i - 1] !== undefined && matrix[j - 1] !== undefined) {
        if (matrix[i - 1][j - 1] === true) { arr[i][j] += 1; }
      }
    }
  }
  return arr;
}

module.exports = minesweeper;
