// 别人的题目 想法很好
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) 
        return '';
    const gcd = (a, b) => {
        return (0 === b ? a : gcd(b, a % b));
    };
    return str1.slice(0, gcd(str1.length, str2.length));
};