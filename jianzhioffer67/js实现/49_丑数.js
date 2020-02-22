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
/**
三指针法
因为每个数字都要被计算三次，一次是乘以二，一次是乘以三，一次是乘以5
所以定义三个指针，p_2, p_3, p_5,
这三个指针的起点是一样的，都是0，
如果当前的数字是乘以3得到的，就将p_3向前移动，
如果当前的是乘以2得到的，就将p_2向前移动，
如果当前的是乘以5得到的，就将p_5向前移动
 */
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

