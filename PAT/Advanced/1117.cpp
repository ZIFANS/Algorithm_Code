#include <iostream>
#include <algorithm>
using namespace std;
bool cmp(int a,int b)                      // PAT 甲级 1127  17/20
{
    return a>b;
}
int main ()
{
    int n;
    scanf("%d",&n);
    int a[n];
    for(int i=0;i<n;++i)
    {
        scanf("%d",&a[i]);
    }
    sort(a,a+n,cmp);
    int e=0;
    for(int i=0;i<n;++i)
    {
        if(a[i]>=i)
        {
            e=i;
        }
    }
    cout<<e;
    return 0;
}

