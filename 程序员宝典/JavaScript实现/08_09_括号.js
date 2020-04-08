// 1、回溯
var generateParenthesis = function (n) {
    let ans = [];

    let backtrack = (cur, left, right) => {
        if (cur.length === 2 * n) {
            ans.push(cur);
            return;
        }

        if (left < n)
            backtrack(cur + '(', left + 1, right);
        if (right < left)   
            backtrack(cur + ')', left, right + 1);
    };

    backtrack("", 0, 0);

    return ans;
};