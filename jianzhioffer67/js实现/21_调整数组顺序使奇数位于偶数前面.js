// 自己的代码
// 也是剑指offer书上的想法
var exchange = function(nums) {
    let len = nums.length;
    if (len === 0)
        return nums;
    let begin = 0, end = len - 1;
    while (begin < end) {
        while (begin < end && nums[begin] % 2 !== 0)    // begin向后移动，直到遇到偶数
            ++begin;
        while (begin < end && nums[end] % 2 === 0)      // end 向前移动，直到遇到奇数
            --end;
        if (begin < end) {
            let temp = nums[begin];
            nums[begin] = nums[end];
            nums[end] = temp;
        }
    }
    return nums;
};