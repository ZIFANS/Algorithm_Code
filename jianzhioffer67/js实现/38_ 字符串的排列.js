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

// 2、排序后DFS，效率更高了
var permutation = function(s) {
    let ans = [];
    s = s.split('').sort().join('');
    let checked = new Array().fill(0);
    
    let DFS = (n, item) => {
        if (n === s.length) {
            ans.push(item);
            return;
        }

        for (let i = 0; i < s.length; ++i) {
            if (checked[i] || i > 0 && s[i] == s[i - 1] && !checked[i - 1])
                continue;
            checked[i] = 1;
            DFS(n + 1, item + s[i]);
            checked[i] = 0;
        }
    };

    DFS(0, "");

    return ans;
};
