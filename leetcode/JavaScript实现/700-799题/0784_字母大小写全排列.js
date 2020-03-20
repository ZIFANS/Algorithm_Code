// 1、回溯
var letterCasePermutation = function(S) {
    let ans = [];
    // 正则匹配是否是字母
    let pattern = new RegExp("[A-Za-z]");   

    let backtrack = function (str, i) {
        if (i >= S.length) {
            ans.push(str);
            return;
        }

        let cur = S[i];

        if (pattern.test(cur)) {
            let low = str + cur.toLowerCase(),
                high = str + cur.toUpperCase();

            backtrack(low, i + 1);
            backtrack(high, i + 1);
        } else {
            backtrack(str + cur, i + 1);
        }
    };

    backtrack("", 0);

    return ans;
};