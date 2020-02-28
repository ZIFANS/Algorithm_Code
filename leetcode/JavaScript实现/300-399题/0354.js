var maxEnvelopes = function(envelopes) {
    let len = envelopes.length;
    // 按宽度升序排列，高度降序排列
    envelopes.sort((a, b) => {
        return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0];
    });
    let height = new Array(len);
    // 对高度数组寻找 LIS
    for (let i = 0; i < len; ++i) {
        height[i] = envelopes[i][1];
    }
    return lengthOfLIS(height);
};
function lengthOfLIS(nums) {
    let len = nums.length;
    if (len === 0)
        return 0;
    let ans = 0
    let dp = new Array(len).fill(1);
    for (let i = 0; i < len; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[j] < nums[i])
                dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        ans = Math.max(ans, dp[i]);
    }
    return ans;
};
/*
function lengthOfLIS(nums) {
    var piles   = 0, 
        n       = nums.length,
        top     = [];
    for (var i = 0; i < n; i++) {
        // 要处理的扑克牌
        var poker = nums[i];
        var left = 0, right = piles;
        // 二分查找插入位置
        while (left < right) {
            var mid = (left + right) >>1;
            if (top[mid] >= poker)
                right = mid;
            else
                left = mid + 1;
        }
        if (left == piles) piles++;
        // 把这张牌放到牌堆顶
        top[left] = poker;
    }

    // 牌堆数就是 LIS 长度
    return piles;
}*/
