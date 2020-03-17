// 1.动态规划
/*
每当你爬上一个阶梯你都要花费对应的体力花费值，当我爬上台阶0时就需要花费台阶0标示的体力以此类推
可以选择继续爬一个阶梯或者爬两个阶梯，那么当前花费的最少体力就是爬当前台阶之前，花费少的体力再加上当前花费的体力
最后就是我们登上楼顶，登顶不是台阶不需要花费体力，取登上最后两个台阶所耗费的最小体力中最少的那个就是我们的目标值
*/
var minCostClimbingStairs = function(cost) {
    let dp = [cost[0], cost[1]];
    let len = cost.length;

    for (let i = 2; i <= len; ++i) {
        if (i === len) {
            dp[i] = Math.min(dp[i - 1], dp[i - 2]);
        } else {
            dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
        }
    } 

    return dp[cost.length];
};