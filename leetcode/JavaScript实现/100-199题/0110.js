function TreeHeight(root) {
    if (!root)
        return 0;
    return Math.max(TreeHeight(root.left), TreeHeight(root.right)) + 1;
}
var isBalanced = function(root) {
    if (!root)
        return true;
    let leftHeight = TreeHeight(root.left);
    let rightHeight = TreeHeight(root.right);
    let diff = leftHeight - rightHeight;
    if (diff > 1 || diff < -1)
        return false;
    return isBalanced(root.left) && isBalanced(root.right);
};