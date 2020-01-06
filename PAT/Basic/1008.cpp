#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int main ()
{
    int n,m;
    scanf("%d %d",&n,&m);
    vector<int> a(n);
    for(int i=0;i<n;++i)
    {
        scanf("%d",&a[i]);
    }
    m=m%n;
    if(m!=0)                  //看别人做法觉得不错
    {
        reverse(begin(a),begin(a)+n);
        reverse(begin(a),begin(a)+m);
        reverse(begin(a)+m,begin(a)+n);
    }
    for(int i=0;i<n;++i)
    {
        if(i!=0)
            printf(" ");
        printf("%d",a[i]);
    }
    return 0;
}
