// 1、快排
var sortArray = function(nums) {
    if (nums.length <= 1)
        return nums;
    
    let pivot = nums.splice(Math.floor(nums.length / 2), 1)[0];
    let left = [];
    let right = [];

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] <= pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    return sortArray(left).concat([pivot], sortArray(right));
};

// https://www.cnblogs.com/onepixel/p/7674659.html