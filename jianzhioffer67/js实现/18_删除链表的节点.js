// 1. 用个哑结点
var deleteNode = function(head, val) {
    if (!head)
        return null;
    
    let dummy = new ListNode(null);
    dummy.next = head;
    let pre = dummy, cur = head;

    while (cur) {
        if (cur.val === val) {
            pre.next = cur.next;
            return dummy.next;
        }
        pre = pre.next;
        cur = cur.next;
    }
};

// 2.递归
var deleteNode = function(head, val) {
    if (head.val === val)
        return head.next;

    /**
     * 假设【1，2，3】，目标值是2
     * 当前head是1.
     * 本来head.next是2,但是调用deletenode函数的时候刚刚好2==2,把2（head）的下一个值3的指针返回回去
     * 所以head.next = 3
     * 1->3
     * 
    */
    head.next = deleteNode(head.next, val);

    return head;
};
