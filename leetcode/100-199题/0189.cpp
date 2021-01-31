class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int real=k%nums.size();
        for(int i=0;i<real;++i)
        {
            int temp=nums[ nums.size()-1];
            nums.insert(nums.begin(),temp);
            nums.pop_back();
        }
    }
};
