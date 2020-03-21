// 1、数学，求最大公约数
var canMeasureWater = function(x, y, z) {
    let gcd = (a, b) => {
       return b === 0 ? a : gcd(b, a % b);
    };

    if (x + y < z)
        return false;
    if (x === 0 || y === 0)
        return z === 0 || x + y === z;
    return z % (gcd(x, y)) === 0;
};
