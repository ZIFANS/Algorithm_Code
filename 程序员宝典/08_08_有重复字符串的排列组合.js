// 1、回溯
var permutation = function(S) {
    let ans = [];
    S = S.split('').sort().join('');
    let checked = new Array().fill(0);

    let backtrack = (n, item) => {
        if (n === S.length) {
            ans.push(item);
            return;
        }

        for (let i = 0; i < S.length; ++i) {
            // 去重， 对于有重复的字符串也管用
            if (checked[i] || i > 0 && S[i] === S[i - 1] && !checked[i - 1]) {
                continue;
            }
            checked[i] = 1;
            backtrack(n + 1, item + S[i]);
            checked[i] = 0;
        }
    };

    backtrack(0, "");

    return ans;
};