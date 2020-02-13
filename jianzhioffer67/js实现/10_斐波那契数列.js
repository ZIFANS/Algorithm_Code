var fib = function(n) {
    let ans = [0, 1];
    for (let i = 2;i <= n; ++i) {
        ans.push(ans[i - 1] % 1000000007 + ans[i - 2] % 1000000007);
    }
    return ans[n] % 1000000007;
};

