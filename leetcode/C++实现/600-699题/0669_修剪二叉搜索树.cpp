class Solution {
public:
    TreeNode* trimBST(TreeNode* root, int low, int high) {
        if (!root)
            return root;
        
        if (root->val > high) 
            return trimBST(root->left, low, high); // 只处理左子树，相当于修建了root及其右子树
        if (root->val < low)
            return trimBST(root->right, low, high);
        
        // root->val >= L && root->val <= R
        root->left = trimBST(root->left, low, high);
        root->right = trimBST(root->right, low, high);

        return root;
    }
};