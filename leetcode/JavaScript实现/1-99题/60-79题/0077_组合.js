// 1、回溯
var combine = function(n, k) {
    let ans = [];
    let temp = [];

    let backtrack = function (start, temp) {
        if (temp.length === k) {
            ans.push(temp.slice(0));
            return;
        }

        let len = temp.length;
        for (let i = start; i <= n - (k - len) + 1; ++i) {
            temp.push(i);
            backtrack(i + 1, temp);
            temp.pop();
        }
    };

    backtrack(1, temp);

    return ans;
};
