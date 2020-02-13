// 开始题目看错了
var deleteNode = function(head, val) {
    if (head === null)
        return head;
    let dummp = new ListNode(null);
    dummp.next = head;
    let curNode = dummp;
    while (curNode.next) {
        if (curNode.next.val === val) {
            curNode.next = curNode.next.next;
            return dummp.next;
        }
        curNode = curNode.next;
    }
};


