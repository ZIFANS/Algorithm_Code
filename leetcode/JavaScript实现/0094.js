var inorderTraversal = function(root) {
    let stack = [];
    let ans = [];
    let p = root;
    while(p || stack.length > 0) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        if(stack.length > 0) {
            p = stack.pop();
            ans.push(p.val);
            p = p.right;
        }
    }
    return ans;
};
