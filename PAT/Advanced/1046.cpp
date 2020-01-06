#include <iostream>
#include <vector>
const int maxn=10001;
using namespace std;
int main ()
{
    int n;
    scanf("%d",&n);
    int dis[maxn];
    int sum=0,left,right,cnt;
    for(int i=1;i<=n;++i)
    {
        int temp;
        scanf("%d",&temp);
        sum+=temp;
        dis[i]=sum;
    }
    scanf("%d",&cnt);
    for(int i=0;i<cnt;++i)
    {
        scanf("%d %d",&left,&right);
        if(left>right)
            swap(left,right);
        int temp=dis[right-1]-dis[left-1];
        printf("%d\n",min(temp,sum-temp));
    }
    return 0;
}

#include <iostream>
#include <algorithm>
#include <vector>
//const int maxn=100001;     暴力写法，最后一个点超时
using namespace std;
int main ()
{
    int n,m;
    scanf("%d",&n);
    //int s[maxn]={0};
    int s[n+1]={0};
    for(int i=1;i<=n;++i)
    {
        scanf("%d",&s[i]);
    }
    scanf("%d",&m);
    for(int i=0;i<m;++i)
    {
        int left1=0,right1=0,a,b;
        scanf("%d%d",&a,&b);
        if(a>b)
        {
            int temp=a;
            a=b;
            b=temp;
        }
        for(int j=a;j<b;++j)
        {
            left1+=s[j];
        }
        for(int j=b;j<=n;++j)
        {
            right1+=s[j];
        }
        for(int j=1;j<a;++j)
        {
            right1+=s[j];
        }
      //  cout<<left1<<" "<<right1<<endl;
        if(left1<right1)
        {
            printf("%d\n",left1);
        }
        else
        {
            printf("%d\n",right1);
        }
    }
    return 0;
}
