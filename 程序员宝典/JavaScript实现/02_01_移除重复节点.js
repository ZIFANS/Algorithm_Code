// 1、用额外的Map
var removeDuplicateNodes = function (head) {
    if (!head || !head.next)
        return head;
    
    let cur = head;
    let map = new Map();
    map.set(cur.val, true);

    while (cur.next !== null) {
        let temp = cur.next;

        if (map.has(temp.val)) {
            cur.next = temp.next;
        } else {
            map.set(temp.val, true);
            cur = cur.next;
        }
    }

    return head;
};

// 2、不用额外的空间
