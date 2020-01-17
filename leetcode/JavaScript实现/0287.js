// 第一想法排序，AC了，但是题目描述没看清
var findDuplicate = function(nums) {
    nums.sort((a, b) => {
        return a - b;
    });
    for(let i = 0; i < nums.length; ++i) {
        if(nums[i - 1] === nums[i])
            return nums[i];
    }
    return -1;
};

// 第二想法
