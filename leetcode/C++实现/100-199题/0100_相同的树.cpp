class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (!p && !q)
            return true;
        if (!p || !q)
            return false;
        if (p->val != q->val)
            return false;
        
        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
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
