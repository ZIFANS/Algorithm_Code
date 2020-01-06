#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
struct info
{
    long long int id;
    int score,final_rank,loca_number,local_rank;
};
bool cmp(info a,info b)
{
    return a.score==b.score?a.id<b.id:a.score>b.score;
}
int main ()
{
    int n;
    scanf("%d",&n);
    vector<info> ans;
    int total_number=0;
    for(int i=1;i<=n;++i)
    {
        int m;
        scanf("%d",&m);
        total_number+=m;
        vector<info> temp(m);
        for(int j=0;j<m;++j)
        {
            scanf("%lld  %d",&temp[j].id,&temp[j].score);
            temp[j].loca_number=i;
        }
        sort(temp.begin(),temp.end(),cmp);
        temp[0].local_rank=1;
        ans.push_back(temp[0]);
        for(int k=1;k<m;++k)
        {
            temp[k].local_rank=(temp[k].score==temp[k-1].score)?(temp[k-1].local_rank):(k+1);
            ans.push_back(temp[k]);
        }
    }
    sort(ans.begin(),ans.end(),cmp);
    ans[0].final_rank=1;
    for(int i=1;i<total_number;++i)
    {
        ans[i].final_rank=(ans[i].score==ans[i-1].score)?(ans[i-1].final_rank):(i+1);
    }
    printf("%d\n",total_number);
    for(int i=0;i<total_number;++i)
    {
        printf("%013lld %d %d %d\n",ans[i].id,ans[i].final_rank,ans[i].loca_number,ans[i].local_rank);
    }
    return 0;
}
