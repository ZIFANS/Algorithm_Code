// 递归
class Solution {
public:
    int countNodes(TreeNode* root) {
        if (!root)
            return 0;
        
        return 1 + countNodes(root->left) + countNodes(root->right);
    }
};

// 层序遍历
class Solution {
public:
    int countNodes(TreeNode* root) {
        queue<TreeNode*> q;
        int ans = 0;

        if (root)
            q.push(root);
        
        while (!q.empty()) {
            int size = q.size();

            for (int i = 0; i < size; ++i) {
                TreeNode* temp = q.front();
                q.pop();
                ++ans;  
                
                if (temp->left)
                    q.push(temp->left);
                if (temp->right)
                    q.push(temp->right);
            }
        }

        return ans;
    }
};
