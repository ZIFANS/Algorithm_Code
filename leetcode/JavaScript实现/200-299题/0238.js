// 剑指offer上有一个思路
/*
1、初始化两个空数组 L 和 R。对于给定索引 i，L[i] 代表的是 i 左侧所有数字的乘积，R[i] 代表的是 i 右侧所有数字的乘积。

2、我们需要用两个循环来填充 L 和 R 数组的值。对于数组 L，L[0] 应该是 1，因为第一个元素的左边没有元素。
对于其他元素：L[i]=L[i-1]*nums[i-1]。

3、同理，对于数组 R，R[length-1] 应为 1。length 指的是输入数组的大小。其他元素：R[i]=R[i+1]*nums[i+1]。

4、当 R 和 L 数组填充完成，我们只需要在输入数组上迭代，且索引 i 处的值为：L[i]*R[i]。
*/

var productExceptSelf = function(nums) {
    let ans = [];
    let index = 1;
    for(let i = 0; i < nums.length; ++i) {
        ans[i] = index;
        index *= nums[i];
    }
    index = 1;
    for(let i = nums.length - 1; i > -1; --i) {
        ans[i] *= index;
        index *= nums[i];
    }
    return ans;
};

