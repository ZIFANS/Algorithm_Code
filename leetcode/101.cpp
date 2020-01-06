class Solution {
public:
    bool function1(TreeNode* p,TreeNode *q)
    {
        if(p==NULL && q==NULL)
            return true;
       else
           if(!p || !q)
            return false;
        if(p->val!=q->val)
            return false;
        return function1(p->left,q->right) && function1(p->right,q->left);
    }
    bool isSymmetric(TreeNode* root) {
        if(root==NULL)
            return true;
        return function1(root->left,root->right);
    }
};
