/*
题目描述：从上往下打印出二叉树的每个节点，同层节点从左至右打印。
*/

/*
思想：层序遍历没什么好说的。
*/

class Solution {
public:
    vector<int> PrintFromTopToBottom(TreeNode* root) {
        vector<int> ans;
        queue<TreeNode*> q;
        if(root == nullptr)
            return  ans;        // 这里我觉得很奇怪 直接返回未初始化的ans也行。
        q.push(root);
        while(!q.empty()) {
            TreeNode *temp = q.front();
            ans.push_back(temp->val);
            q.pop();
            if(temp->left != nullptr)
                q.push(temp->left);
            if(temp->right != nullptr)
                q.push(temp->right);
        }
        return ans;
    }
};