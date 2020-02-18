// 用了大部分人都用的递归
var isSubStructure = function(A, B) {
    if (!A || !B)
        return false;
    return isSubTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
function isSubTree(root1, root2) {
    if (!root2)
        return true;
    if (!root1)
        return false;
    if (root1.val !== root2.val) {
        return false;
    }
    return isSubTree(root1.left, root2.left) && isSubTree(root1.right, root2.right);
}