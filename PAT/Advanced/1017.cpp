#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
const int START_TIME=8*3600;
const int FINAL_TIME=17*3600;
struct cust
{
    int arrive_t,pro_t;
};
bool cmp(cust c1,cust c2)
{
    return c1.arrive_t<c2.arrive_t;
}
int main ()
{
    int n,k;
    scanf("%d%d",&n,&k);
    vector<cust> v;
    cust temp;
    for(int i=0;i<n;++i)
    {
        int hh,mm,ss,time;
        scanf("%d:%d:%d %d",&hh,&mm,&ss,&time);
        int arrive_time=hh*3600+mm*60+ss;
        if(arrive_time>FINAL_TIME)
            continue;
        temp.arrive_t=arrive_time;
        temp.pro_t=time*60;
        v.push_back(temp);
    }
    sort(v.begin(),v.end(),cmp);
    vector<int> window(k,START_TIME);
    double ans=0.0;
    for(unsigned int i=0;i<v.size();++i)
    {
        int index=0,mintime=window[0];
        for(int j=1;j<k;++j)
        {
            if(mintime>window[j])
            {
                mintime=window[j];
                index=j;
            }
        }
        if(window[index]<=v[i].arrive_t)
        {
            window[index]=v[i].arrive_t+v[i].pro_t;
        }else{
            ans+=(window[index]-v[i].arrive_t);
            window[index]+=v[i].pro_t;
        }
    }
    if(v.size()==0)
    {
        printf("0.0\n");
    }
    else
    {
        printf("%.1f\n",ans/60.0/v.size());
    }
    return 0;
}
