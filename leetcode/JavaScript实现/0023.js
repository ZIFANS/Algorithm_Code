// 自己的代码
// 思想：之前做过一个合并两个链表，这里就是合并每两个链表。
var mergeKLists = function(lists) {
    let len = lists.length, ans = new ListNode(null);
    if(len === 0)
        return null;
    if(len === 1)
        return lists[0];
    ans = mergeTwoLists(lists[0], lists[1]);
    for(let i = 2; i < len; ++i) {  
        let temp = mergeTwoLists(ans, lists[i]);
        ans = temp;
    }
    return ans;
};
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