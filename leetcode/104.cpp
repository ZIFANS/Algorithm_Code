class Solution {
public:
    int maxDepth(TreeNode* root) {
        if(root==NULL)
          return 0;
       else
           return  max(maxDepth(root->left),maxDepth(root->right))+1;
   
    }
};

// 看别人的一行解决的代码 想法一样
//return root == NULL ? 0 : max(maxDepth(root -> left), maxDepth(root -> right)) + 1;