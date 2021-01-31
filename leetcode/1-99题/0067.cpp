class Solution {
public:
    string addBinary(string a, string b) {
        int jin_wei=0,a_size=a.size(),b_size=b.size();
        string ans;
        for(int i=a_size-1, j=b_size-1;i>=0 || j>=0;--i,--j)
        {
            int as=i>=0?a[i]-'0':0;
            int bs=j>=0?b[j]-'0':0;
            int temp=(as+bs+jin_wei)%2;
            jin_wei=(as+bs+jin_wei)/2;
            ans+=to_string(temp);
        }
        if(jin_wei==1)
            ans+='1';
       reverse(ans.begin(),ans.end());
       return ans;
    }
};