#include <iostream>
#include <vector>
#include <cstring>
using namespace std;
const int N=1111;
vector<int> G[N];
bool vis[N];
int current_point;
void dfs(int v)
{
    if(v==current_point)
        return;
    vis[v]=true;
    for(unsigned int i=0;i<G[v].size();++i)
    {
        if(vis[ G[v][i]]==false)
        {
            dfs(G[v][i]);
        }
    }
}
int main ()
{
    int n,m,k;
    scanf("%d%d%d",&n,&m,&k);
    for(int i=0;i<m;++i)
    {
        int a,b;
        scanf("%d%d",&a,&b);
        G[a].push_back(b);
        G[b].push_back(a);
    }
    for(int query=0;query<k;++query)
    {
        scanf("%d",&current_point);
        memset(vis,false,sizeof(vis));
        int block=0;
        for(int i=1;i<=n;++i)
        {
            if(i!=current_point && vis[i]==false)
            {
                dfs(i);
                block++;
            }
        }
        printf("%d\n",block-1);
    }
    return 0;
}
