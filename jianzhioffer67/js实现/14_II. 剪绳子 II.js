// 与剪绳子1很像
var cuttingRope = function(n) {
    if (n <= 3)
        return n - 1;
    let ans = 1;
    while (n > 4) {
        n = n - 3;
        ans = (ans * 3) % 1000000007;
    }
    return (n * ans) % 1000000007;
};