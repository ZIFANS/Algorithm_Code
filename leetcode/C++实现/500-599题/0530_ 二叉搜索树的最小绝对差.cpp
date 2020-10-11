// // 第一遍，自己用最傻的办法立即实现了一次 ， 与LC 783题目相同
class Solution {
private:
    vector<int> inorderV;  // 中序遍历的值保存到inorderV里面
public:
    void inOrderTraverse(TreeNode* root, vector<int>& inorderV) {
        if (root) {
            inOrderTraverse(root->left, inorderV);
            inorderV.push_back(root->val);
            inOrderTraverse(root->right, inorderV);
        }
    }
    int getMinimumDifference(TreeNode* root) {
        if (!root)
            return 0;

        inOrderTraverse(root, inorderV);

        int ans = INT_MAX;

        for (int i = 1; i < inorderV.size(); ++i) {
            int temp = inorderV[i] - inorderV[i - 1];
            ans = min(ans, temp);
        }

        return ans; 
    }
};