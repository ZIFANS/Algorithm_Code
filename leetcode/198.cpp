class Solution {
public:
    int rob(vector<int>& nums) {
        int len = nums.size();
       if (len == 0)
            return 0;
        if (len == 1)
            return nums[0];
        vector<int> dp(len, 0);
        dp[0] = nums[0];
        dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];
        for (int i = 2; i < len; ++i)
        {
            int temp = dp[i - 2] + nums[i];
            dp[i] = temp > dp[i - 1] ? temp : dp[i - 1];
        }
        return dp[len- 1];
    }
};