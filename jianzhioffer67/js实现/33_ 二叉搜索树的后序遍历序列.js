// 第一种递归
var verifyPostorder = function (postorder) {
    let len = postorder.length;
    if (len === 0)
        return true;
    return help(postorder, 0, len - 1);
};
function help(sequence, start, end) {
    if (start >= end)
        return true;
    let root = sequence[end];
    let flag = start;
    while (flag <= end && sequence[flag] < root) {
        ++flag;
    }
    for (let i = flag; i < end; ++i) {
        if (sequence[i] < sequence[end]) {
            return false;
        }
    }
    let ansLeft = help(sequence, start, flag - 1);
    let ansRight = help(sequence, flag, end - 1);
    return ansLeft && ansRight;
}


// 还是递归
var verifyPostorder = function(postorder) {
    let len = postorder.length;
    if (len < 2)
        return true;
    let root = postorder[len - 1];
    let cur = 0;
    // 左子树的数量
    for (; cur < len - 1 && postorder[cur] < root; ++cur) {}
     // 这里要检查右子树中的值是否满足条件
    for (let i = cur; i < len - 1; ++i) {
        if (postorder[i] < root)
            return false;
    }
    return verifyPostorder(postorder.slice(0, cur)) && 
            verifyPostorder(postorder.slice(cur, len - cur - 1));
};
