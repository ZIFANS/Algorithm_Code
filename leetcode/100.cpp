class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q)
    {
        if(p==NULL && q==NULL)
            return true;
        else
            if(p==NULL && q!=NULL)
                return false;
        else
            if(p!=NULL  && q==NULL)
                return false;
        return (p->val==q->val && isSameTree(p->left,q->left) && isSameTree(p->right,q->right));
           
    }
};

// 一个更优化的代码 2行 其实想法一样
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q)
    {
        if(p==NULL || q==NULL)
            return p==q;
        return (p->val==q->val && isSameTree(p->left,q->left) && isSameTree(p->right,q->right));
           
    }
};
