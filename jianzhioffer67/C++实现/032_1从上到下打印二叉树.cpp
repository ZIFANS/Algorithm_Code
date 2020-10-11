/*
题目描述：从上往下打印出二叉树的每个节点，同层节点从左至右打印。
*/

/*
思想：层序遍历没什么好说的。
 I. 从上到下打印二叉树
*/
// 考研写过很多次  这样的层序遍历使用队列就完事了 
class Solution {
public:
    vector<int> levelOrder(TreeNode* root) {
        queue<TreeNode*> q;
        vector<int> ans;

        if (!root)          
            return ans; 
        
        q.push(root);
        
        while (!q.empty()) {
            TreeNode* temp = q.front();
            q.pop();
            ans.push_back(temp->val);

            if (temp->left)
                q.push(temp->left);
            if (temp->right)
                q.push(temp->right);
        }

        return ans;
    }
};