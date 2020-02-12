// 第一想法就是先排序 知道复杂度不太好，而且如果写算法题都是这个思路不行
// 第二想法就是二分
var findKthLargest = function(nums, k) {
    nums.sort(function(a, b) {
        return b - a;
    });
    return nums[k - 1];
};


