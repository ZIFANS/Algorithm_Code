// 方法一：栈
/*
与找到每个可能的子字符串后再判断它的有效性不同，
我们可以用栈在遍历给定字符串的过程中去判断到目前为止扫描的子字符串的有效性，
同时能的都最长有效字符串的长度。我们首先将 -1−1 放入栈顶。

1、对于遇到的每个 ( ，我们将它的下标放入栈中。

2、对于遇到的每个 ) ，我们弹出栈顶的元素并将当前元素的下标与弹出元素下标作差，
得出当前有效括号字符串的长度。通过这种方法，我们继续计算有效子字符串的长度，并最终返回最长有效子字符串的长度。
*/
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
