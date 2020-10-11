/*
将题目转化为两个二叉树什么情况下互为镜像
1、他们的根节点值相等
2、每个树的右子树都与另一个树的左子树镜像对称
*/
class Solution {
public:
    bool check(TreeNode *p, TreeNode *q) {
        if (!p && !q)
            return true;
        if (!p || !q)
            return false;
        return p->val == q->val && check(p->left, q->right) && check(p->right, q->left);
    }
    bool isSymmetric(TreeNode* root) {
        return check(root, root);
    }
};