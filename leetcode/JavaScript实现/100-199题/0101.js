// 第一想法就是递归，考研算法中经常有这样的
var isSymmetric = function(root) {
    if(root === null)
        return true;
    return Judge(root.left, root.right);
};
function Judge(left, right) {
    if(left === null && right === null)
        return true;
    if(left === null || right === null)
        return false;
    return left.val === right.val && Judge(left.left, right.right) && Judge(left.right, right.left);
}
