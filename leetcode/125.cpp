class Solution {
public:
    bool isPalindrome(string s) {
         if(s.length()==0)
            return true;
        string a;
        int s_size=s.size();
        for( int i=0;i<s_size;++i)
        {
            if( isdigit(s[i]) || isalpha(s[i]) )
            {
                a+=s[i];
            }
        }
        transform(a.begin(),a.end(),a.begin(),::toupper);
        int a_size=a.size();
        for( int i=0;i<=a_size/2;++i)
        {
            if( a[i]!=a[a_size-i-1] )
            {
                return false;
            }
        }
        return true;
    }
};