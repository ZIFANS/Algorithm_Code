// 自己代码
// 第一想法就是很简单的用hash。
// 下面的想法简单点
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i
        }
    }
    return -1
};
