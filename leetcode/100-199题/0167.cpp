class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int s_size=numbers.size();
        vector<int> ans;
        for(int i=0;i<s_size;++i)
        {
            for(int j=i+1;j<s_size;++j)
            {
                if( numbers[i]+numbers[j]==target)
                {
                    ans.push_back(i+1);
                    ans.push_back(j+1);
                }
                else
                    if(numbers[i]+numbers[j]>target)
                    {
                        break;
                    }
            }
        }
        return ans;
    }
};