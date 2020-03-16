// 1.第一想法就是快慢指针，这里遍历了2次
var getKthFromEnd = function(head, k) {
    if (!head || k < 0)
        return null;

    let slow = head, fast = head;

    for (let i = 0; i < k; ++i) {
        fast = fast.next;
    }

    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};

// 2.也是双指针，slow, fast两个指针，让fast先走k步，然后slow, fast一起走，直到fast为null
// 但是只需要一次遍历
var getKthFromEnd = function(head, k) {
    let slow = head, fast = head;
    let count = 0;

    while (fast) {
        if (count >= k) {
            slow = slow.next;
        }
        ++count;
        fast = fast.next;
    }

    return count < k ? null : slow;
};
