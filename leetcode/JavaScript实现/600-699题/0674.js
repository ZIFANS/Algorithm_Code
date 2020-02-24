// 自己代码。第一想法，暴力解。
var findLengthOfLCIS = function(nums) {
    let ans = 1;
    if (nums.length === 0)
        return 0;

    for (let i = 0; i < nums.length; ++i) {
        let temp = 1, index = nums[i];

        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[j] > index) {
                index = nums[j];
                ++temp;
            } else {
                break;
            }
        }
        ans = Math.max(ans, temp);
    }
    return ans;
};

// 自己想出的DP。哈哈哈 真搞笑 有点写DP的感觉了
var findLengthOfLCIS = function(nums) {
    if (nums.length === 0)
        return 0;
    let temp = nums[0];
    nums[0] = 1;
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > temp) {
            temp = nums[i];
            nums[i] = nums[i - 1] + 1;
        } else {
            temp = nums[i];
            nums[i] = 1;
        }
    }
    return Math.max(...nums);
};

// 看了别人题解的想法
var findLengthOfLCIS = function(nums) {
    let len = nums.length, ans = 1;
    if (len === 0)
        return 0;
    let count = 1;
    
    for (let i = 0; i < len - 1; ++i) {
        if (nums[i + 1] > nums[i]) {
            ++count;
        } else {
            count = 1;
        }
        ans = ans > count ? ans : count;
    }
    return ans;
};