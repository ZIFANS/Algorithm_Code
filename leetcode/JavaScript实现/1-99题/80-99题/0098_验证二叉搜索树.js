// 1、递归, 别人的想法，就是三行 感觉非常好
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if (!root) 
        return true;
    if (root.val <= min || root.val >= max) 
        return false;

    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};




// 2、中序遍历， 看序列是否是升序,是则true,否则是false
var isValidBST = function(root) {
    let queue = [];
    // 递归中序遍历
    let inOrder = function (root) {
        if (!root)
            return;
        if (root.left)
            inOrder(root.left);
        if (root)
            queue.push(root.val);
        if (root.right)
            inOrder(root.right);
    };

    inOrder(root);

    // 判断是否是升序,是就返回true,否则返回false;
    for (let i = 0; i < queue.length; ++i) {
        if (queue[i] >= queue[i + 1])
            return false;
    }

    return true;
};