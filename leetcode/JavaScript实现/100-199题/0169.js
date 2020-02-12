// 自己的代码 很好理解
// LeetCode有原题
var majorityElement = function(nums) {
    let count = 1;
    let ans = nums[0];
    for(let i = 1; i < nums.length; ++i) {
        if(count === 0) {
            ans = nums[i];
            count = 1;
        }
        else if(nums[i] === ans) {
            ++count;
        } else
            --count;
    }
    return ans;
};
