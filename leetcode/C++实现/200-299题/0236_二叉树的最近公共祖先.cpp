// 挺麻烦的写法
class Solution {
public:
    TreeNode* ans;
    bool dfs(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == nullptr) 
            return false;
        bool lson = dfs(root->left, p, q);
        bool rson = dfs(root->right, p, q);
        
        if ( (lson && rson) || ( (root->val == p->val) || root->val == q->val) && (lson || rson) ) {
            ans = root;
        } 
        return lson || rson || (root->val == p->val || root->val == q->val);
    }
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        dfs(root, p, q);
        return ans;
    }
};

// 更简单的代码
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (!root || root == p || root == q)
            return root;

        TreeNode* left = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);
        
        //如果当前节点的左右子树分别包括p和q节点，那么这个节点必然是所求的解。
        if (left && right)
            return root;
        
        // 只有一个非空则返回该指针，两个都为空则返回空指针
        return left ? left : right;
    }
};
