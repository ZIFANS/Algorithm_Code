/*
题目描述：
操作给定的二叉树，将其变换为源二叉树的镜像。
            8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
*/

/*
思想：
先前序遍历这颗树的每个节点，如果遍历到的节点有子节点，就交换它的两个子节点。
当交换完所有的左、右节点之后，得到树的镜像。
*/

class Solution {
public:
    void Mirror(TreeNode *pRoot) {
        if(pRoot == nullptr)
            return;
        if(pRoot->left == nullptr && pRoot->right == nullptr)
            return;
        TreeNode* temp = pRoot->left;
        pRoot->left = pRoot->right;
        pRoot->right = temp;
        if(pRoot->left)
            Mirror(pRoot->left);
        if(pRoot->right)
            Mirror(pRoot->right);
    }
};