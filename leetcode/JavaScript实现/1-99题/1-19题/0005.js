// 别人的思路：中心拓展发
// 开始看都不是很看的懂。
var longestPalindrome = function(s) {
    if(!s || s.length < 2)
        return s;
    let start = 0, end = 0;
    let len = s.length;
    let centerExpand = (left, right) => {
        while(left >= 0 && right < len && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    for(let i = 0; i < len; ++i) {
        let len1 = centerExpand(i, i);
        let len2 = centerExpand(i, i + 1);
        let maxLen = Math.max(len1, len2);
        if(maxLen > end - start) {
            start = i - ((maxLen - 1) >> 1);
            end = i + (maxLen >> 1);
        }
    }
    return s.slice(start, end + 1);
    //return s.substring(start, end + 1); // 都行
};
