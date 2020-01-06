#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main ()
{
    int num[10]={0};
    int num2[10]={0};
    string a,b="";
    cin>>a;
    int jinwei=0,len=a.size();     
    bool flag1=false;
    for(int i=0;i<len;++i)
    {
        num[ a[i]-'0' ]++;
    }
    for( int i=len-1;i>=0;--i)
    {
       int temp=a[i]-'0';
       temp=temp*2+jinwei;
       if(temp>=10)
       {
           temp=temp%10;
           num2[temp]++;
           b+=to_string(temp);
           jinwei=1;
           if(i==0)
           {
               flag1=true;
           }
       }
       else
       {
           num2[temp]++;
           b+=to_string(temp);
           jinwei=0;
       }
    }
    bool flag=false;
    for(int i=0;i<10;++i)
    {
        if( num[i]!=num2[i] )
        {
            flag=true;
            break;
        }
    }
    reverse(b.begin(),b.end());
    if(flag)
    {
        cout<<"No"<<endl;
    }
    else
    {
    cout<<"Yes"<<endl;
    }
    if( flag1 )
        cout<<"1";
    cout<<b<<endl;
    return 0;
}
