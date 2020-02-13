// 自己的代码
// 思想：就是求每个左右子树的高度差 的绝对值小于1
function maxDepth (root) {
    if (!root)
        return 0;
    return Math.max( maxDepth(root.left), maxDepth(root.right)) + 1;
};
var isBalanced = function(root) {
    if (!root)
        return true;
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    let diff = leftHeight - rightHeight;
    if (diff > 1 || diff < -1)
        return false;
    return isBalanced(root.left) && isBalanced(root.right);
};