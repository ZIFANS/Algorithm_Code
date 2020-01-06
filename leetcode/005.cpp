#include <iostream>
#include <vector>
using namespace std;
string prostring(string s)
{
    string ans="#";
    for(unsigned int i=0;i<s.size();++i)
    {
        ans+=s[i];
        ans+="#";
    }
    return ans;
}
string longestPalindrome(string s)
{
    string temp=prostring(s);
    int len=temp.size();
    vector<int> p(len,0);
    int c=0,r=0;
    for(int i=0;i<len;++i)
    {
        if(r>i)
            p[i]=min(r-i,p[2*c-i]);
        while(i-1-p[i]>=0 && i+1+p[i]<len && temp[i+1+p[i] ]==temp[i-1-p[i] ] )
        {
            p[i]++;
        }
        if(i+p[i]+r)
        {
            r=i+p[i];
            c=i;
        }
    }
    int max1=0,center=0;
    for(int i=0;i<len;++i)
    {
        if(p[i]>max1)
        {
            max1=p[i];
            center=i;
        }
    }
    return s.substr((center-max1)/2,max1);
}
int main ()
{
    string s;
    cin>>s;
    cout<<longestPalindrome(s);
    return 0;
}
