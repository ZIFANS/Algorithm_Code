// 1、经典的约瑟夫环问题... 先放过... 用数组模拟整个流程 ...
var lastRemaining = function(n, m) {
    let ans = [];

    for (let i = 0; i < n; ++i) {
        ans[i] = i;
    }

    let i = 0;

    while (ans.length > 1) {
        i = (i + m - 1) % ans.length;
        ans.splice(i, 1);
    }

    return ans[0];
};

// 2、剑指offer上的一种数学解法，没太看懂。
var lastRemaining = function(n, m) {
    let last = 0;

    for (let i = 2; i <= n; ++i) {
        last = (last + m) % i;
    }

    return last;
};