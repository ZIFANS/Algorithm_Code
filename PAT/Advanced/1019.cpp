
#include <iostream>
using namespace std;
bool IsPal(int a[],int len)
{
    for(int i=0;i<=len/2;++i)
    {
        if( a[i]!=a[len-1-i] )
        {
            return false;
        }
    }
    return true;
}
int main ()
{
    int n,b,num=0;
    scanf("%d %d",&n,&b);
    int a[40]={0};
     while(  n!=0)
     {
         a[num++]=n%b;
         n=n/b;
     }
     if(IsPal(a,num))
     {
         printf("Yes\n");
     }
     else
     {
         printf("No\n");
     }
     for(int i=num-1;i>=0;--i)
     {
        if(i!=num-1)
            printf(" ");
        printf("%d",a[i]);
     }
    return 0;
}
/*#include <iostream>
#include <algorithm>
using namespace std;        15/20
bool IsPalin(string s)
{
    int len=s.size();
    for(int i=0;i<=len/2;++i)
    {
        if( s[i]!=s[len-i-1] )
        {
            return false;
        }
    }
    return true;
}
int main()
{
    int n,b;
    scanf("%d %d",&n,&b);
    string ans="";
    while(n!=0)
    {
        ans+=to_string(n%b);
        n=n/b;
    }
   //reverse(ans.begin(),ans.end());
    if(IsPalin(ans))
    {
        cout<<"Yes"<<endl;
    }
    else
    {
        cout<<"No"<<endl;
    }
    int len=ans.size();
    for(int i=len-1;i>=0;--i)
    {
        if(i!=len-1)
            cout<<" ";
        cout<<ans[i];
    }
    return 0;
}*/
