#include <iostream>
using namespace std;
int main ()
{
    int k1,k2;
    float a1[1001]={0},a2[1001]={0},ans[2001]={0};
    scanf("%d",&k1);
    for(int i=0;i<k1;++i)
    {
        int n1;
        float temp1;
        scanf("%d %f",&n1,&temp1);
        a1[ n1 ]+=temp1;
    }
    scanf("%d",&k2);
    for(int i=0;i<k2;++i)
    {
        int n2;
        float temp2;
        scanf("%d %f",&n2,&temp2);
        a2[ n2 ]+=temp2;
    }
    for(int i=0;i<1001;++i)
    {
        for(int j=0;j<1001;++j)
        {
            if( a1[i]!=0 && a2[j]!=0 )
            {
                ans[i+j]+=a1[i]*a2[j];
            }
        }
    }
    int count1=0;
    for(int i=0;i<2001;++i)
    {
        if( ans[i]!=0 )
        {
            ++count1;
        }
    }
    printf("%d",count1);
    for(int i=2000;i>=0;--i)
    {
        if( ans[i]!=0)
        {
            printf(" %d %.1f",i,ans[i]);
        }
    }
    return 0;
}
