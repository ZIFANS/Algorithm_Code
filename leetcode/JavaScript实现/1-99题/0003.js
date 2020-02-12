// 自己的代码
// 因为没想到好的想法，然后暴力解出来先。后面会参考别人代码
var lengthOfLongestSubstring = function(s) {
    let len = s.length, ans = "";
    for(let i = 0; i < len; ++i) {
        let temp = s[i];
        for(let j = i + 1; j < len; ++j) {
            if(temp.indexOf(s[j]) === -1)
                temp += s[j];
            else
                break;
        }
        if(temp.length > ans.length) 
            ans = temp;
    }
    return ans.length;
};