class Solution {
public:
    int removeElement(vector<int>& nums, int val)
    {
        int count=0;
        for(unsigned int i=0;i<nums.size();++i)
        {
            if(nums[i]!=val)
                nums[count++]=nums[i];
        }
        return count;
    }
};
