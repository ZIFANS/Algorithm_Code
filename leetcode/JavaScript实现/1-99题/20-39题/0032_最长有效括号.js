// 方法一：栈
var longestValidParentheses = function(s) {
    let ans = 0;
    let stack = [];
    stack.push(-1);

    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                ans = Math.max(ans, i - stack[stack.length - 1]);
            }
        }
    }
    return ans;
};

// 方法二：DP法
var longestValidParentheses = function (s) {
    let ans = 0;
    let dp = new Array(s.length).fill(0);

    for (let i = 1; i < s.length; ++i) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] == '(') {
                dp[i] = dp[i - 1] +((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
            ans = Math.max(ans, dp[i]);
        }
    }
    return ans;
};
