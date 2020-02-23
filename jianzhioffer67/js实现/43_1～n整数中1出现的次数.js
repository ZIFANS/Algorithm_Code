// 别人的代码
var countDigitOne = function(n) {
    let len = n.toString().length, ans = 0;
    ++n;
    let temp = 1;
    for (let i = 0; i < len; ++i) {
        ans += ~~(n / temp / 10) * temp;
        ans += (n % (temp * 10) - temp) > temp ? temp : Math.max(0, n % (temp * 10) -temp);
        temp *= 10;
    }
    return ans;
};





// 自己的最直观的感受，就是一个一个算，有测试用例不能通过。
// 36 / 40 个通过测试用例
var countDigitOne = function(n) {
    let ans = 0;
    for (let i = 1; i <= n; ++i) {
        ans += numOne(i);
    }
    return ans;
};
// 判断一个数1的个数
function numOne(num) {
    let ans = 0;
    while (num) {
        let temp = num % 10;
        if (temp === 1)
            ++ans;
        num = Math.floor(num / 10);
    }
    return ans;
}