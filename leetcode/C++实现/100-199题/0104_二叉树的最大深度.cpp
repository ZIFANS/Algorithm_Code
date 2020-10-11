class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (!root)
            return 0;
        
        int leftLen = maxDepth(root->left);
        int rightLen = maxDepth(root->right);

        return leftLen > rightLen ? leftLen + 1 : rightLen + 1;
    }
};