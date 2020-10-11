// 与LC 437的代码一样
class Solution {
private:
    int ans = 0;
public:
    void DFS(TreeNode* root, int sum) {
        if (!root)
            return;
        
        sum -= root->val;

        if (sum == 0)
            ++ans;
        
        DFS(root->left, sum);
        DFS(root->right, sum);
    }
    int pathSum(TreeNode* root, int sum) {
        if (!root)
            return ans;
        
        DFS(root, sum);

        pathSum(root->left, sum);
        pathSum(root->right, sum);

        return ans;
    }
};