// 自己的代码
// 思想：就是根据数组的特点来
var majorityElement = function(nums) {
    let ans = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; ++i) {
        if(count === 0) {
            ans = nums[i];
            count = 1;
        } else if (nums[i] === ans) {
            ++count;
        } else {
            --count;
        }
    }
    return ans;
};