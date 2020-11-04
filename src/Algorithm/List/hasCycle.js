/**
 * 141. 环形链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let p = head;
  let q = head;
  while (q) {
    if (q.next === null) return false;
    q = q.next.next;
    p = p.next;
    if (q === p) return true;
  }
  return false;
};

export default hasCycle;
