/*
题目描述：
从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
*/

/*
思想：就是层序遍历的改变
*/

class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> ans;
        queue<TreeNode*> q; 

        if (!root)
            return ans;
        
        q.push(root);
    
        while (!q.empty()) {
            int count = 0, height = q.size();       // count 用来计数，height 代表某一层的节点数
            vector<int> level;                      // level用来存放某层的值

            while (count++ < height) {
                TreeNode* temp = q.front();
                q.pop();
                level.push_back(temp->val);

                if (temp->left)
                    q.push(temp->left);
                if (temp->right)
                    q.push(temp->right);
            }

            ans.push_back(level);                   // 将某层的值level 插入到ans中
        }

        return ans;
    }
};