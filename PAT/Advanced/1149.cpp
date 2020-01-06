#include <iostream>
#include <vector>
#include <map>
using namespace std;
int main ()
{
    int n,m;
    scanf("%d %d",&n,&m);
    map<int,vector<int>> v;
    for(int i=0;i<n;++i)
    {
        int b1,b2;
        scanf("%d %d",&b1,&b2);
        v[b1].push_back(b2);
        v[b2].push_back(b1);
    }
    for(int i=0;i<m;++i)
    {
        bool flag=false;
        int k,a[100000]={0};
        scanf("%d",&k);
        vector<int> temp(k);
        for(int j=0;j<k;++j)
        {
            scanf("%d",&temp[j]);
            a[temp[j]]=1;
        }
        for(unsigned int i=0;i<temp.size();++i)
            for(unsigned int j=0;j<v[temp[i]].size();++j)
                if(a[v[temp[i]][j]]==1)
                    flag=true;
        if(flag)
            printf("No\n");
        else
            printf("Yes\n");
    }
    return 0;
}
