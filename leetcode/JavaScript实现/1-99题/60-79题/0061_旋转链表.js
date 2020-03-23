// 1、先成环，然后断表
var rotateRight = function(head, k) {
    if (!head)
        return null;
    
    let cur = head, temp = null, len = 0;

    // 统计链表长度，并且将链表成环
    while (cur) {
        ++len;
        if (!cur.next) {
            cur.next = head;
            break;
        }
        cur = cur.next;
    }

    k = k % len;

    while (k++ < len) {
        k === len && (temp = head);
        head = head.next;
    }

    // 断开链表
    temp.next = null;

    return head;
};