#include <iostream>
using namespace std;
const int maxn=100001;
struct node
{
    char c;
    int next;
    bool flag;
};
int main()
{
    int first,second,n;
    scanf("%d %d %d",&first,&second,&n);
    node a[maxn];
    for(int i=0;i<maxn;++i)
    {
        a[i].flag=false;
    }
    for(int i=0;i<n;++i)
    {
        int address,next;
        char c;
        scanf("%d %c %d",&address,&c,&next);
        a[address].c=c;
        a[address].next=next;
    }
    int z;
    for(z=first;z!=-1;z=a[z].next)
    {
        a[z].flag=true;
    }
    for(z=second;z!=-1;z=a[z].next)
    {
        if(a[z].flag==true)
            break;
    }
    if(z!=-1)
    {
        printf("%05d\n",z);
    }
    else
    {
        printf("-1\n");
    }
    return 0;
}
