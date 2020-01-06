class Solution {
public:
    int titleToNumber(string s) {
        int s_size=s.size();
        int sum=0;
        if(s_size==0)
            return 0;
        else
        {
            for(int i=0;i<s_size;++i)
            {
                sum=sum*26+(s[i]-'A'+1);
            }
        }
        return sum;
    }
};
