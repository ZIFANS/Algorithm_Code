// 与LeetCode第二题两数相加一样，可以参考那道题
var addTwoNumbers = function(l1, l2) {
    if (!l1)
        return l2;
    if (!l2)
        return l1;
    
    l1.val = l1.val + l2.val;
    if (l1.val > 9) {
        l1.val -= 10;
        if (l1.next && l2.next) {
            l1.next.val++;
        } else if (!l1.next) {
            l1.next = new ListNode(1);
        } else if (!l2.next) {
            l2.next = new ListNode(1);
        }
    }   
    l1.next = addTwoNumbers(l1.next, l2.next);
    return l1;
};