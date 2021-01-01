// 自己习惯的写法，也是王道书上的代码
class Solution {
public:
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int> ans;
        stack<TreeNode*> s;
        TreeNode *p = root;
        TreeNode *r = NULL;
        
        while (p || !s.empty()) {
            if (p) {
                s.push(p);
                p = p->left;
            } else {
                TreeNode *temp = s.top();
                
                if (temp->right && temp->right != r) {
                    p = temp->right;
                    s.push(p);
                    p = p->left;
                } else {
                    s.pop();
                    ans.push_back(temp->val);
                    r = temp;
                    p = NULL;
                }
            }
        }

        return ans;
    }
};