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
    TreeNode* reConstructBinaryTree(vector<int> pre,vector<int> vin) {
        TreeNode* root = new TreeNode(pre[0]);
        root = reConstruct(pre, vin, 0, pre.size() -1, 0, vin.size() -1);
        return root;
    }
    TreeNode* reConstruct(vector<int> pre, vector<int> vin, int l1, int h1, int l2, int h2) {
        TreeNode* root = new TreeNode(pre[0]);
        root->val = pre[l1];
        int i;
        for(i = l2;vin[i] != root->val; i++);
        int llen = i - l2, rlen = h2 - i;
        if(llen)
            root->left = reConstruct(pre, vin, l1 + 1, l1 + llen, l2, l2 + llen -1);
        else
            root->left = NULL;
        if(rlen) 
            root->right = reConstruct(pre, vin, h1 - rlen + 1, h1, h2 - rlen + 1,h2);
        else
            root->right = NULL;
        return root;
    }
};