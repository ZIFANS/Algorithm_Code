// 第一想法就是暴力法,但是会超时
// 然后想着用map
var findMaxLength = function(nums) {
    let map = new Map();
    map.set(0, -1);
    let ans = 0, count = 0;
    for (let i = 0; i < nums.length; ++i) {
        count = count + (nums[i] === 1 ? 1 : -1);
        if (map.has(count)) {
            ans = Math.max(ans, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }
    return ans;
};
