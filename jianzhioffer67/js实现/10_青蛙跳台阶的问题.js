// 也就是斐波那契数列的小改变
var numWays = function(n) {
    let ans = [1, 1, 2];
    for (let i = 3; i <= n; ++i) {
        ans[i] = ans[i - 1] % 1000000007 + ans[i - 2] % 1000000007;
    }
    return ans[n] % 1000000007;
};