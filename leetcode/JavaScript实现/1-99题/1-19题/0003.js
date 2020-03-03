// 自己的代码
// 因为没想到好的想法，然后暴力解出来先。
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

var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let map = new Map();

    for (let end = 0, start = 0; end < s.length; ++end) {
        let alpha = s.charAt(end);
        if (map.has(alpha)) {
            start = Math.max(map.get(alpha), start);
        } 
        ans = Math.max(ans, end - start + 1);
        map.set(s.charAt(end), end + 1);
    }
    return ans;
};

// 滑动窗口的思想
var lengthOfLongestSubstring = function(s) {
    let ans = 0, i = 0;
    let temp = [];

    while (i < s.length) {
        if (temp.indexOf(s[i]) === -1) {
            temp.push(s[i]);
        } else {
            temp.shift();
            continue;
        }
        ans = Math.max(ans, temp.length);
        i++;
    }
    return ans;
};
