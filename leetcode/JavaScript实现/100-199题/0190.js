
// 第一想法就是利用数组翻转，但是觉得这样做面试时候肯定不让直接调api
var reverseBits = function(n) {
    let ans = n.toString(2).padStart(32, 0).split('').reverse().join('');
    return Number.parseInt(ans, 2);
};


// 第二中方法 位运算

var reverseBits = function(n) {
    let result = 0;
    for(let i = 0; i < 32; ++i) {
        result = (result << 1) + (n & 1);
        n >>= 1;
    }
    return result >>> 0;
};
