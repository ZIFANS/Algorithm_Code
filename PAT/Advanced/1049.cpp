
#include <iostream>
using namespace std;
int main ()
{
    int n,left=0,right=0,a=1,now=1,ans=0;
    cin>>n;
    while(n/a)
    {
        left=n/(a*10),now=(n/a)%10,right=n%a;
        if(now==0)
            ans+=left*a;
        else if(now==1)
            ans+=(left*a)+(right+1);
        else
            ans+=(left+1)*a;
        a=a*10;
    }
    cout<<ans<<endl;
    return 0;
}


#include <iostream>
using namespace std;       // PAT 甲级1049    22/30
int main ()
{
    int n=0;
    scanf("%d",&n);
    int count1=0;
    for(int i=1;i<=n;++i)
    {
       int temp=i;
       while( temp!=0 )
       {
           if(temp%10==1)
           {
               count1++;
           }
           temp=temp/10;
       }
    }
    cout<<count1;
    return 0;
}
