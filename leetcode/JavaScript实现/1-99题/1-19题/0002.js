// 第一种想法：递归。
var addTwoNumbers = function(l1, l2) {
    if (!l1)
        return l2;
    if (!l2)
        return l1;
    
    l1.val = l1.val + l2.val;
    // l1.next和l2.next都不等于null 
    // 进位数据保存到l1.next或l1.next都行
    // l1.next为null 保存到l1.next
    // l2.next为null 保存到l2.next
    if (l1.val > 9) {
        l1.val -= 10;
        if (l1.next !== null && l2.next) {
            l1.next.val++;
        } else if (l1.next === null)
            l1.next = new ListNode(1);
        else if (l2.next === null)
            l2.next = new ListNode(1);
    }
    l1.next = addTwoNumbers(l1.next, l2.next);
    
    return l1;
};
// 第二种想法：迭代循环。
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let p = l1, q = l2, cur = dummy;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if (p !== null)
            p = p.next;
        if (q !== null)
            q = q.next;
    }
    if (carry > 0)
        cur.next = new ListNode(carry);
    return dummy.next;
};


