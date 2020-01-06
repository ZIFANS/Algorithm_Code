#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int main ()
{                                   // AC 代码
    int n;
    scanf("%d",&n);
    vector<int> v(n);
    int sum=0;
    for(int i=0;i<n;++i)
    {
        scanf("%d",&v[i]);
        sum=sum+v[i];
    }
    sort(v.begin(),v.end());
    int n1_n2=n%2;
    int s1_s2=0;
    for(int i=0;i<n/2;++i)
    {
        s1_s2=v[i]+s1_s2;
    }
    printf("%d %d",n1_n2,  sum-2*s1_s2   );
    return 0;
}
