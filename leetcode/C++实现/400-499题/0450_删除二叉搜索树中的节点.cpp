/*
第一种情况：没找到删除的节点，遍历到空节点直接返回了
找到删除的节点
第二种情况：左右孩子都为空（叶子节点），直接删除节点， 返回NULL为根节点
第三种情况：其左孩子为空，右孩子不为空，删除节点，右孩子补位 ，返回右孩子为根节点
第四种情况：其右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
第五种情况：左右孩子节点都不为空，则将删除节点的左孩子放到删除节点的右孩子的最左面节点的左孩子上，
返回删除节点右孩子为新的根节点。
*/
class Solution {
public:
    TreeNode* deleteNode(TreeNode* root, int key) {
        if (!root)
            return root;
        
        if (root->val == key) {
            if (!root->left)
                return root->right;
            else if (!root->right)
                return root->left;
            else {
                TreeNode* cur = root->right;
                while (cur->left) {
                    cur = cur->left;
                }
                cur->left = root->left;
                root = root->right;
            }
        }

        if (root->val > key)
            root->left = deleteNode(root->left, key);
        if (root->val < key)
            root->right = deleteNode(root->right, key);
        
        return root;
    }
};