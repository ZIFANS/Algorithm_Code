// 1、直接法，模拟下就行了
var hammingDistance = function (x, y) {
    let ans = 0;
    // 将数字转化为二进制
    let binaryX = parseInt(x).toString(2);
    let binaryY = parseInt(y).toString(2);
    // 两个字符串长度最大值
    let len = Math.max(binaryX.length, binaryY.length);

    // 在前面补0 
    while (len - binaryX.length) {
        binaryX = "0" + binaryX;
    }
    while (len - binaryY.length) {
        binaryY = "0" + binaryY;
    }

    for (let i = 0; i < len; ++i) {
        if (binaryX[i] !== binaryY[i]) {
            ++ans;
        }
    }

    return ans;
};


// 2、位运算
var hammingDistance = function(x, y) {
    let ans = 0;

    while (x !==0 || y !== 0) {
        if ((x & 1) !== (y & 1)) {
            ++ans;
        }
        x = x >> 1;
        y = y >> 1;
    }

    return ans;
};