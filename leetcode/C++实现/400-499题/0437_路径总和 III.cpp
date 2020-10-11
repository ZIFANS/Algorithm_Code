/*
先序递归遍历每个节点
以每个节点作为起始节点DFS寻找满足条件的路径
*/
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