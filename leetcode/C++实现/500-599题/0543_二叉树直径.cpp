// 题目就是求左右子树的高度
class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        int ans = 0;    // ans 代表最大直径
        DFS(root, ans);

        return ans;
    }
    int DFS(TreeNode* root, int& ans) {
        if (!root)
            return 0;
        
        // 求左右子树的高度
        int leftHeight = DFS(root->left, ans);
        int rightHeight = DFS(root->right, ans);

        //每次获得左子树和右子树的高度之后，比较ans和left+right的大小，更新ans
        ans = max(ans, leftHeight + rightHeight);

        // 返回子树的高度
        return max(leftHeight, rightHeight) + 1;
    }
};