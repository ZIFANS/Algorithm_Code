// 第一想法就是BFS， 我第一遍代码用了BFS模板
// 大概意思就是把每层的节点存到level容器里， 然后每次更新ans = level[0]; 就是最左的游元素
class Solution {
public:
    int findBottomLeftValue(TreeNode* root) {
        int ans = 0;

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
            
            ans = level[0];
        }

        return ans;
    }
};

// 还有一种BFS思想：广度优先遍历，只不过先存入右节点，然后再存入左节点，遍历结束，最后一个节点刚好是答案
class Solution {
public:
    int findBottomLeftValue(TreeNode* root) {
        if (!root->left && !root->right)
            return root->val;
        
        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            root = q.front();
            q.pop();

            if (root->right)
                q.push(root->right);
            if (root->left)
                q.push(root->left);
        }

        return root->val;
    }
};
