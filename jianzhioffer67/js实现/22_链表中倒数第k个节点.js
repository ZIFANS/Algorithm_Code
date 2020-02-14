// 自己代码，第一想法就是快慢指针，这里遍历了两次
var getKthFromEnd = function(head, k) {
    let fast = head;
    let slow = head;

    while (k--) {
        fast = fast.next;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};


// 遍历一次
var getKthFromEnd = function(head, k) {
    let i = 0;
    let fast = head;
    let slow = head;
    while (fast) {
        if (i >= k) {
            slow = slow.next;
        }
        fast = fast.next;
        ++i;
    }
    return i < k ? null : slow;
};