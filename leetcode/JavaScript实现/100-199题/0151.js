// 与剑指offer的58题一样
var reverseWords = function(s) {
    let sToArr = s.split(' ').filter(val => {
        return val;
    });
    let len = sToArr.length, ans = "";
    for (let i = 0; i < len; ++i) {
        let temp = (i === len - 1) ? sToArr[0] : (sToArr[len - 1- i] + ' ');
        ans += temp;
    }
    return ans;
};