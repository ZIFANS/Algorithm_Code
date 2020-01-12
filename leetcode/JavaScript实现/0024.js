// 别人的思想
// 递归版
var swapPairs = function(head) {
    if(head === null || head.next === null)
        return head;
    let pNext = head.next;
    head.next = swapPairs(pNext.next);
    pNext.next = head;
    return pNext;
};


// 非递归版  好理解
var swapPairs = function(head) {
    let pre = new ListNode();
    pre.next = head;
    let temp = pre;
    while(temp.next !== null && temp.next.next !== null) {
        let start = temp.next, end = temp.next.next;
        temp.next = end;
        start.next = end.next;
        end.next = start;
        temp = start;
    }
    return pre.next;
};




