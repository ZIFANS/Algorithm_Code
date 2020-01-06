#include <iostream>
using namespace std;
int main ()
{
    int n;
    scanf("%d",&n);
    for(int i=0;i<n;++i)
    {
        long long int a,b,c;
        scanf("%lld %lld %lld",&a,&b,&c);
        if(a+b>c)
        {
            cout<<"Case #"<<i+1<<": true"<<endl;
        }
        else
        {
            cout<<"Case #"<<i+1<<": false"<<endl;
        }
    }
    return 0;
}
