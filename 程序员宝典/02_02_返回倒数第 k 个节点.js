// 1、快慢指针
var kthToLast = function(head, k) {
    let slow = head, fast = head;

    for (let i = 0; i < k; ++i) {
        fast = fast.next;
    }

    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow.val;
};