// 1、DFS
var rightSideView = function (root) {
    if (!root)
        return [];

    let ans = [];

    let DFS = (root, step, ans) => {
        if (root) {
            if (ans.length === step) {
                ans.push(root.val);
            }

            DFS(root.right, step + 1, ans);
            DFS(root.left, step + 1, ans);
        }
    };

    DFS(root, 0, ans);

    return ans;
};

