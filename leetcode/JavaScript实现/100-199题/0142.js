// 判断环的第一个入口节点。141是判断有无环。
var detectCycle = function(head) {
    let fast = head, slow = head;
    while (true) {
        if (fast === null || fast.next === null)
            return null;
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow)
            break;
    }
    fast = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
};