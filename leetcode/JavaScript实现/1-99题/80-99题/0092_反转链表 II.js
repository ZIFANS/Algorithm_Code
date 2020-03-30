// 1、简单的思路
var reverseBetween = function(head, m, n) {
    let duumy = new ListNode(null);
    duumy.next = head;
    let pre = duumy, p = duumy.next;

    let index = 0;
    while (index < m - 1) {
        pre = p;
        p = p.next;
        ++index;
    }
    
    for (let i = 0; i < n - m; ++i) {
        let temp = p.next;
        p.next = p.next.next;

        temp.next = pre.next;
        pre.next = temp;
    }

    return duumy.next;
};
