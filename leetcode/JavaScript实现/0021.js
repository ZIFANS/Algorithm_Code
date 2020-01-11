// 这是我第一想法，但是代码时借鉴别人的，我这个阶段对js使用链表的还不是很熟悉
var mergeTwoLists = function(l1, l2) {
    let result = tmp = new ListNode();
  
    while (l1 || l2) {
      let val;
      if (l1 === null) {
        tmp.next = l2;
        break;
      }
      if (l2 === null) {
        tmp.next = l1;
        break;
      }
  
      if (l1.val > l2.val) {
        val = l2.val;
        l2 = l2.next;
      } else {
        val = l1.val;
        l1 = l1.next;
      }
  
      let node = new ListNode(val);
      tmp.next = node;
      tmp = node;
    }
  
    return result.next;
};

// 自己的代码
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