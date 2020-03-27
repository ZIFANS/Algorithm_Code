// 1、hash + 最大公约数
var hasGroupsSizeX = function(deck) {
    // 最大公约数计算机公式
    let gcd = function (num1, num2) {
        return num2 === 0 ? num1 : gcd(num2, num1 % num2);
    };

    // Map
    let map = new Map();

    // 统计牌的次数
    deck.forEach(num => {
        map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    });

    // 返回一个数组
    let newArr = [...map.values()];
    // 因为该数组是出现次数数组，最小值至少为1（至少出现1次），所以默认赋值为数组首位对公约数计算无干扰
    let first = newArr[0];

    newArr.forEach(time => {
        first = gcd(first, time);
    });

    return first >= 2;
};