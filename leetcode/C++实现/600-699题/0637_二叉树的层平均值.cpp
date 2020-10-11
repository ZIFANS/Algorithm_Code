// 第一遍就AC ,就是经典的BFS。总了自己总结的二叉树BFS框架
class Solution {
public:
    vector<double> averageOfLevels(TreeNode* root) {
        vector<double> ans;

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

            int len = level.size();
            double sum = 0;

            for (int i = 0; i < len; ++i) {
                sum += level[i];
            }

            ans.push_back(sum / len);
        }

        return ans;
    }
};

// 上面代码的简洁版，还是BFS本质没有变
class Solution {
public:
    vector<double> averageOfLevels(TreeNode* root) {
        queue<TreeNode*> que;
        vector<double> ans;

        if (root)
            que.push(root);
        
        while (!que.empty()) {
            int size = que.size();
            double sum = 0;

            for (int i = 0; i < size; ++i) {
                TreeNode* node = que.front();
                que.pop();
                sum += node->val;

                if (node->left)
                    que.push(node->left);
                if (node->right)
                    que.push(node->right);
            }

            ans.push_back(sum / size);
        }

        return ans;
    }
};