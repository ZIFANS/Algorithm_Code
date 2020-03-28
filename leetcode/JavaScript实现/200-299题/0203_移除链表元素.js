// 1、一遍遍历
var removeElements = function(head, val) {
    let dummp = new ListNode(null);
    dummp.next = head;
    let pre = dummp, p = dummp.next;

    while (p) {
        if (p.val === val) {
            pre.next = p.next;
            //p = p.next;
        } else {
            pre = p;
            //p = p.next;
        }
        p = p.next;
    }

    return dummp.next;
};