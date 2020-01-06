#include <iostream>
#include <vector>
using namespace std;
struct info
{
    string name;
    string pwd;
};
string Modify(string s)
{
    int len=s.size();
    for(int i=0;i<len;++i)
    {
        if( s[i]=='1' )
            s[i]='@';
        else if(s[i]=='0')
            s[i]='%';
        else if(s[i]=='l')
            s[i]='L';
        else if(s[i]=='O')
            s[i]='o';
    }
    return s;
}
int main ()
{
    int n;
    cin>>n;
    string name,pwd;
    bool flag=false;
    vector<string> ans;
    for(int i=0;i<n;++i)
    {
       cin>>name>>pwd;
       string temp=Modify(pwd);
       if( temp!=pwd )
       {
           ans.push_back(name);
           ans.push_back(temp);
           flag=true;
       }
    }
    if( !flag && n==1 )
    {
        cout<<"There is 1 account and no account is modified"<<endl;
        return 0;
    }
    else if(!flag )
    {
        cout<<"There are "<<n<<" accounts and no account is modified"<<endl;
        return 0;
    }
    int len=ans.size();
    cout<<len/2<<endl;
    for(int i=0;i<len;i=i+2)
    {
        cout<<ans[i]<<" "<<ans[i+1]<<endl;
    }
    return 0;
}
