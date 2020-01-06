#include <iostream>
#include <vector>
#include <algorithm>
const int maxn=100001;
using namespace std;
struct node
{
    int add;
    int data;
    int next;
};
bool cmp(node a,node b)
{
    return a.data < b.data;
}
int main ()
{
    int n,first,temp_add,temp_data,temp_next;
    scanf("%d%d",&n,&first);
    node a[maxn];
    vector<node> v;
    for(int i=0;i<n;++i)
    {
        scanf("%d %d %d",&temp_add,&temp_data,&temp_next);
        a[temp_add]={temp_add,temp_data,temp_next};
    }
    int p=first;
    for(;p!=-1;p=a[p].next)
    {
        v.push_back(a[p]);
    }
    sort(v.begin(),v.end(),cmp);
    int len=v.size();
    if(len==0)
        printf("0 -1\n");
    else
    {
        printf("%d %05d\n",len,v[0].add);
        for(int i=0;i<len;++i)
        {
            printf("%05d %d ",v[i].add,v[i].data);
            if(i!=len-1)
            {
                printf("%05d\n",v[i+1].add);
            }
            else
            {
                printf("-1\n");
            }
        }
    }
    return 0;
}
