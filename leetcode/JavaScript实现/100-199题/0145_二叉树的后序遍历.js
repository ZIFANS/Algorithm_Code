// 1、递归
var postorderTraversal = function(root) {
    let ans = [];

    let postOrder = (temp, arr) => {
        if (temp === null)
            return;
        postOrder(temp.left, arr);
        postOrder(temp.right, arr);
        ans.push(temp.val);
    };

    postOrder(root, []);

    return ans;
};

// 2、迭代 非递归实现
var postorderTraversal = function(root) {
    let stack = [];
    let ans = [];

    if (!root)
        return [];
    stack.push(root);

    while (stack.length !== 0) {
        let temp = stack.pop();
        ans.push(temp.val);
        if (temp.left !== null) 
            stack.push(temp.left);
        if (temp.right !== null) 
            stack.push(temp.right);
    }

    return ans.reverse();
};