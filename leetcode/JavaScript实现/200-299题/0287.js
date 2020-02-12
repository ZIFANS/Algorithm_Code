// 第一想法排序，AC了，但是题目描述没看清，不满足题目描述
// 自己的代码
// 第二想法,用indexOf和 lastIndexOf，找到一个不相等的。
// indexOf从头开始找，lastIndexOf从尾开始找
var findDuplicate = function(nums) {
    for(let i = 0; i < nums.length; ++i) {
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i]))
            return nums[i];
    }
    return -1;
};

// 第三想法借鉴别人的
// 参考链接：https://leetcode-cn.com/problems/find-the-duplicate-number/solution/287xun-zhao-zhong-fu-shu-by-kirsche/
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    slow = nums[slow], fast = nums[nums[fast]];
    while(slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    let pre1 = 0, pre2 = slow;
    while(pre1 !== pre2) {
        pre1 = nums[pre1];
        pre2 = nums[pre2];
    }
    return pre1;
};
