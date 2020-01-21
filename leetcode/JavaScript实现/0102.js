// 别人的代码
var levelOrder = function(root) {
    if(!root)   
        return [];
    let ans = [], queue = [root];
    while(queue.length) {
        let arr = [], temp = [];
        while(queue.length) {
            let cur = queue.shift();
            arr.push(cur.val);
            if(cur.left)    
                temp.push(cur.left);
            if(cur.right)   
                temp.push(cur.right);
        }
        queue = temp;
        ans.push(arr);
    }
    return ans;
};
