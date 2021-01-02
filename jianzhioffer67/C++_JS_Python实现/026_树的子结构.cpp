/*
题目描述：
输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
*/

/*
思想：(剑指offer上的代码)
第一步在树A中查找与根节点的值一样的节点。
第二步是判断A中以R为根节点的子树是不是和树B具有相同的结构。
Equal是用来两个double类型值的比较。double比较时候不能直接pRoot1->val == pRoot2->val
因为在计算机内表示小数时（包括float和double型小数）都有误差。
*/
class Solution {
public:
    bool isSubStructure(TreeNode* A, TreeNode* B) {
        if (!A || !B)
            return false;
        
        return isSubTree(A, B) || isSubStructure(A->left, B) || isSubStructure(A->right, B);
    }
    bool isSubTree(TreeNode* root1, TreeNode* root2) {
        if (!root2)
            return true;
        if (!root1)
            return false;
        if (root1->val != root2->val)
            return false;
        
        return isSubTree(root1->left, root2->left) && isSubTree(root1->right, root2->right);
    }
};
