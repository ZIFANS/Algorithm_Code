class Solution {
public:
    bool isUnivalTree(TreeNode* root) {
        return isSingle(root, root->val);
    }
    bool isSingle(TreeNode* root, int val) {
        if (!root)
            return true;
        if (root->val != val)
            return false;
        
        return isSingle(root->left, root->val) && isSingle(root->right, root->val); 
        // return isSingle(root->left, val) && isSingle(root->right, val);  这样的写法也对
    }
};