// 自己的代码 与LeetCode 105相同
// 只要有中序和其他遍历的序列，就可以确定一颗二叉树
// 1. 递归：
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0 && preorder.length === 0)
        return null;
    let root = {};
    root.val = preorder[0];
    let rootIdxInOrder = inorder.indexOf(root.val);

    //左子树的中序遍历
    let leftTreeInOrder = inorder.slice(0, rootIdxInOrder);
    //左子树的先序遍历 
    let leftTreePreOrder = preorder.slice(1, leftTreeInOrder.length + 1);
    root.left = buildTree(leftTreePreOrder, leftTreeInOrder);

    //右子树的中序遍历
    let rightTreeInOrder = inorder.slice(rootIdxInOrder + 1);
    //右子树的先序遍历
    let rightTreePreOrder = preorder.slice(rootIdxInOrder + 1);
    root.right  = buildTree(rightTreePreOrder, rightTreeInOrder);

    return root;
};

// 2.递归优化，简化代码,更好理解
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0)
        return null;
    
    let rootVal = preorder[0];
    let node = new TreeNode(rootVal);
    let i = inorder.indexOf(rootVal); // 中序遍历中跟节点的下标

    node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
    
    return node;
};
