// 递归即可
class Solution {
public:
    int helper(TreeNode* root, int& tilt) {
        if (!root)
            return 0;
        
        int left = helper(root->left, tilt);
        int right = helper(root->right, tilt);

        tilt += abs(left - right);

        return left + right + root->val;
    }
    int findTilt(TreeNode* root) {
        int tilt = 0;

        helper(root, tilt);

        return tilt;
    }
};
