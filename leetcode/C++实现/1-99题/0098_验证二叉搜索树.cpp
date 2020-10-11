/*
有两种思路：
1、递归
2、中序遍历
*/
class Solution {
public:
    bool helper(TreeNode *root, long long lower, long long upper) {
        if (!root)
            return true;
        if (root->val <= lower || root->val >= upper)
            return false;
        return helper(root->left, lower, root->val) && helper(root->right, root->val, upper);
    }
    bool isValidBST(TreeNode* root) {   
        return helper(root, LONG_MIN, LONG_MAX);
    }
};