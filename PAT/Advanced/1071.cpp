#include <iostream>
#include <cctype>
#include <map>
using namespace std;
int main ()
{
    string s,ans;
    getline(cin,s);
    int len=s.size();
    map<string,int> mp;
    for(int i=0;i<len;++i)
    {
        if(isalnum(s[i]))
        {
            s[i]=tolower(s[i]);
            ans+=s[i];
        }
        if(!isalnum(s[i]) || i==len-1)
        {
            if(ans.size()!=0)
            {
                mp[ans]++;
            }
            ans="";
        }
    }
    int ans_number=-1;
    for(map<string,int>::iterator it=mp.begin();it!=mp.end();++it)
    {
        if(it->second>ans_number)
        {
            ans_number=it->second;
            ans=it->first;
        }
    }
    cout<<ans<<" "<<ans_number<<endl;
    return 0;
}
