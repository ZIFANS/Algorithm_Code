// 自己的代码，第一次做
// 思想就是hash
var findRepeatNumber = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; ++i) {
        map[nums[i]] ? map[nums[i]] ++ : map[nums[i]] = 1;
    }
    for (let key in map) {  
        if (map[key] >= 2) {
            return key;
        }
    }
};

// 第二次做，优化版的hash, 不需要遍历完整个数组，当数字再次出现就return
var findRepeatNumber = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            return nums[i];
        }
    }
};