// LC 108题，用了一样代码AC了
class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return convertTree(nums, 0, nums.size() - 1);
    }
    TreeNode* convertTree(vector<int>& nums, int left, int right) {
        if (left > right) 
            return nullptr;
        
        // 选择中间的数字
        int mid = (left + right) / 2;

        TreeNode* root = new TreeNode(nums[mid]);
        root->left = convertTree(nums, left, mid - 1);
        root->right = convertTree(nums, mid + 1, right);

        return root;
    }
};