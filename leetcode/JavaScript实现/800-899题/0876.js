// 1、遍历两遍：第一趟算出链表长度 len ,第二趟返回len / 2位置
var middleNode = function(head) {
    // 求链表长度
    let listLen = (list) => {
        let len = 0;

        while (list) {
            ++len;
            list = list.next;
        }

        return len;
    };

    let len = listLen(head);
    let middle = Math.floor(len / 2);

    // 遍历到第len / 2位置
    for (let i = 0; i < middle; ++i) {
        head = head.next;
    }

    return head;
};

// 2、一次遍历，快慢指针
/*
用两个指针 slow 与 fast 一起遍历链表。slow 一次走一步，fast 一次走两步。
那么当 fast 到达链表的末尾时，slow 必然位于中间。
*/
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

