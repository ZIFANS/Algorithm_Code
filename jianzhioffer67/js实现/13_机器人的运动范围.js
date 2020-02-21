var movingCount = function (m, n, k) {
    if (k < 0)
        return 0;
    let ans = 0;
    // 初始化
    let arr = [];
    for(let i = 0; i < m; i++){
        arr[i] = [];
        for(let j = 0; j < n; j++){
            arr[i][j] = true;
        }
    }
    enter(0, 0);
    return ans;
    //计算格子
    function enter(x, y) {
        if (x >= 0 && x < m && y >= 0 && y < n) {
            if (arr[x][y] && sum(x) + sum(y) <= k) {
                ans++
                arr[x][y] = false
                enter(x + 1, y)
                enter(x - 1, y)
                enter(x, y + 1)
                enter(x, y - 1)
            }
        }
    }
    //数位之和
    function sum(num) {
        let sum = 0
        while (num > 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        return sum;
    }
};
