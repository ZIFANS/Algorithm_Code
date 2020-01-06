#include <iostream>
#include <map>
using namespace std;
int main ()
{
    int n;
    map<int,int> v;
    scanf("%d",&n);
    for(int i=0;i<n;++i)
    {
        int temp;
        scanf("%d",&temp);
        v[temp]++;
    }
    int cnt=0;
    while( ++cnt )
    {
        if( v[cnt]==0 )
        {
            printf("%d",cnt);
            break;
        }
    }
    return 0;
}
