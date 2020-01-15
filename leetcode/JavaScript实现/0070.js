// 自己代码，第一想法，和斐波那契数列一样，递归
// 牛客的测试过了，LeetCode超时了
var climbStairs = function(n) {
    if(n === 0 || n === 1)
        return 1;
    else {
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
};

// 用DP
var climbStairs = function(n) {
    let result = new Array(n + 1);
    result[1] = 1;
    result[2] = 2;
    for(let i = 3; i < n + 1; ++i) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];
};
