// 自己的想法，第一想法就是暴力
var lengthOfLongestSubstring = function(s) {
    let ans = "";
    for (let i = 0; i < s.length; ++i) {
        let temp = s[i];
        for (let j = i + 1; j < s.length; ++j) {
            if (temp.indexOf(s[j]) === -1)
                temp += s[j];
            else 
                break;
        }
        if (temp.length > ans.length) 
            ans = temp;
    }

    return ans.length;
};