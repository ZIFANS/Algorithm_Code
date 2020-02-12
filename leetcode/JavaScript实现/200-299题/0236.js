/*
从根节点开始遍历，如果p和q中的任一个和root匹配，那么root就是最低公共祖先。 
如果都不匹配，则分别递归左、右子树，如果有一个 节点出现在左子树，并且另一个节点出现在右子树，则root就是最低公共祖先.  
如果两个节点都出现在左子树，则说明最低公共祖先在左子树中，否则在右子树。
*/

var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q)
        return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left !== null && right !== null)
        return root;
    return left !== null ? left : right;
};