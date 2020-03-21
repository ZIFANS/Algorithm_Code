// 1、回溯
/*
1、某一次递归终止时需要将当前字符存入数组
2、 字符任取一个位置左侧必 左括号>=右括号
3、每次递归除了需要传当前字符还需要记情当前左右括号数
*/
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
