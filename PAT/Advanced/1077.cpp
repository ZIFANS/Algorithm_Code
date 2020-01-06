#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main ()
{
    int n;
    scanf("%d",&n);
    getchar();
    string ans="";
    for(int i=0;i<n;++i)
    {
        string s;
        getline(cin,s);
        int lens=s.size();
        reverse(s.begin(),s.end());
        if( i==0 )
        {
            ans=s;
            continue;
        }
        else
        {
            int lenans=ans.size();
            int minlen=min(lenans,lens);
            for(int j=0;j<minlen;++j)
            {
                if( s[j]!=ans[j] )
                {
                    ans=ans.substr(0,j);
                    break;
                }
            }
        }
    }
    reverse(ans.begin(),ans.end());
    if (ans.size() == 0) 
        ans = "nai";
    cout << ans;
    return 0;
}
