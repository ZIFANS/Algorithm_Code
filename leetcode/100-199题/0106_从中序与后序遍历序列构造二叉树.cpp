// 与从前序和中序构造二叉树是一样的题
// 都是通过确定根节点下标，然后划分左右子树
// 最后递归的构建二叉树
class Solution {
public:
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        reverse(postorder.begin(), postorder.end());
        TreeNode* root = NULL;
        root = DFS(root, 0, 0, postorder.size() - 1, inorder, postorder);
        
        return root;
    }
    TreeNode* DFS(TreeNode* root, int root_pos, int inl, int inr, vector<int>& inorder, vector<int>& postorder) {
        if (inl > inr)
            return root;
        
        if (!root)
            root = new TreeNode(postorder[root_pos]);
        
        int index = inl;    // 根节点的下表
        while (inorder[index] != postorder[root_pos])
            ++index;
        
        // 划分左右子树
        root->left = DFS(root->left, root_pos + inr - index + 1, inl, index - 1, inorder, postorder);
        root->right = DFS(root->right, root_pos + 1, index + 1, inr, inorder, postorder);

        return root;
    }
};
