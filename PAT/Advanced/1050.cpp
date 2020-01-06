#include <iostream>
#include <string>
#include <set>
using namespace std;
int main ()
{
    string s1,s2,ans="";
    getline(cin,s1);
    getline(cin,s2);
    set<int> a;
    int len1=s1.size(),len2=s2.size();
    for(int i=0;i<len2;++i)
    {
        a.insert( s2[i]-'0' );
    }
    for(int i=0;i<len1;++i)
    {
        if( a.find( s1[i]-'0' )==a.end() )
        {
            ans+=s1[i];
        }
    }
    cout<<ans<<endl;
    return 0;
}
