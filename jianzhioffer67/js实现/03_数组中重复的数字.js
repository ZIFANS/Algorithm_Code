// 自己的代码，
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