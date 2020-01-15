// 自己的代码
// 这题第一项想法就是排序和Hash，但是题目说了线性时间复杂度和不用额外空间
var singleNumber = function(nums) {
    let len = nums.length;
    for(let i = 0; i < len; ++i) {
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i]))
            return nums[i];
    }
};

// 别人的思想：位运算。
// 位运算确实是自己比较弱的一个环节，要加强
var singleNumber = function(nums) {
    let ans = 0, len = nums.length;
    for(let i = 0; i < len; ++i) {
        ans ^= nums[i];
    }
    return ans;
};
