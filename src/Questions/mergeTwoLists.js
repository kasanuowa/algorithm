function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let res = new ListNode();
  const tem = res;
  while (l1 || l2) {
    if (!l1) {
      res.next = l2;
      return tem.next;
    }

    if (!l2) {
      res.next = l1;
      return tem.next;
    }

    if (l1.val > l2.val) {
      res.next = l2;
      l2 = l2.next;
    } else {
      res.next = l1;
      l1 = l1.next;
    }

    res = res.next;
  }

  return tem.next;
};

export default mergeTwoLists;
