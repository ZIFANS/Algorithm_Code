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
        // 两种组合取最大回文串的长度
        let maxLen = Math.max(len1, len2);
        if(maxLen > end - start) {
            // 更新最大回文串的首尾字符索引
            start = i - ((maxLen - 1) >> 1);
            end = i + (maxLen >> 1);
        }
    }
    return s.slice(start, end + 1);
    //return s.substring(start, end + 1); // 都行
};

// 动态规划
var longestPalindrome = function (s) {
    let n = s.length;
    let res = '';
    //let dp = Array.from(new Array(n),() => new Array(n).fill(0));
    let dp = new Array();
    for (let i = 0; i < n; ++i) {
        dp[i] = new Array(n).fill(0);
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.slice(i, j + 1);
            }
        }
    }
    return res;
};