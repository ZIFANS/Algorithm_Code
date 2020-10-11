// 参考这个 统一写法
// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/solution/che-di-chi-tou-qian-zhong-hou-xu-di-gui-fa-di-gui-/

class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> ans;
        stack<TreeNode*> s;

        if (root)
            s.push(root);
        
        while (!s.empty()) {
            TreeNode* temp = s.top();
            
            if (temp) {
                s.pop();
                
                if (temp->right)    // 右
                    s.push(temp->right);
                if (temp->left)     // 左
                    s.push(temp->left);

                s.push(temp);       // 中
                s.push(NULL);
            } else {
                s.pop();
                temp = s.top();
                s.pop();
                ans.push_back(temp->val);
            }
        }

        return ans;
    }
};