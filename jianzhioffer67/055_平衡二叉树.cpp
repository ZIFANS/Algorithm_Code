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
    bool IsBalanced_Solution(TreeNode* pRoot) {
        if(pRoot == nullptr)
            return true;
        int left = TreeDepth(pRoot->left);
        int right = TreeDepth(pRoot->right);
        int ans = left - right;
        if(ans > 1 || ans < -1)
            return false;
        return IsBalanced_Solution(pRoot->left) && IsBalanced_Solution(pRoot->right);
    }
    int TreeDepth(TreeNode* pRoot) {
        if(pRoot == nullptr)
            return 0;
        int left = TreeDepth(pRoot->left);
        int right = TreeDepth(pRoot->right);
        return left > right ? left + 1 : right + 1;
    }
};