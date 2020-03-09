/*
我们发现，我们只需要用一个数组cnts，cnts[i] 表示掷出i的次数，
那么cnts[i] 就等于前面六个相加，或者前面五个相加，或者。。。。

为了简单起见，我们从后往前遍历，这样我们的逻辑可以统一为 cnts[i] 就等于前面六个cnts[j]相加，
其中j等于i - 1, i - 2, i - 3, i - 4, i - 5, i - 6。

如果使用迭代，我们只需要迭代n - 1次，每次迭代相当于一次投掷，而内层循环的逻辑就是上面提到的，
我们每次投掷都去更新cnts[i]
*/
var twoSum = function(n) {
    if (n < 1)
        return [];
    
    let ans = [0, 1, 1, 1, 1, 1, 1];
    for (let i = 1; i < n; ++i) {
        for (let j = 6 * n; j > 0; --j) {
            ans[j] = ans.slice(Math.max(0, j - 6), j).reduce((acc, cur) => acc + cur, 0);
        }
    }
    return ans.slice(1).map(num => num / Math.pow(6, n)).filter(Boolean);
};
