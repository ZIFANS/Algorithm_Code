// 自己的代码
// 就是中序遍历的非递归实现
var kthSmallest = function(root, k) {
    let stack = [];
    let p = root, count = 0;
    while(p || stack.length > 0) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        if(stack.length > 0) {
            p = stack.pop();
            ++count;
            if(count === k)
                return p.val;
            p = p.right;
        }
    }
};