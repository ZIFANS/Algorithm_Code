// 交换左右节点值
// 递归翻转左右子树
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (!root)
            return NULL;
        
        TreeNode *temp = root->left;
        root->left = root->right;
        root->right = temp;
        invertTree(root->left);
        invertTree(root->right);

        return root;
    }
};