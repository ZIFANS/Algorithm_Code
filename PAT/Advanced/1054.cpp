#include <iostream>
#include <map>
using namespace std;
int main ()
{
    int m,n;
    cin>>m>>n;
    map<int,int> a;
    int half=m*n/2;
    for(int i=0;i<n;++i)
    {
        for(int j=0;j<m;++j)
        {
            int temp;
            cin>>temp;
            a[temp]++;
        }
    }
    map<int,int>::iterator it;
    for(it=a.begin();it!=a.end();++it)
    {
        if( it->second > half )
        {
            cout<<it->first<<endl;
        }
    }
    return 0;
}


#include <iostream>
using namespace std;
const int maxn=16777216;
int main ()
{
    int m,n;
    scanf("%d%d",&m,&n);                // AC 代码
    static int a[maxn]={0};
    for(int i=0;i<n;++i)
    {
        int temp;
        for(int j=0;j<m;++j)
        {
            scanf("%d",&temp);
            a[temp]++;
        }
    }
    int max1=0;
    int max2=0;
    for(int i=0;i<maxn;++i)
    {
        if( a[i]>max1 )
        {
            max1=a[i];
            max2=i;
        }
    }
    printf("%d",max2);
    return 0;
}
