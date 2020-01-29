// 自己的代码，花了很久AC
// 思想就是先存前面几个容易写出来的字符串。然后遍历
var countAndSay = function(n) {
    let ans = ["1", "11", "21", "1211"];
    for(let i = 4; i < n; ++i) {
        let temp = "", s = ans[i - 1];
        let count = 1;
        for(let j = 1; j <= s.length; ++j) {
            if(s[j] === s[j - 1]) {
                ++count;
            }
            else if (s[j] !== s[j - 1] && count === 1 ) {
                temp += "1";
                temp += s[j - 1].toString();
            } else if(s[j] !== s[j - 1] && count > 1) {
                temp += count.toString();
                temp += s[j - 1].toString();
                count = 1;
            }
        }
        ans.push(temp);
    }
    return ans[n - 1];
};