// 自己第一想法就是用层序遍历
class Solution {
public:
    vector<int> largestValues(TreeNode* root) {
        vector<int> ans;

        if (!root) 
            return ans;

        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            int count = 0, size = q.size();
            vector<int> level;

            while (count++ < size) {
                TreeNode* temp = q.front();
                q.pop();
                level.push_back(temp->val);

                if (temp->left) 
                    q.push(temp->left);
                if (temp->right)
                    q.push(temp->right);
            }

            // max_element返回vector容器里的最大值
            int maxVal = *max_element(level.begin(), level.end());
            ans.push_back(maxVal);
        }

        return ans;
    }
};