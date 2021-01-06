/*
首先本题中的二叉树还是个二叉搜索树，也就是中序遍历是单调递增的，所以我们可以利用这个性质来简化查找过程。

如果结点 p 的值大于等于 root 的值，说明 p 的后继结点在 root 右子树中，那么就递归到右子树中查找。
如果结点 p 的值小于 root 的值，说明 p 在 root 左子树中，而它的后继结点有两种可能，要么也在左子树中，要么就是 root：
如果左子树中找到了后继结点，那就直接返回答案。
如果左子树中没有找到后继结点，那就说明 p 的右儿子为空，那么 root 就是它的后继结点。
BST+非递归

*/
class Solution {
public:
    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
        if (!root || !p)
            return NULL;
        
        if (p->val >= root->val) {
            return inorderSuccessor(root->right, p);
        } else {
            TreeNode* left = inorderSuccessor(root->left, p);
            return left ? left : root;
        }
    }
};