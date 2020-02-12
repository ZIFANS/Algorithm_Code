// 自己的代码
// 这道题实现上就是找5的倍数
var trailingZeroes = function(n) {
    let ans = 0;
    while(n >= 5) {
        n = parseInt(n / 5);
        ans += n;
    }
    return ans;
};
