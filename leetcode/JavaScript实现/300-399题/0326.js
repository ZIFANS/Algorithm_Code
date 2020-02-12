// 自己的代码
// 第一想法就是循环
var isPowerOfThree = function(n) {
    while(n >= 3) {
        n = n /3;
    }
    return n === 1;
};

// 别人的数学方法
// 3的x次方 = n 两边同时取常用对数log10 x = log10(n)/log10(3)
var isPowerOfThree = function(n) {
    const power = Math.log10(n) / Math.log10(3);
    return Number.isInteger(power);
};