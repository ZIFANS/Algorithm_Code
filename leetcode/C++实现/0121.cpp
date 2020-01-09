class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int v_size=prices.size();
        vector<int> v;
        for(int i=0;i<v_size;++i)
        {
            for(int j=i+1;j<v_size;++j)
            {
                if( prices[i]<prices[j]  )
                {
                    v.push_back(prices[j]-prices[i]);
                }
            }
        }
        int max1=0;
        for(unsigned int i=0;i<v.size();++i)
        {
            if( v[i]>max1)
            {
                max1=v[i];
            }
        }
        return max1;
    }
};
