// 第一想法就是递归 一次AC
var maxDepth = function(root) {
    if(root === null)
        return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return left > right ? left + 1 : right + 1;
};
