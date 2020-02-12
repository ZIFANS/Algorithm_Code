
// 自己的代码 也是第一想法，也算出链表的长度，然后定位到要删除节点的前一个节点
var removeNthFromEnd = function(head, n) {
    let dummp = new ListNode();
    dummp.next = head;
    let len = 0;
    let first = head;
    while(first) {
        len++;
        first = first.next;
    }
    len = len - n;
    first = dummp;
    while(len !== 0) {
        len--;
        first = first.next;
    }
    first.next = first.next.next;
    return dummp.next;
};