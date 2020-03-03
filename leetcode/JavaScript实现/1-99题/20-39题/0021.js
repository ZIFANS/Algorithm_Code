// 这是我第一想法，迭代
var mergeTwoLists = function(l1, l2) {
  let newHead = new ListNode(-1);
  let prev = newHead;
  while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
          prev.next = l1;
          l1 = l1.next;
      } else {
          prev.next = l2;
          l2 = l2.next;
      }
      prev = prev.next;
  }
  prev.next = l1 === null ? l2 : l1;
  return newHead.next;
};

// 递归
var mergeTwoLists = function(l1, l2) {
    if(l1 === null)
        return l2;
    if(l2 === null)
        return l1;
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};