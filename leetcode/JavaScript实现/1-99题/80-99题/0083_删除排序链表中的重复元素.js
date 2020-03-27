// 1、直接法，一遍遍历
var deleteDuplicates = function(head) {
    let cur = head;

    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }

    return head;
};

// 2、递归
var deleteDuplicates = function(head) {
    if (head === null || head.next === null)
        return head;
    
    head.next = deleteDuplicates(head.next);

    return head.val === head.next.val ? head.next : head;
};
