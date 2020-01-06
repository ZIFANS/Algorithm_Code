#include <iostream>
using namespace std;
int main ()
{
    int n;
    scanf("%d",&n);
    int temp=0,ans=0;
    for(int i=0;i<n;++i)
    {
        int input=0;
        scanf("%d",&input);
        ans+=(input>temp )?(input-temp)*6:(temp-input)*4;
        temp=input;
    }
    ans=ans+(5*n);
    printf("%d\n",ans);
    return 0;
}


