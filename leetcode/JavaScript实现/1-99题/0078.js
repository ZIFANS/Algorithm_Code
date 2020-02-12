/*
nums：[1,2,3]
初始化：res = []
i = 0
[1]
res = [ [],[1] ]
i = 1
[2],[1,2]
res = [ [],[1],[2],[1,2]]
i = 2
[3],[1,3],[2,3],[1,2,3]
res = [ [],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3] ]
总结
重复将新的元素加入到上一个结果集中的每个子集当中去，形成n个新的子集，再全部加入到结果集中去
*/

// 迭代
var subsets = function(nums) {
    let ans = [[]];
    for (let i = 0; i < nums.length; ++i) {
        let len = ans.length; 
        for (let j = 0; j < len; ++j) {
            let sub = ans[j].slice();
            sub.push(nums[i]);
            ans.push(sub);
        }
    }
    return ans;
};


