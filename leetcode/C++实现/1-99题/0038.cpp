class Solution {
public:                         //这道题目英语看起来挺难理解的，就是先计数，再字符串处理
    string countAndSay(int n) {
        string s="1";
        for(int i=1;i<n;++i)
        {
            string temp="";
            int count1=1;
            for(int j=1;j<s.size();++j)
            {
                if(s[j]==s[j-1])
                {
                    ++count1;
                }
                else
                {
                    temp=temp+(char)(count1+'0')+s[j-1];
                    count1=1;
                }
            }
            s=temp+(char)(count1+'0')+s[s.size()-1];
        }
        return s;
    }
};
