// 别人的思想
// 我开始没看懂题目，其实就是把一个树，转化为一个字符串，然后根据字符串转化为一个树。
// 用层序遍历就可以了，挺简单。
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root)
        return "";
    let ans = [];
    let node = root, queue = [root];
    while(queue.length > 0) {
        node = queue.shift();
        if(node === null) {
            ans.push("null");
        } else {
            ans.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return ans.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// 2 * i + 1, 2 * i + 2
var deserialize = function(data) {
    if(data === "")
        return null;
    let arr = data.split(',');
    let root = new TreeNode(arr.shift());
    let queue = [root];
    while(queue.length > 0) {
        let node = queue.shift();
        if(arr.length <= 0)
            break;
        let left = arr.shift();
        if(left === "null") {
            node.left = null;
        } else {
            node.left = new TreeNode(left);
            queue.push(node.left);
        }
        if(arr.length <= 0)
            break;
        let right = arr.shift();
        if(right === "null") {
            node.right = null;
        } else {
            node.right = new TreeNode(right);
            queue.push(node.right);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */