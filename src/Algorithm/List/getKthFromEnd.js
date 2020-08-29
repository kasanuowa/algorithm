/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let p = head;
  let q = head;
  while (p) {
    p = p.next;
    if (k > 0) {
      k--;
    } else {
      q = q.next;
    }
  }
  return q;
};

export default getKthFromEnd;
