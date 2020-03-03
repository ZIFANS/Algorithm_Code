
// 自己的代码
// 思路很简单就是把数组转化为数字 + 1 然后转为字符串，最后转化为数组。
// Notes:开始通不过主要是字符串转化为数组精度不够 然后又BigInt
var plusOne = function(digits) {
    return  ((BigInt(digits.join("")) + 1n).toString()).split("");  // 数值后面加n 代表BigInt
};