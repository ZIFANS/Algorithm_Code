// 第一想法就是把奇数，偶数各放在一个链表里面。然后把奇数的尾节点指向偶数的头结点。
var oddEvenList = function(head) {
    if(!head)
        return null;
    let odd = head, even = head.next, evenHead = even;
    while(even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};
