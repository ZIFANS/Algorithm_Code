// 也就是斐波那契数列的小改变
// 1.DP
var numWays = function(n) {
    let ans = [1, 1, 2];

    for (let i = 3; i <= n; ++i) {
        ans[i] = (ans[i - 1] + ans[i - 2]) % 1000000007;
    }

    return ans[n];
};