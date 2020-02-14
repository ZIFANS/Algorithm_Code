// 自己的代码
// 第一想法就是递归
var mergeTwoLists = function(l1, l2) {
    if (!l1)
        return l2;
    if (!l2)
        return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// 第二想法，迭代.
var mergeTwoLists = function(l1, l2) {
    if (!l1)
        return l2;
    if (!l2)
        return l1;
    let ans = new ListNode(null);
    let p = ans;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next
    }
    p.next = l1 ? l1 : l2;
    return ans.next;
};