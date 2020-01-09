class Solution {
public:
    int removeDuplicates(vector<int>& nums) 
    {
        int v_size=nums.size();
        int i=0;
        if(v_size==0)
            return 0;
        for(int j=1;j<v_size;++j)
        {
            if(nums[j]!=nums[i])
                i++;
            nums[i]=nums[j];
        }
        return i+1;
    }
};
