// DFS
var diameterOfBinaryTree = function(root) {
    let ans = 0;
    DFS(root);
    return ans;
    function DFS(node) {
        if (!node)
            return 0;
        let leftDepth = DFS(node.left);// left为左子树的深度
        let RightDepth = DFS(node.right);//right 为右子树的深度
        ans = Math.max(leftDepth + RightDepth, ans);//计算l+r 更新res
        return Math.max(leftDepth, RightDepth) + 1;//返回该节点为根的子树的深度
    }
};
