// 做过剑指offer上的
var copyRandomList = function(head) {
    if (!head)
        return null;
    let p = head;
    while (p) {
        let newNode = new Node(p.val);
        newNode.next = p.next;
        p.next = newNode;
        p = newNode.next;
    }
    p = head;
    while (p) {
        p.next.random = (p.random !== null) ? p.random.next : null;
        p = p.next.next;
    }
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
