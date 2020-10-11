/*
递归查询两个节点p q，如果某个节点等于节点p或节点q，则返回该节点的值给父节点。
如果当前节点的左右子树分别包括p和q节点，那么这个节点必然是所求的解。
如果当前节点有一个子树的返回值为p或q节点，则返回该值。（告诉父节点有一个节点存在其子树中）
如果当前节点的两个子树返回值都为空，则返回空指针。
*/
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (!root || root == p || root == q)
            return root;

        TreeNode* left = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);

        // 只有一个非空则返回该指针，两个都为空则返回空指针
        if (left && right)
            return root;
        
        return left ? left : right;
    }
};
