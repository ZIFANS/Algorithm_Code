// 自己的代码
// 第一想法就是递归
var invertTree = function(root) {
    if(root === null)
        return null;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

// 后面看到题解中，有人有解构，可以简化代码
var invertTree = function(root) {
    if(root) {
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    }
    return root
};
