class Solution {
public:
    int maxSubArray(vector<int>& nums) {
          int s_size=nums.size();
        int dp[s_size];
        if(s_size==1)
            return nums[0];
        dp[0]=nums[0];
        for(int i=1;i<s_size;++i)
        {
            if( nums[i] > (dp[i-1]+nums[i]) )
            {
                dp[i]=nums[i];
            }
            else
                dp[i]=dp[i-1]+nums[i];
        }
        int k=0;
        for(int i=1;i<s_size;++i)
        {
            if(dp[i]>dp[k])
            {
                k=i;
            }
        }
        return dp[k];
    }
};
