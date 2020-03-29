// 1、递归 最基本的
var preorderTraversal = function(root) {
    let ans = [];

    let preOrder = (temp, arr) => {
        if (temp == null)
            return;

        arr.push(temp.val);
        preOrder(temp.left, arr);
        preOrder(temp.right, arr);

        return arr;
    };

    preOrder(root, ans);

    return ans;
};

// 2、迭代 考研也经常写非递归的
var preorderTraversal = function(root) {
    let ans = [];
    let stack = [];

    if (!root)
        return [];
    stack.push(root);

    while (stack.length) {
        let temp = stack.pop();
        ans.push(temp.val);

        if (temp.right)
            stack.push(temp.right);
        if (temp.left)
            stack.push(temp.left);
        /*
        这两条语句是上面额if 语句意思一样
        temp.right && stack.push(temp.right);
        temp.left && stack.push(temp.left);
        */
    }

    return ans;
};

