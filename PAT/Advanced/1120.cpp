#include <iostream>
#include <vector>
#include <set>
using namespace std;                            // PAT 甲级 1120  AC 代码
int main ()
{
    int n;
    scanf("%d",&n);
    int a[n];
    set<int> s;
    for(int i=0;i<n;++i)
    {
       scanf("%d",&a[i]);
    }
    int sum=0;
    for(int i=0;i<n;++i)
    {
        while( a[i] )
        {
            sum+=a[i]%10;
            a[i]=a[i]/10;
        }
        s.insert(sum);
        sum=0;
    }
    cout<<s.size()<<endl;
    for(set<int>::iterator it=s.begin();it!=s.end();++it)
    {
        if( it!=s.begin() )
            cout<<" ";
        cout<<*it;
    }
    return 0;
}
