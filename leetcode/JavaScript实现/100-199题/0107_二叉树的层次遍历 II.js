// 1、类型层次遍历。从上到下，然后翻转
var levelOrderBottom = function(root) {
    let ans = [];
    let queue = [root];

    if (!root)
        return [];
        
    while (queue.length) {
        let temp = [];
        let data = [];
        while (queue.length) {
            let pop = queue.shift();
            data.push(pop.val);

            if (pop.left)
                temp.push(pop.left);
            if (pop.right)
                temp.push(pop.right);
        }
        queue = temp;
        ans.push(data);
    }

    return ans.reverse();
};