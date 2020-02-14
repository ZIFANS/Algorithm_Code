// 自己的代码
// 最直观的方法
var printNumbers = function(n) {
    let max = 10 ** n;
    let ans = new Array(max - 1);

    for (let i = 1; i <= max - 1; ++i) {
        ans[i - 1] = i;
    }
    return ans;
};
