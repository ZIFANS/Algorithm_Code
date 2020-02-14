// 自己的代码
// 最简单的层序遍历
var levelOrder = function(root) {
    let queue = [], ans = [];
    if (!root)
        return ans;
    queue.push(root);
    ans.push(root.val);
    while (queue.length) {
        let temp = queue.shift();
        if (temp.left) {
            ans.push(temp.left.val);
            queue.push(temp.left);
        }
        if (temp.right) {
            ans.push(temp.right.val);
            queue.push(temp.right);
        }
    }
    return ans;
};