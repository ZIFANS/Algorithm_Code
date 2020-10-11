/*
题目描述：
输入一棵二叉树，判断该二叉树是否是平衡二叉树。
*/

/*
思想：
第一个答案直接递归，根据各个节点的左、右子树深度之差在 -1 与 1 之间。
*/
class Solution {
public:
    int treeHeight(TreeNode* root) {
        if (!root)
            return 0;
        
        return max(treeHeight(root->left), treeHeight(root->right)) + 1;
    }
    bool isBalanced(TreeNode* root) {
        if (!root)
            return true;
        else
            return abs(treeHeight(root->left) - treeHeight(root->right)) <= 1 && isBalanced(root->left) && isBalanced(root->right);
    }
};