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
    bool isSymmetrical(TreeNode* pRoot) {
        return isSymmetrical(pRoot, pRoot);
    }
    bool isSymmetrical(TreeNode *pRoot1, TreeNode *pRoot2) {
        if(pRoot1 == nullptr && pRoot2 == nullptr) 
            return true;
        if(pRoot1 == nullptr || pRoot2 == nullptr)
            return false;
        if(pRoot1->val != pRoot2->val) 
            return false;
        return isSymmetrical(pRoot1->left, pRoot2->right) && isSymmetrical(pRoot1->right, pRoot2->left);
    }
};