// 自己的代码，第一想法就是hash
// 但是题目要求时间复杂度是O(n)，空间复杂度是O(1)。
var singleNumbers = function (nums) {
    let map = new Map();
    let ans = [], len = nums.length;
    if (len === 0)
        return ans;

    for (let i = 0; i < len; ++i) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    for (let i = 0; i < len; ++i) {
        if (map.get(nums[i]) === 1)
            ans.push(nums[i]);
    }
    return ans;
};


// 这也是一次遍历
var singleNumbers = function (nums) {
    //let length = nums.length;
    const { length } = nums;
    let ans = {};
    for (let i = 0; i < length; ++i) {
        if (ans[nums[i]] !== undefined) {
            delete ans[nums[i]];
        } else {
            ans[nums[i]] = nums[i];
        }
    }
    return Object.values(ans);
};


// 位运算
var singleNumber = function (nums) {
    let xor = 0
    let num1 = 0
    let num2 = 0
    // 1.对整个数组所有的数字合起来做一次异或操作
    // 由于数值相同的值异或就是0,那么结果就是只出
    // 现一次的两个数a,b的异或结果，结果里至少有一个位的值为1，意味着这个位上，要么a是1，b是0，要么b是1，a是0
    for (let num of nums) {
        xor ^= num
    }
    let i = 1
    // 2.找到这个1的位置 这里取最低位
    while ((xor & 1) === 0) {
        xor = xor >> 1
        i = i << 1
    }
    //3.根据所有的数的二进制值，在这个1对应的位置是否为1，可将数组一分为二，为1的做一次异或运算，为0的做一次异或运算，即可求出两数。
    for (let j = 0; j < nums.length; j++) {
        if ((nums[j] & i) == 0) {
            num1 ^= nums[j]
        } else {
            num2 ^= nums[j]
        }
    }
    return [num1, num2]
};
