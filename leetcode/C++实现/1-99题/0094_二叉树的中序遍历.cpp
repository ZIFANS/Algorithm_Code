// 考研时候 写过很多次非递归的中序遍历
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> ans;
        TreeNode* p = root;
        stack<TreeNode*> s;

        while (p || !s.empty()) {
            if (p) {
                s.push(p);
                p = p->left;
            } else {
                p = s.top();
                s.pop();
                ans.push_back(p->val);
                p = p->right;
            }
        }

        return ans;
    }
};