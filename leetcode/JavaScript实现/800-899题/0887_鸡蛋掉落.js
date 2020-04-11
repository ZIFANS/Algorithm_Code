// 1、动态规划
var superEggDrop = function(K, N) {
    let dp = new Array(K + 1).fill(0).map(() => new Array(N + 1).fill(0));

    for (let j = 1; j <= N; ++j) {
        for (let i = 1; i <= K; ++i) {
            /**
            *二分法   碎了  i-1 j-1 ->下面的     没碎 i j -1  -> 上面的 
            * i-1个鸡蛋j-1次测的楼层 +  i个鸡蛋j-1次测的楼层  + 1
            */
            dp[i][j] = 1 + dp[i - 1][j - 1] + dp[i][j - 1];

            if (dp[i][j] >= N) {
                return j;
            }
        }
    }

    return N;
};