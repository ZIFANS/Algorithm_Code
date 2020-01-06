#include <iostream>
#include <algorithm>
using namespace std;
bool IsPal(string s)
{

    int len=s.size();
    for(int i=0;i<=len/2;++i)
    {
        if(s[i]!=s[len-i-1])
        {
            return false;
        }
    }
    return true;
}
string Add(string s)
{
    int len=s.size(),jinwei=0;
    string ans="";
    for(int i=0;i<len;++i)
    {
        if( (s[i]-'0')+(s[len-i-1]-'0') +jinwei <10 )
        {
            ans+=to_string(  (s[i]-'0')+(s[len-i-1]-'0') +jinwei );
            jinwei=0;
        }
        else
        {
            ans+=to_string(  (s[i]-'0')+(s[len-i-1]-'0') +jinwei-10 );
            jinwei=1;
        }
    }
    reverse(ans.begin(),ans.end());
    if(jinwei)
        ans.insert(0,1,'1');
    return ans;
}
int main ()
{
    string n;
    int m,i;
    cin>>n>>m;
    string temp;
    temp=n;
    for(i=0;i<m && !IsPal(temp);++i)
    {

        temp=Add(temp);
    }
    cout<<temp<<endl;
    cout<<(IsPal(temp)?i:m)<<endl;
    return 0;
}
