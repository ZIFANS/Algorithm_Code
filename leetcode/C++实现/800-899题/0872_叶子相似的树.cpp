// 思想还是很简单的，就是先遍历出每个叶子结点，然后判断数组是否相等
class Solution {
public:
    void preOrder(TreeNode* root, vector<int>& v) {
        if (!root)
            return;
        
        if (root->left == nullptr && root->right == nullptr)
            v.push_back(root->val);
        
        preOrder(root->left, v);
        preOrder(root->right, v);
    }
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        vector<int> v1, v2;
        preOrder(root1, v1);
        preOrder(root2, v2);

        return v1 == v2;
    }
};