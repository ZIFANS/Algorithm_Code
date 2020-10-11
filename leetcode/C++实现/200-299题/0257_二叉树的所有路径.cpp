// 简单的DFS即可
class Solution {
public:
    vector<string> binaryTreePaths(TreeNode* root) {
        // ans 代表返回的结果, path 从根节点开始经过的路径
        vector<string> ans;
        string path;
        
        if (!root)
            return ans;
        
        DFS(root, path, ans);

        return ans;
    }
    void DFS(TreeNode* cur, string path, vector<string>& ans) {
        path += to_string(cur->val);

        // 遍历到叶子节点
        if (!cur->left && !cur->right) {
            ans.push_back(path);
            return;         // 跳出循环
        }

        // 左右子树非空，继续递归
        if (cur->left)
            DFS(cur->left, path + "->", ans);
        if (cur->right) 
            DFS(cur->right, path + "->", ans);
    }
};