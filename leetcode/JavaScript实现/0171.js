// 自己的代码 这题简单 没啥好说的
var titleToNumber = function(s) {
    s.toUpperCase();
    let ans = 0;
    for(let i = 0; i < s.length; ++i) {
        ans += (s[i].charCodeAt() - 65 + 1) * Math.pow(26, s.length - 1 - i);
    }
    return ans;
};
