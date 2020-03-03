/*
思想：
把链表反转过来
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1) 
        return l2;
    if(!l2)
        return l1;
    l1.val = l1.val + l2.val;
    if(l1.val > 9) {
        l1.val -= 10;
        // l1.next和l2.next都不等于null 
        // 进位数据保存到l1.next或l1.next都行
        // l1.next为null 保存到l1.next
        // l2.next为null 保存到l2.next
        if(l1.next != null && l2.next != null)
            l1.next.val++;
        else if(l1.next === null)
            l1.next = new ListNode(1);
        else if(l2.next === null)
            l2.next = new ListNode(1);
    }
    l1.next = addTwoNumbers(l1.next, l2.next);
    return l1;
};