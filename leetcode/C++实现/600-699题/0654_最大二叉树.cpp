class Solution {
public:
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        TreeNode* node = new TreeNode(0);
        
        if (nums.size() == 1) {
            node->val = nums[0];
            return node;
        }

        int maxVal = 0;
        int maxValIndex = 0;

        // 数组最大值和下标
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] > maxVal) {
                maxVal = nums[i];
                maxValIndex = i;
            }
        }

        node->val = maxVal;

        // 最大值所在的下标左区间 构造左子树
        if (maxValIndex > 0) {
            vector<int> vec(nums.begin(), nums.begin() + maxValIndex);
            node->left = constructMaximumBinaryTree(vec);
        }
        // 最大值所在的下标右区间 构造右子树
        if (maxValIndex < (nums.size() - 1)) {
            vector<int> vec(nums.begin() + maxValIndex + 1, nums.end());
            node->right = constructMaximumBinaryTree(vec);
        }

        return node;
    }
};