/*
题目描述：
请实现一个函数，用来判断一颗二叉树是不是对称的。
注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
*/

/*
思想：剑指offer书上的思想：定义一种遍历的顺序：根，右，左， 与 前序遍历比较，相同，则是对称。
Notes:要将nullptr节点也遍历进去
*/

class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        return helper(root, root);
    }
    bool helper(TreeNode* root1, TreeNode* root2) {
        if (!root1 && !root2)
            return true;
        if (!root1 || !root2)
            return false;
        
        return root1->val == root2->val && helper(root1->left, root2->right) && helper(root1->right, root2->left);
    }
};
