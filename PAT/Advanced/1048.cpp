#include <iostream>
#include <algorithm>
using namespace std;                     //  PAT 甲级1048  AC代码
int main ()
{ 
    int n,m;
    scanf("%d%d",&n,&m);
    int a[n];
    for(int i=0;i<n;++i)
    {
        scanf("%d",&a[i]);
    }
    sort(a,a+n);
    int i=0,j=n-1;
    while(i<j)
    {
        if( a[i]+a[j]==m )
        {
            printf("%d %d",a[i],a[j]);
            break;
        }
        else
            if( a[i]+a[j]<m )
        {
            i++;
        }
        else
        {
            j--;
        }
    }
    if(i>=j)
    {
        printf("No Solution");
    }
    return 0;
}
