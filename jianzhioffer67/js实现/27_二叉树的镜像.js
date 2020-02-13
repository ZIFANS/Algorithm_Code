// 自己的代码
// 思想就是翻转二叉树，左边的子树，变为右边的子树
var mirrorTree = function(root) {
    if (root) {
        [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)];
    }
    return root;
};