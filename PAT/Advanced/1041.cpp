#include <iostream>
const int maxn=10001;
using namespace std;
int main ()
{
    int n;
    scanf("%d",&n);
    int a[n]={0},b[maxn]={0};
    for(int i=0;i<n;++i)
    {
        int temp;
        scanf("%d",&temp);
        a[i]=temp;
        b[temp]++;
    }
    for(int i=0;i<n;++i)
    {
        if( b[ a[i] ] ==1 )
        {
            printf("%d\n",a[i]);
            return 0;
        }
    }
    printf("None\n");
    return 0;
}
