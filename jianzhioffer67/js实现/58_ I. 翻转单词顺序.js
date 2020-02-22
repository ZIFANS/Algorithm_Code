/*
1.根据空格符把字符串转换为数组，并过滤空格符元素
2.循环数组，把数组从末到头以此拼接到字符串变量中
3.返回字符串变量
*/
var reverseWords = function(s) {
    let sToArr = s.split(' ').filter(function(val) {
        return val;
    });
    let ans = "";
    for (let i = 0; i < sToArr.length; ++i) {
        let temp = (i === sToArr.length - 1) ? sToArr[0] : (sToArr[sToArr.length - 1 - i] + ' ');
        ans += temp;
    }
    return ans;
};