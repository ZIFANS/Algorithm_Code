// 自己的代码
// 1. 从头到尾遍历，然后翻转数组。，
var reversePrint = function(head) {
    let ans = [];

    while (head) {
        ans.push(head.val);
        head = head.next;
    }

    return ans.reverse();
};

// 第二种：递归
var reversePrint = function(head) {
    if (!head)
        return [];
    
    let ans = reversePrint(head.next);
    ans.push(head.val);

    return ans;
};

