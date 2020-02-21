// 递归
var pathSum = function(root, sum) {
    let ans = [];
    const recursive = function (node, route, localSum) {
        if (!node)  return;
        route.push(node.val);
        // 如果是叶节点 同时路径和等于sum
        if (!node.left && !node.right && node.val + localSum === sum) {
            ans.push(route.slice());
        } else {
            if (node.left)
                recursive(node.left, route.slice(), localSum + node.val);
            if (node.right) 
                recursive(node.right, route.slice(), localSum + node.val);
        }
    }            
    recursive(root, [], 0);
    return ans;
};


// 非递归

