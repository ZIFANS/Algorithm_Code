/*
题目描述：
从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
*/

/*
思想：就是层序遍历的改变
*/

class Solution {
public:
    vector<vector<int> > Print(TreeNode* pRoot) {
        vector<vector<int> > ans;
        if(pRoot == nullptr)        // 树为空
            return ans;
        queue<TreeNode*> q;
        q.push(pRoot);
        while(!q.empty()) {
            int count = 0, height = q.size();
            vector<int> temp;
            while(count++ < height) {
                TreeNode *t = q.front();
                q.pop();
                temp.push_back(t->val);
                if(t->left) 
                    q.push(t->left);
                if(t->right)
                    q.push(t->right);
            }
            ans.push_back(temp);
        }
        return ans;
    } 
};