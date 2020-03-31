// 1、递归
var hasPathSum = function(root, sum) {
    if (!root)
        return false;
    if (root.left === null && root.right === null && root.val === sum) {
        return true;
    }

    let left = hasPathSum(root.left, sum - root.val);
    let right = hasPathSum(root.right, sum - root.val);

    return left || right;
};

// 2、迭代
var hasPathSum = function (root, sum) {
    if (!root)
        return false;
    let stack = [root];
    let sumStack = [sum - root.val];

    while (stack.length > 0) {
        let node = stack.pop();
        let sum = sumStack.pop();
        if (node.left === null && node.right === null && sum === 0)
            return true;
        if (node.right) {
            stack.push(node.right);
            sumStack.push(sum - node.right.val);
        }   
        if (node.left) {
            stack.push(node.left);
            sumStack.push(sum - node.left.val);
        }
    }

    return false;
};