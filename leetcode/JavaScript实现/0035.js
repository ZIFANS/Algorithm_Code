// 自己的代码，就是按题目暴力法
// 第一想法就是暴力，第二想法就是二分，后面把代码补上来
var searchInsert = function(nums, target) {
    let len = nums.length;
    for(let i = 0; i < len; ++i) {
        if(nums[i] === target)
            return i;
        else if(target < nums[i] && i === 0)
            return i;
        else if(target > nums[i - 1] && target < nums[i])
            return i;
        else if(target > nums[i] && i === len -1)
            return len;
    }
};
