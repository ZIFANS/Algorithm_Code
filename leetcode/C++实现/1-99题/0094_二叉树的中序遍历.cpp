// 考研时候 写过很多次非递归的中序遍历
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> ans;
        stack<TreeNode*> s;
        TreeNode *p = root;

        while (p || !s.empty()) {
            if (p) {
                s.push(p);
                p = p->left;
            } else {
                TreeNode *temp = s.top();
                s.pop();
                ans.push_back(temp->val);
                p = temp->right;
            }
        }

        return ans;
    }
};