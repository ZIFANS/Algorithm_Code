// 递归即可
class Solution {
public:
    int sumOfLeftLeaves(TreeNode* root) {
        if (!root)
            return 0;

        int ans = 0;
        
        if (root->left) {
            // 左子树中的叶节点，直接添加
            if (root->left->left == NULL && root->left->right == NULL)
                ans += root->left->val;
            else
                ans += sumOfLeftLeaves(root->left);
        }
        if (root->right) {
            ans += sumOfLeftLeaves(root->right);
        }

        return ans;
    }
};
