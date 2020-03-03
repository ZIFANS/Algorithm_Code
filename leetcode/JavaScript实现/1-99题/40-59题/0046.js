var permute = function(nums) {
    let len = nums.length, ans = [], temPath = [];
    let backtrack = (temPath) => {
        if(temPath.length === len) {
            ans.push(temPath);
            return;
        }
        for(let i = 0; i < len; ++i) {
            if(!temPath.includes(nums[i])) {
                temPath.push(nums[i]);
                backtrack(temPath.slice());
                temPath.pop();
            }
        }
    };
    backtrack(temPath);
    return ans;
};