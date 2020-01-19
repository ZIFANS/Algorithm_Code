// 别人的思想 位运算
// 自己的想法排序和哈希都不符合题目附加的条件。
var missingNumber = function(nums) {
    let miss = nums.length;
    for(let i = 0; i < nums.length; ++i) {
        miss = miss ^ (i ^ nums[i]);
    }
    return miss;
};
