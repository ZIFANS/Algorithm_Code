// 自己的代码
// 第一种想法：从头到尾遍历，然后翻转数组。
var reversePrint = function(head) {
    let ans = [];
    let p = head;
    while (p) {
        ans.push(p.val);
        p = p.next;
    }
    return ans.reverse();
};


// 第二种：递归

