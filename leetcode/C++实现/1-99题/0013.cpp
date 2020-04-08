class Solution 
{
public:
    int romanToInt(string s) 
    {
        map<char,int> mv;
        char c[]={'I','V','X','L','C','D','M'};
        int value[]={1,5,10,50,100,500,1000};
        int result=0;
        for(int i=0;i<7;++i)
        {
            mv.insert(pair<char,int>(c[i],value[i]));
        }
        for(int i=0;i<s.length();++i)
        {
            if( mv[s[i] ]>=mv[s[i+1] ] )
            {
                result+=mv[s[i]];
            }
            else
            {
                result-=mv[s[i]];
            }
        }
        return result;
    }
};
