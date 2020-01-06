#include <iostream>
#include <algorithm>
using namespace std;
bool cmp(string a,string b)
{
    return a+b<b+a;
}
int main ()
{
    int n;
    scanf("%d",&n);
    string s[n];
    string ans="";
    for(int i=0;i<n;++i)
    {
        cin>>s[i];
    }
    sort(s,s+n,cmp);
    for(int i=0;i<n;++i)
    {
        ans+=s[i];
    }
    while(ans.size()!=0 &&ans[0]=='0')
    {
        ans.erase(ans.begin());
    }
    if(ans.size()==0)
        cout<<0;
    cout<<ans;
    return 0;
}
