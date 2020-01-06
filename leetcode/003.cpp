class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        set<char> test;
        int len=s.size();
        int ans=0;
        for(int i=0,j=0;i<len;)
        {
            if( test.count(s[i])==0 )
                test.insert(test.end(),s[i++]);
            else
                test.erase(s[j++]);
            ans=max(ans,int(test.size()) );
        }
        return ans;
    }
};
