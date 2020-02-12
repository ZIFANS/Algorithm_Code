// 自己的代码
// 第一想法就是将除字母和数字以外的字符过滤掉 ，用正则非常好。
var isPalindrome = function(s) {
    if(s.length === 0)
        return true;
    let toUpper = s.toUpperCase().replace(/[^A-Za-z0-9]/g, "");
    let len = toUpper.length;
    for(let i = 0; i < len / 2; ++i) {
        if(toUpper[i] !== toUpper[len - i - 1])
            return false;
    }
    return true;
};
