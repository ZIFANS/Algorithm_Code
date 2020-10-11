class Solution {
private:
    vector<vector<int>> ans;
public:
    vector<vector<int>> pathSum(TreeNode* root, int sum) {
        vector<int> temp;
        DFS(root, temp, sum);

        return ans;
    }
    void DFS(TreeNode* root, vector<int>& temp, int sum) {
        if (!root)
            return;
        
        temp.push_back(root->val);

        // 是叶子节点且从根节点到叶子节点路径总和=sum -> 符合题目的路径
        if (root->val == sum && !root->left && !root->right)
            ans.push_back(temp);
        
        DFS(root->left, temp, sum - root->val);
        DFS(root->right, temp, sum - root->val);

        // 弹出最后一个元素
        temp.pop_back();

    }
};
