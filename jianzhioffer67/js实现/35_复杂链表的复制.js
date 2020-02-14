// 别人的思想，但是已经掌握了
var copyRandomList = function(head) {
    if (!head)
        return null;
    let p = head;
    // 复制每一个next结点
    while (p) {
        let newNode = new Node(p.val);
        newNode.next = p.next;
        p.next = newNode;
        p = newNode.next;
    }
    p = head;
    // 复制每个random结点
    while (p) {
        p.next.random = (p.random !== null) ? p.random.next : null;
        p = p.next.next;
    }
    // 删除旧的
    let oldList = head, newList = head.next;
    let head_old = head.next;
    while (oldList !== null) {
        oldList.next = oldList.next.next;
        newList.next = (newList.next !== null) ? newList.next.next : null;
        oldList = oldList.next;
        newList = newList.next;
    }
    return head_old;
};
