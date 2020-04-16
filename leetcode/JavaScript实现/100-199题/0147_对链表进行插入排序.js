var insertionSortList = function(head) {
    let dummy = new ListNode(null);
    dummy.next = head;
    let p = dummy.next;

    while (p && p.next) {
        if (p.next.val >= p.val) {
            p = p.next;
            continue;
        }

        let pre = dummy;
        while (pre.next.val < p.next.val) {
            pre = pre.next;
        }

        let temp = p.next;
        p.next = temp.next;
        temp.next = pre.next;
        pre.next = temp;
    }

    return dummy.next;
};