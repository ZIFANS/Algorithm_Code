#include <iostream>
using namespace std;
int main ()
{
    int cnt;
    scanf("%d",&cnt);
    int start[55],end[55],a[55];
    for(int i=1;i<55;++i)
    {
        scanf("%d",&a[i]);
        end[i]=i;
    }
    for(int i=0;i<cnt;++i)
    {
        for(int j=1;j<55;++j)
            start[j]=end[j];
        for(int k=1;k<55;++k)
            end[a[k]]=start[k];
    }
    char pai[6]={"SHCDJ"};
    for(int i=1;i<55;++i)
    {
        end[i]=end[i]-1;
        printf("%c%d",pai[end[i]/13],end[i]%13+1);
        if(i!=54)
            printf(" ");
    }
    return 0;
}
