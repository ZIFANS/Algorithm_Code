#include <iostream>
#include <cmath>
using namespace std;
bool IsPrime(int n)
{
    if(n<2)
        return false;
    for(int i=2;i<=sqrt(n);++i)
    {
        if(n%i==0)
        {
            return false;
        }
    }
    return true;
   
}
int main ()
{
    int n;
    scanf("%d",&n);
    int ans=0;
    for(int i=n;i>=2;--i)
    {
        if(IsPrime(i) && IsPrime(i-2))
        {
            ans++;
        }
    }
    cout<<ans<<endl;
    return 0;
}
