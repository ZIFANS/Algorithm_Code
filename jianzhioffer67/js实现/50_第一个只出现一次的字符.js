// 自己的代码，
// 第一想法就是用空间换时间
var firstUniqChar = function(s) {
    let map = new Map();
    for (let i = 0; i < s.length; ++i) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let i = 0; i < s.length; ++i) {
        if (map.get(s[i]) === 1)
            return s[i];
    }
    return " ";
};
