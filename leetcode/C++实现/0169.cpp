class Solution {
public:
    int majorityElement(vector<int>& nums) {
    unordered_map<int,int> counts;						// 看到discuss 里面好答案
    int n=nums.size();
    for(int i=0;i<n;++i)
    {
        if( ++counts[nums[i]]>n/2 )
            return nums[i];
        }	
    }
};