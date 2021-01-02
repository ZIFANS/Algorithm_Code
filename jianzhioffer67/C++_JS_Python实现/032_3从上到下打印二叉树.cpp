/*
题目描述：
请实现一个函数按照之字形打印二叉树，
即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，
其他行以此类推。
*/

/*
思想：还是层序遍历，判断下行是否为偶数，2,4,6...从右到左打印 也就是reverse一下
在32 第二种层序遍历的基础上修改了下代码 代码几乎一样
*/
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> ans;
        queue<TreeNode*> q; 

        if (!root)
            return ans;
        
        q.push(root);
        bool even = false; // 在32 基础上修改，如果even是偶数则 reverse一下level

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

            if (even)
                reverse(level.begin(), level.end());
            ans.push_back(level);                   // 将某层的值level 插入到ans中

            even = !even;
        }

        return ans;
    }
};