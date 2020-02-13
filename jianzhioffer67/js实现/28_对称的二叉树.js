// 自己的代码
// 递归，对称二叉树
var isSymmetric = function(root) {
    if (!root)
        return true;
    return Judge(root.left, root.right);
};
function Judge(left, right) {
    if (!left && !right)
        return true;
    if (!left || !right)
        return false;
    return left.val === right.val && Judge(left.left, right.right) && Judge(left.right, right.left);
}