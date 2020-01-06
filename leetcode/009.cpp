class Solution {
public:
    bool isPalindrome(int x) {
        string s=to_string(x);
        int s_size=s.size();
        for(int i=0;i<s_size/2;++i)
        {
            if(s[i]!=s[s_size-1-i])
            {
                return false;
            }
        }
        return true;
    }
};
