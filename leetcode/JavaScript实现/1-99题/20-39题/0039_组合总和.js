// 1. ???? + ??
/*
?????
    ?????????????????
        ???????????
*/
var combinationSum = function(candidates, target) {
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
            temp.push(candidates[i]);
            backtrack(temp.slice(), target - candidates[i], i);
            temp.pop();
        }
    };

    backtrack(temp, target, 0);

    return ans;
};


