// 第一想法就是位运算。
// 写法一
var add = function(a, b) {
    let sum, carry;
    do {
        sum = a ^ b;
        carry = (a & b) << 1;
        a = sum;
        b = carry;
    } while (b !== 0)
    return a;
};

// 写法二
var add = function(a, b) {
    while (a !== 0) {
        let temp = a ^ b;
        a = ( a & b) << 1;
        b = temp;
    }
    return b;
};
