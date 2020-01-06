#include <iostream>
using namespace std;
int main ()
{
    int k1,k2;
    float ans[1001]={0};
    scanf("%d",&k1);
    for(int i=0;i<k1;++i)
    {
        int n1;
        float a1;
        scanf("%d %f",&n1,&a1);
        ans[ n1 ]+=a1;
    }
    scanf("%d",&k2);
    for(int i=0;i<k2;++i)
    {
        int n2;
        float a2;
        scanf("%d %f",&n2,&a2);
        ans[n2]+=a2;
    }
    int count1=0;
    for(int i=0;i<1001;++i)
    {
        if( ans[i]!=0 )
        {
            ++count1;
        }
    }
    printf("%d",count1);
    for(int i=1000;i>=0;--i)
    {
        if( ans[i]!=0)
        {
            printf(" %d %.1f",i,ans[i]);
        }
    }
    return 0;

}

/* 用<map> 只有17/25 有几个测试点没通过
#include <iostream>
#include <map>
using namespace std;
int main ()
{
    int k1,k2;
    map<int,float> m1,m2,ans;
    scanf("%d",&k1);
    for(int i=0;i<k1;++i)
    {
        int n1;
        float a1;
        scanf("%d %f",&n1,&a1);
        m1[n1]+=a1;
    }
    scanf("%d",&k2);
    for(int i=0;i<k2;++i)
    {
        int n2;
        float a2;
        scanf("%d %f",&n2,&a2);
        m2[n2]+=a2;
    }
   for(map<int,float>::iterator it=m1.begin();it!=m1.end();++it)
    {
        ans[ it->first ]=it->second;
    }
    for(map<int,float>::iterator it=m2.begin();it!=m2.end();++it)
    {
         ans[ it->first ]= ans[ it->first] +  it->second;
    }
    cout<<ans.size();
    map<int,float>::reverse_iterator it;
    for(it=ans.rbegin();it!=ans.rend();++it)
    {
        printf(" %d %.1f",it->first,it->second);
    }
    return 0;
}
*/
