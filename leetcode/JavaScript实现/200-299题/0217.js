// 自己想法 第一想法就是hash
var containsDuplicate = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; ++i) {
        if(map.has(nums[i]))
            return true;
        map.set(nums[i]);
    }
    return false;
};

// 也可以用排序，到时候吧代码补上
