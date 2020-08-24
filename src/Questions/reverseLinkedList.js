const List = function (val) {
  this.val = val;
  this.next = null;
};

const reverseLinkedList = head => {
  let prev = null;
  let current = head;
  while (current) {
    const tem = current.next;
    current.next = prev;
    prev = current;
    current = tem;
  }
  return prev;
};

export default reverseLinkedList;
