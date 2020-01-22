// 别人的思想：
// 第一层奇数，第二层偶数。奇数从左到右，偶数从右到左
var zigzagLevelOrder = function(root) {
    if(!root)
        return [];
    let ans = [], lRoot = [], rRoot = [];
    lRoot.push(root);
    while(lRoot.length !== 0 || rRoot.length !== 0) {
        let temp = [];
        if(lRoot.length !== 0) {
            while(lRoot.length !== 0) {
                let cur = lRoot.pop();  
                temp.push(cur.val);
                if(cur.left !== null)   // 这是是在第1,3,5..层吧遍历，将下一层从左子树到右子树入栈
                    rRoot.push(cur.left);
                if(cur.right !== null)   
                    rRoot.push(cur.right);
            }
        }
        else if(rRoot.length !== 0) {
            while(rRoot.length !== 0) {
                let cur = rRoot.pop();
                temp.push(cur.val);
                if(cur.right !== null)   // 这是是在第2,4,6..层吧遍历，将下一层从右子树到左子树入栈
                    lRoot.push(cur.right);
                if(cur.left !== null)   
                    lRoot.push(cur.left);
            }
        }
        ans.push(temp);
    }
    return ans;
};