// 1. 排序后双指针
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => {
        return a- b;
    });
    let ans = nums[0] + nums[1] + nums[2];
    let len = nums.length;

    for (let i = 0; i < len; ++i) {
        let left = i + 1;
        let right = len - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(ans - target) > Math.abs(sum - target)) {
                ans = sum;
            } else if (sum > target) {
                --right;
            } else if (sum < target) {
                ++left;
            } else if (sum === target) {
                return ans;
            }
        }
    }

    return ans;
};