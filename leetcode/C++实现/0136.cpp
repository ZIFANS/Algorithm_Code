class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int ans,i;
        for(ans=0,i=0;i<nums.size();++i)
        {
            ans=ans ^ nums[i];
        }
        return ans;
    }
};