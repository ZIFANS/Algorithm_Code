// 与leetcode509 相同题 计算结果要取模。这样的题第一想法当然是递归，但是会超时
// 1. 动态规划，数组
var fib = function(n) {
    let ans = [0, 1];

    for (let i = 2; i <= n; ++i) {
        ans[i] = (ans[i - 1] % 1000000007 + ans[i - 2] % 1000000007);
    }

    return ans[n] % 1000000007;
};

// 2.不用数组
var fib = function (n) {
    let first = 0, second = 1;
    let temp;
    
    if (n === 0 || n === 1)
        return n;

    for (let i = 2; i <= n; ++i) {
        temp = (first + second) % 1000000007;
        first = second;
        second = temp;
    }

    return temp;
};
