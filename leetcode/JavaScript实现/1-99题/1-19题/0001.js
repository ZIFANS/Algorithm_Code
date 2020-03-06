// 暴力法
var twoSum = function(nums, target) {
    let len = nums.length;
    let ans = [];
    for(let i = 0; i < len; ++i) {
        for(let j = i + 1; j < len; ++j) {
            if(nums[i] + nums[j] === target) {
                ans.push(i);
                ans.push(j);
            }
        }
    }
    return ans;
};


// 哈希法 自己一下就AC的
var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; ++i) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
};