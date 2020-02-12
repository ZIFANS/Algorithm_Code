// 自己的代码
// 第一想法就是这个，后面审题
var reverseString = function(s) {
    return s.reverse();
};

// 第二想法，一次遍历，
var reverseString = function(s) {
    let len = s.length;
    for(let i = 0; i < len / 2; ++i) {
        let temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i -1] = temp;
    }
    return s;
};
