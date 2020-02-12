/*
题目描述：
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
要求不能创建任何新的结点，只能调整树中结点指针的指向。
leetcode思路：中序遍历即可。只需要记录一个pre指针即可。
*/

/*
思想：原先指向左子节点的指针调整为链表中指向前一个节点的指针，原
      原先指向右子节点的指针调整为链表中指向后一个节点的指针。
*/

class Solution {
public:
    TreeNode* Convert(TreeNode* pRootOfTree) {
        if(pRootOfTree == nullptr)
            return nullptr;
        TreeNode *pre = nullptr;

        ConvertNode(pRootOfTree, pre);
        TreeNode *ans = pRootOfTree;
        while(ans->left)
            ans = ans->left;
        return ans;
    }
    void ConvertNode(TreeNode *cur, TreeNode* &pre) {
        if(cur == nullptr)
            return;
        ConvertNode(cur->left, pre);
        cur->left = pre;
        if(pre) 
            pre->right = cur;
        pre = cur;
        ConvertNode(cur->right, pre);
    }
};