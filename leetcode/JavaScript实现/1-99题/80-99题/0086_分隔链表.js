// 1、遍历两次的暴力法
var partition = function(head, x) {
    let p = head;
    let newHead = new ListNode(null);
    let end = newHead;

    while (p) {
        if (p.val < x) {
            let temp = new ListNode(p.val);
            end.next = temp;
            end = temp;
        }
        p = p.next;
    }

    p = head;
    
    while (p) {
        if (p.val >= x) {
            let temp = new ListNode(p.val);
            end.next = temp;
            end = temp;
        }

        p = p.next;
    }

    return newHead.next;
};