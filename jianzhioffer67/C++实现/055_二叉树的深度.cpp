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
    int maxDepth(TreeNode* root) {
        if (!root)
            return 0;
        
        int leftLen = maxDepth(root->left);
        int rightLen = maxDepth(root->right);

        return leftLen > rightLen ? leftLen + 1 : rightLen + 1;
    }
};

// 更加简洁的写法
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (!root)
            return 0;
        
        return max(maxDepth(root->left), maxDepth(root->right)) + 1;
    }
};