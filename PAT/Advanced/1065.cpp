#include <iostream>
#include <string>
using namespace std;
int main ()
{
    int n;
    scanf("%d",&n);
    for(int i=0;i<n;++i)
    {
        long long  a,b,c;
        scanf("%lld %lld %lld", &a, &b, &c);
        long long temp=a+b;
        if(  a>0 && b>0 && temp<0 )
        {
           printf("Case #%d: true\n", i + 1);
        }
        else if(  a<0 && b<0 && temp>=0 )
        {
            printf("Case #%d: false\n", i + 1);
        }
        else if( temp>c )
        {
            printf("Case #%d: true\n", i + 1);
        }
        else
        {
            printf("Case #%d: false\n", i + 1);
        }
    }
    return 0;
}
