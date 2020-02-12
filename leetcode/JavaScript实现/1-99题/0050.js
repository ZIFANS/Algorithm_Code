// 第一想法就是暴力解 但是测试用例301/304 用3个没通过。
var myPow = function(x, n) {
    let flag = n > 0 ? true : false;
    let ans = 1;
    let absN = Math.abs(n);
    for (let i = 0; i < absN; ++i) {
        ans = ans * x;
    }
    if (!flag)
        ans = 1 / ans;
    return ans;
};

// 二分法时间复杂度O(n log n)
var myPow = function(x, n) {
    if (n === 0)
        return 1;
    if (n === 1)
        return x;
    if (n < 0) {
        return myPow(1 / x, -n);
    }
    let half = parseInt(n / 2); // let half = ~~(n / 2);
    let temp = myPow(x, half);
    if (n % 2 === 0) {
        return temp * temp;
    } else {
        return temp * temp * x;
    }
};

