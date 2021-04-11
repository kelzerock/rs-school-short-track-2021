/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  function printList(list) {
    const arr = [];
    let tmp = list;
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
    return arr;
  }
  const result = [];
  if (Array.isArray(l) === true) {
    for (let i = 0; i < l.length; i++) {
      if (l[i] !== k) { result.push(l[i]); }
    }
  } else {
    const resultNo = printList(l);
    for (let i = 0; i < resultNo.length; i++) {
      if (resultNo[i] !== k) { result.push(resultNo[i]); }
    }
  }

  let resultList = { next: null };
  for (let i = result.length; i; i--) {
    resultList.value = result.pop();
    resultList = { next: resultList };
  }
  resultList = resultList.next;
}

module.exports = removeKFromList;
