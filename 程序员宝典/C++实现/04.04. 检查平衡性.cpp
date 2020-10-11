// LC 100相同的题 用了相似的代码
class Solution {
public:
    int treeHeight(TreeNode* root) {
        if (!root)
            return 0;
        
        int leftHeight = treeHeight(root->left);
        int rightHeight = treeHeight(root->right);

        return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
    }
    bool isBalanced(TreeNode* root) {
        if (!root)
            return true;
        
        return abs(treeHeight(root->left) - treeHeight(root->right)) <= 1 && isBalanced(root->left) && isBalanced(root->right);
    }
};