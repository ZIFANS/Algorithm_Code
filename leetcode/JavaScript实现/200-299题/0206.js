// 自己的代码
// 就是头插法，击败了100%的人。
var reverseList = function(head) {
    let dummp = new ListNode(null);
    dummp.next = head;
    let pre = dummp, p = pre.next;
    pre.next = null;
    while(p) {
        let temp = p.next;
        p.next = pre.next;
        pre.next = p;
        p = temp;
    }
    return pre.next;
};
