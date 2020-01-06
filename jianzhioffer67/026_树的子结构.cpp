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
    bool HasSubtree(TreeNode* pRoot1, TreeNode* pRoot2) {
        bool ans = false;
        if(pRoot1 != nullptr && pRoot2 != nullptr) {
            if(Equal(pRoot1->val, pRoot2->val)) 
                ans = DoesTree1HasTree2(pRoot1, pRoot2);
            if(!ans)
                ans = HasSubtree(pRoot1->left, pRoot2);
            if(!ans)
                ans = HasSubtree(pRoot1->right, pRoot2);
        }
        return ans;
    }
    bool DoesTree1HasTree2(TreeNode* pRoot1, TreeNode* pRoot2) {
        if(pRoot2 == nullptr)
            return true;
        if(pRoot1 == nullptr)
            return false;
        if(!Equal(pRoot1->val, pRoot2->val))
            return false;
        return DoesTree1HasTree2(pRoot1->left, pRoot2->left) && DoesTree1HasTree2(pRoot1->right, pRoot2->right);
    }
    bool Equal(double num1, double num2) {
        if( ((num1 - num2) > -0.0000001) && ((num1 - num2) < 0.0000001))
            return true;
        else
            return false;
    }
};
