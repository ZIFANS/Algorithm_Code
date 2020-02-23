// 第一想法就是暴力法,但是会超时
// 然后想着用map
/*
这个方法与前一个方法原理相同，但是我们不使用大小为 \text{2n+1}2n+1 的数组因为我们不可能遇到所有的值。
因此我们只需要使用一个 HashMap mapmap 来保存所有的 (index, count)(index,count) 对。
对于一个 countcount ，我们只记录它第一次出现的位置，后面遇到相同的 countcount 我们都用这个第一次记录的 index 来计算子数组的长度。

*/
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
