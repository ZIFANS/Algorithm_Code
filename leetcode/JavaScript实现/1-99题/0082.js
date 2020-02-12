// 自己的代码 ；第一想法就是非递归 一次循环搞定
var deleteDuplicates = function(head) {
    if(!head || !head.next)
        return head;
    let dummp = new ListNode(null);
    dummp.next = head;
    let pre = dummp, p = pre.next, chongfu = false;
    while(p.next) {
        if(p.val === p.next.val) {
            p = p.next;
            chongfu = true;
            if(!p.next) {
                pre.next = p.next;
                break;
            }
        } else if(chongfu) {
            pre.next = p.next;
            p = pre.next;
            chongfu = false;
        } else {
            pre = pre.next;
            p = pre.next;
        }
    }
    return dummp.next;
};

