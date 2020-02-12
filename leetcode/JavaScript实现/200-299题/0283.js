/*
自己代码，别人的想法
先将nums数组中非0的元素，放到index = 0开始
然后将 0元素添加到index后面
 */
var moveZeroes = function(nums) {
    let len = nums.length, index = 0;
    for(let i = 0; i < len; ++i) {
        if(nums[i] !== 0) {
            nums[index] = nums[i];
            ++index;
        }
    }
    for(; index < len; ++index)
        nums[index] = 0;
};

