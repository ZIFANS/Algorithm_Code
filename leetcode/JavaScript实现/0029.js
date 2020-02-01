// 第一想法就是，暴力解，循环。但是我的超时了

// 别人的代码，其实跟我想法差不多，他的没有超时
var divide = function (dividend, divisor) {
    let result = 0, sign = 1, mul = 1;
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
        sign = -1;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    divisor2 = divisor;
    while (dividend >= divisor2) {
        if (dividend > (divisor2 + divisor2)) {
            divisor2 += divisor2;
            mul += mul;
        }
        dividend -= divisor2;
        result += mul;
    }
    while (dividend >= divisor) {
        dividend -= divisor;
        result += 1;
    }
    if (sign == 1 && result > (Math.pow(2, 31) - 1)) {
        return Math.pow(2, 31) - 1;
    } else if (sign == -1 && result < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }
    if (sign == 1) {
        return result;
    } else {
        return -result;
    }
};
