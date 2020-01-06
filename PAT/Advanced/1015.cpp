#include <iostream>
#include <cmath>
#include <algorithm>
using namespace std;
bool IsPrime(int n)
{
    if(n<2)
        return false;
    for(int i=2;i<=sqrt(n);++i)
    {
        if( n%i==0 )
            return false;
    }
    return true;
}
string ToRadix(int n,int d)
{
    string ans="";
    int temp=n;
    while(temp!=0)
    {

        ans+=to_string(temp%d);
        temp=temp/d;
    }
    return ans;
}
int StringToNum(string n,int d)
{
    int len=n.size();
    int ans=0;
    for(int i=0;i<len;++i)
    {
        ans+= ( n[i]-'0' )*pow(d,len-1-i);
    }
    return ans;
}
int main ()
{
    int n,d;
    while( scanf("%d",&n) && n>0 && scanf("%d",&d) )
    {
        string temp="";
        int num=0;
        temp=ToRadix(n,d);
        num=StringToNum(temp,d);
        if(IsPrime(n) && IsPrime(num))
        {
            cout<<"Yes"<<endl;
        }
        else
        {
            cout<<"No"<<endl;
        }
    }
    return 0;
}
