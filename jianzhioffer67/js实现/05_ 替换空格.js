// 自己的两种无脑代码：
// 1：返回一个新的字符串
var replaceSpace = function(s) {
    let countBlank = 0;
    let ans = "";
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === ' ') {
            ans += "%20";
        } else {
            ans += s[i];
        }
    }
    return ans;
};

// 2:正则：
var replaceSpace = function(s) {
    return s.replace(/ /g, '%20');
};

// 前面两种都太容易和简单了
// 3：双指针