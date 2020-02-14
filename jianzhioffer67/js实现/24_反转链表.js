// 自己的代码
// 思想就是：头插
var reverseList = function(head) {
    let dummp = new ListNode(null);
    dummp.next = head;
    let pre = dummp, p = dummp.next;
    pre.next = null;
    while (p) {
        let temp = p.next;
        p.next = pre.next;
        pre.next = p;
        p = temp;
    }
    return dummp.next;
};