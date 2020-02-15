// 自己的代码
// 思想就是逆中序遍历
var kthLargest = function(root, k) {
    if (!root)
        return null;
    let stack = [], count = 0;
    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.right;
        } else {
            let temp = stack.pop();
            if (++count === k) {
                return temp.val;
            }
            root = temp.left;
        }
    }
    return null;
};
