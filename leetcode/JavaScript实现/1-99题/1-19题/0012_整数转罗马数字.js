// 1、简单粗暴法,其实根据题目意思了，类似打表，题目只能在3999以内的数
var intToRoman = function(num) {
    let Q = ["", "M", "MM", "MMM"];
    let B = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let S = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let G = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return Q[Math.floor(num / 1000)] + B[Math.floor((num % 1000) / 100)] + S[Math.floor((num % 100) / 10)] + G[num % 10];
};

// 2、用循环
var intToRoman = function (num) {
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        chars = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let ans = "";

    while (num) {
        if (num >= nums[0]) {
            ans += chars[0];
            num -= nums[0];
        } else {
            nums.shift();
            chars.shift();
        }
    }

    return ans;
};