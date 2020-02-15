// 自己的代码
// 奇数层，从左到右
// 偶数层，从右到左
var levelOrder = function(root) {
    if (!root)
        return [];
    let ans = [], lRoot = [], rRoot = [];
    lRoot.push(root);
    while (lRoot.length !== 0 || rRoot.length !== 0) {
        let temp = [];
        if (lRoot.length !== 0) {
            while (lRoot.length !== 0) {
                let cur = lRoot.pop();
                temp.push(cur.val);
                if (cur.left !== null) 
                    rRoot.push(cur.left);
                if (cur.right !== null)
                    rRoot.push(cur.right);
            }
        } else if (rRoot.length !== 0) {
            while (rRoot.length !== 0) {
                let cur = rRoot.pop();
                temp.push(cur.val);
                if (cur.right !== null) 
                    lRoot.push(cur.right);
                if (cur.left !== null)
                    lRoot.push(cur.left);
            }
        }   
        ans.push(temp);
    }
    return ans;
};
