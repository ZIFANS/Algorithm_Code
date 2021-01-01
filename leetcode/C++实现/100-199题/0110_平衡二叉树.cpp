/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    // 求二叉树的高度
    int treeHeight(TreeNode *root) {
        if (!root)
            return 0;
        
        return max(treeHeight(root->left), treeHeight(root->right)) + 1;
    }
    bool isBalanced(TreeNode* root) {
        if (!root)
            return true;
        
        return abs(treeHeight(root->left) - treeHeight(root->right)) <= 1 && isBalanced(root->left) && isBalanced(root->right);
    }
};