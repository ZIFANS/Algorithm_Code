class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int v_size=nums.size();
        if(v_size==0)
            return 0;
        for(int i=0;i<v_size;++i)
        {
            if(nums[i]==target)
                return i;
            if( nums[i] <target && nums[i+1]>target  )
            {
                return i+1;
            }
        }
        if(target<nums[0])
            return 0;
        if(target>nums[v_size-1])
            return v_size;
        return 0;
    }
};
