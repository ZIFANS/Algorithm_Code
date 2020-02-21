// 贪心算法
var cuttingRope = function(n) {
    if (n < 2)
        return 0;
    if (n === 2)
        return 1;
    if (n === 3)
        return 2;
    let timeOf3 = Math.floor(n / 3);
    if (n - timeOf3 * 3 === 1) 
        timeOf3 = timeOf3 - 1;
    let timeOf2 = Math.floor((n - timeOf3 * 3) / 2);
    return (3 ** timeOf3) * (2 ** timeOf2);
};