class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        string s;
        uint32_t temp=n;
        while(temp!=0)
        {
            int m;
            m=temp%2;
            temp/=2;
            s=s+to_string(m);
        }
        cout<<s<<endl;
        int len=s.size();
        s.append(32-len,'0');
        cout<<s<<endl;
        int len2=s.size();
        uint32_t ans=0;
        for(int i=0;i<len2;++i)
        {
            ans=ans+( (s[i]-'0')* (pow(2,len2-1-i)  ) );
        }
        return ans;
    }
};