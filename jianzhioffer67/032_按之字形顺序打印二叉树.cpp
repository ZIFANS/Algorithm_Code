/*
题目描述：
请实现一个函数按照之字形打印二叉树，
即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，
其他行以此类推。
*/

/*
思想：还是层序遍历，判断下行是否为偶数，2,4,6...从右到左打印 也就是reverse一下
*/

class Solution {
public:
    vector<vector<int> > Print(TreeNode* pRoot) {
        vector<vector<int>> ans;
        if(pRoot == nullptr)
            return ans;
        queue<TreeNode*> q;
        q.push(pRoot);
        bool even = false;
        while(!q.empty()) {
            vector<int> v;
            int size = q.size();
            for(int i = 0; i < size; ++i) {
                TreeNode *temp = q.front();
                q.pop();
                v.push_back(temp->val);
                if(temp->left)
                    q.push(temp->left);
                if(temp->right)
                    q.push(temp->right);
            }
            if(even)
                reverse(v.begin(), v.end());
            ans.push_back(v);
            even = !even;
        }
        return ans;
    }
};