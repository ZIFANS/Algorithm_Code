class Solution {
public:
    int lengthOfLastWord(string s) {
        int s_size=s.size(),temp=0;
        bool flag=false;
        for(int i=s_size-1;i>=0;--i)
        {
            if(flag==false && s[i]==' ')
            {
                continue;
            }
            if(s[i]!=' ')
            {
                flag=true;
                temp++;
            }
            else
            {
                break;
            }
        }
        return temp;
    }
};