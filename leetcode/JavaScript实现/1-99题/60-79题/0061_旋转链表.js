// 1、先成环，然后断表
var rotateRight = function(head, k) {
    if (!k || !head)
        return head;
    let len = 1, prev = head;

    // 计算链表长度
    while (prev.next) {
        prev = prev.next;
        ++len;
    }

    // 成环
    prev.next = head;
    let offset = len - (k % len);

    for (let i = 0; i < offset; ++i) {
        prev = prev.next;
    }

    // 断表
    let dummp = prev.next;
    prev.next = null;

    return dummp;
};