/*
题目描述：
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
*/

/*
思想：
根据前序遍历 NLR和中序遍历LNR找到根节点
递归
*/

/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        if (preorder.size() == 0 || inorder.size() == 0)
            return NULL;
        
        //找到根节点在中序遍历中的位置，中序遍历之前的节点都是左子树节点，之后都是右子树节点
        return build(preorder, 0, preorder.size() - 1, inorder, 0, inorder.size() - 1);
    }
    // a1 b1 代表前序遍历数组的起始位置
    // a2 b2 代表中序遍历数组的起始位置
    TreeNode* build(vector<int>& preorder, int a1, int b1, vector<int>& inorder, int a2, int b2) {
        TreeNode* root = new TreeNode(preorder[a1]);
        int index = a2;

        while (inorder[index] != preorder[a1]) //找到当前根节点在中序遍历中的位置index
            ++index;
        
        int leftLen = index - a2;      // 左子树的长度
        int rightLen = b2 - index;      // 右子树的长度

        if (leftLen > 0)
            root->left = build(preorder, a1 + 1, a1 + leftLen, inorder, a2, index - 1);
        else
            root->left = NULL;

        if (rightLen > 0)
            root->right = build(preorder, a1 + leftLen + 1, b1, inorder, index + 1, b2);
        else 
            root->right = NULL;
            
        return root;
    }
};