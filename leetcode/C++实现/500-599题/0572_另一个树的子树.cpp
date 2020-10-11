// 
class Solution {
public:
    bool isSubtree(TreeNode* s, TreeNode* t) {
        if (!s)
            return false;
        
        if (DFS(s, t))
            return true;
        return (isSubtree(s->left, t) || isSubtree(s->right, t));
    }
    bool DFS(TreeNode* s, TreeNode* t) {
        if (!s && !t)
            return true;
        if (!s || !t)
            return false;
        if (s->val != t->val)
            return false;
        
        return (DFS(s->left, t->left) && DFS(s->right, t->right));
    }
};