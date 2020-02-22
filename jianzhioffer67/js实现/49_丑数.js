// 第一种，直观法,一个个判断，测试用例 500 / 596
// 所有寻找更好的方法。
var nthUglyNumber = function(n) {
    if (n <= 0)
        return 0;
    let num = 0;
    let uglyNum = 0;
    while (uglyNum < n) {
        ++num;
        if (isUgly(num)) {
            ++uglyNum
        }
    }
    return num;
};
function isUgly(num) {
    while (num % 2 === 0)
        num = Math.floor(num / 2);
    while (num % 3 === 0)
        num = Math.floor(num / 3);
    while (num % 5 === 0)
        num = Math.floor(num / 5);
    return num === 1 ? true : false;
}

// 动态规划
var nthUglyNumber = function (n) {
    let ans = [1], p2 = 0, p3 = 0, p5 = 0;
    while (ans.length < n) {
        let temp = Math.min(ans[p2] * 2, ans[p3] * 3, ans[p5] * 5);
        if (ans[p2] * 2 === temp) {
            ++p2;
        } 
        if (ans[p3] * 3 === temp) {
            ++p3;
        } 
        if (ans[p5] * 5 === temp) {
            ++p5;
        }
        ans.push(temp);
    }
    return ans[ans.length - 1];
};

