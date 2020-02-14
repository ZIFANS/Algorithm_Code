// 自己的代码
// 只要有中序和其他遍历的序列，就可以确定一颗二叉树
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
