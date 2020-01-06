class Solution {
public:
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        vector<int> v;
        vector<vector<int>>ans;
        if(root==NULL)
            return ans;
        queue<TreeNode*> q;
        q.push(root);
        TreeNode* temp;
        while(!q.empty())
        {
            int len=q.size();
            while(len--)
            {
                temp=q.front();
                q.pop();
                v.push_back(temp->val);
                if(temp->left!=NULL)
                    q.push(temp->left);
                if(temp->right!=NULL)
                    q.push(temp->right);
            }
            ans.insert(ans.begin(),v);
            v.clear();
        }
        return ans;
    }
};