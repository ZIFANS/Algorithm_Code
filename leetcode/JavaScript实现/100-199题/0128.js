// 暴力和排序很容易做出来。
// 这里要求O(n) 时间复杂度。所以用了哈希法。 用set，相当于去重。
var longestConsecutive = function(nums) {
    if (nums.length === 0)
        return 0;
    let set1 = new Set();
    //for (let num of nums) 
    for (let i = 0; i < nums.length; ++i)
        set1.add(nums[i]);
    let ans = 1;
    for (let i = 0; i < nums.length; ++i) {
    //for (let num of nums) {
        if (!set1.has(nums[i] - 1)) {
            let temp = 1, cur = nums[i];
            while (set1.has(cur + 1)) {
                ++temp;
                ++cur;
            }
            ans = Math.max(temp, ans);
        }
    }
    return ans;
};
