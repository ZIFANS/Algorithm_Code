// 1、DFS
var permutation = function(s) {
    let vis = [], ans = [];
    let DFS = (step, cur) => {
        if (step === s.length) {
            if (ans.indexOf(cur) === -1) {
                ans.push(cur);
                return;
            }
        }
        for (let i = 0; i < s.length; ++i) {
            if (vis[i] === true)
                continue;
            vis[i] = true;
            DFS(step + 1, cur + s[i]);
            vis[i] = false;
        }
    };

    DFS(0, '');

    return ans;
};