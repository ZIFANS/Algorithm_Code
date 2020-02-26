// 自己的想法也是找到中间的节点，但是没AC掉，看了别人想法AC了
var reorderList = function(head) {
    if (!head || !head.next)
        return;
    // 1. 快慢指针找到链表中点
    let node1 = head, node2 = head.next;
    while (node2 && node2.next) {
        node1 = node1.next;
        node2 = node2.next.next;
    }
    // 后半部分链表
    node2 = node1.next;
    // 注意，这一步很重要，node1.next = null，之后node1 = head，才能使得node1只保留链表前半部分
    node1.next = null;
    node1 = head;
    // 2. 翻转后半部分链表
    let prev = null;
    let cur = node2;
    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    // 3.前后两部分链表合并(前后部分长度相同或者后半部分多一个
    node2 = prev;
    while (node2) {
        let next1 = node1.next;
        let next2 = node2.next;
        node1.next = node2;
        node2.next = next1;
        node1 = next1;
        node2 = next2;
    }
};


