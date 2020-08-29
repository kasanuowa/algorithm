/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let add = 0;
  let current = new ListNode();
  const res = current;
  while (l1 || l2 || add) {
    if (!l1) l1 = new ListNode(0);
    if (!l2) l2 = new ListNode(0);
    const val = l1.val + l2.val + add;
    if (val >= 10) {
      add = 1;
    } else {
      add = 0;
    }
    current.next = new ListNode(val % 10);
    current = current.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  return res.next;
};

export default addTwoNumbers;
