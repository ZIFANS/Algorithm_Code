// 自己的代码，一次AC
// 创建一个新的数组，存链表的值。
// 没有看到题目的说明空间复杂度O(1)
var isPalindrome = function(head) {
    let dummp = new ListNode(null);
    dummp.next = head;
    let pre = dummp, p = pre.next;
    let a = [];
    while(p) {
        a.push(p.val);
        p = p.next;
    }
    return isPali(a);
};
function isPali(arr) {
    for(let i = 0; i < arr.length / 2; ++i) {
        if(arr[i] !== arr[arr.length - 1 - i]) 
            return false;
    }
    return true;
}

