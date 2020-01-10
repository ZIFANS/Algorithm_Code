
// 自己的实现，暴力法一次AC ，效率贼低
var removeDuplicates = function(nums) {
    let len = nums.length;
    for(let i = 0; i < len; ++i) {
        let count = 0;
        for(let j = i + 1; j < len; ++j) {
            if(nums[i] == nums[j])
                ++count;
        }
        nums.splice(i, count);
    }
    return nums.length;
};

// 自己的实现
// 其实第一想法是双指针，但是写着写着就变成了双循环的
var removeDuplicates = function(nums) {
    let len = nums.length;
    if(len === 0)
        return 0;
    let pre = 0;
    for(let behind = 1; behind < len; ++behind) {
        if(nums[pre] !== nums[behind]) {
            ++pre;
            nums[pre] = nums[behind];
        }
    }
    return pre + 1;
};