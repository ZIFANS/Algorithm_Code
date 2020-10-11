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
    // 求树的高度
    int height(TreeNode *root) {
        if (!root)
            return 0;
         else {
             return max(height(root->left), height(root->right)) + 1;
         }
    }
    bool isBalanced(TreeNode* root) {
        if (!root)
            return true;
        else {
            // 判断所有的子树是否都满足平衡二叉树定义
            return abs(height(root->left) - height(root->right)) <= 1 && isBalanced(root->left) && isBalanced(root->right);
        }
    }
};