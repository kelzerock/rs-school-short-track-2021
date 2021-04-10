/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  for (let i = 0; i < names.length; i++) {
    let count = 0;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === names[i]) {
        for (let x = 0; x < result.length; x++) {
          if (result[x] === names[i]) { count++; }
          const regex = /(\d*)$/;
          if (regex.test(result[x])) {
            if (result[x].slice(0, result[x].length - 3) === names[i]) {
              count++;
            }
          }
        }
      }
    }
    let summary;
    if (count === 0) {
      summary = names[i];
    } else {
      summary = `${names[i]}(${count})`;
    }
    result.push(summary);
  }
  return result;
}

module.exports = renameFiles;
