#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;        //  AC 代码  运用排序
int main ()
{
    vector<long int> v;
    int n;
    scanf("%d",&n);
    long int temp;
    while(n--)
    {
        scanf("%ld",&temp);
        v.push_back(temp);
    }
    scanf("%d",&n);
    while(n--)
    {
        scanf("%ld",&temp);
        v.push_back(temp);
    }
    sort(v.begin(),v.end());
    cout<<v[ (v.size()-1)/2 ];
    return 0;
}
