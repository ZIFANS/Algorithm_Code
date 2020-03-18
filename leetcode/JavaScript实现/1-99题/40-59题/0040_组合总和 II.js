// 1. 回溯算法 + 剪枝， 
// 与39不同的时候，这个数组有重复的数,并且candidates 中的每个数字在每个组合中只能使用一次。
var combinationSum2 = function(candidates, target) {
    let len = candidates.length;
    let ans = [];
    let temp = [];
    candidates = candidates.sort((a, b) => {
        return a - b;
    });
    
    let backtrack = (temp, target, start) => {
        if (target === 0) {
            ans.push(temp);
            return;
        }
        for (let i = start; i < len; ++i) {
            if (target < candidates[i])
                break;
            // 相对于39题，这里算是二次剪枝
            if (i > start && candidates[i - 1] === candidates[i])
                continue;
            temp.push(candidates[i]);
            // 与39比，是i + 1
            backtrack(temp.slice(), target - candidates[i], i + 1);
            temp.pop();
        }
    };

    backtrack(temp, target, 0);

    return ans;
};
