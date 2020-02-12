/*
题目描述：
输入一棵二叉树，求该树的深度。
从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
*/

/*
思想：递归求左、右子树的高度，比较两者最大值 + 1 就是树的深度
*/


class Solution {
public:
    int TreeDepth(TreeNode* pRoot) {
        if(pRoot == nullptr)
            return 0;
        int left = TreeDepth(pRoot->left);
        int right = TreeDepth(pRoot->right);
        return left > right ? left + 1 : right + 1;
    }
};