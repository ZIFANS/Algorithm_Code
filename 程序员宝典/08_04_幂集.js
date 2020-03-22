// 1、回溯
var subsets = function(nums) {
    let ans = [];
    let temp = [];

    let backtrack = (tempPath, start) => {
        ans.push(tempPath);

        for (let i = start; i < nums.length; ++i) {
            tempPath.push(nums[i]);
            backtrack(tempPath.slice(), i + 1);
            tempPath.pop();
        }
    };

    backtrack(temp, 0);

    return ans;
};
