
// 自己的实现，可能有点辣鸡，到时候改进
var isPalindrome = function(x) {
    let s = x.toString();
    let len = s.length;
    for(let i = 0; i < len / 2; ++i) {
        if(s[i] != s[len - i -1])
            return false;
    }
    return true;
};