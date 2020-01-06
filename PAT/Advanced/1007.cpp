#include <iostream>
#include <vector>
using namespace std;
int main ()
{
    int k,sum=-1,left=0,right=0,temp;
    scanf("%d",&k);
    vector<int> v(10001);
    for(int i=0;i<k;++i)
    {
        scanf("%d",&v[i]);
    }
    for(int i=0;i<k;++i)
    {
        temp=0;
        for(int j=i;j<k;++j)
        {
            temp=temp+v[j];
            if(temp>sum)
            {
                sum=temp;
                left=v[i];
                right=v[j];
            }
        }
    }
    if(sum<0)
    {
        printf("0 %d %d\n",v[0],v[k-1]);
        return 0;
    }
    printf("%d %d %d\n",sum,left,right);
    return 0;
}
