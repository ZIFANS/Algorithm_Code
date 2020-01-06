#include <iostream>
#include <vector>                   //  PAT 甲级 1104 
using namespace std;                // 这样的做法15分  有两个点内存超限
int main ()
{
    int n;
    cin>>n;
    vector<double> v;
    vector<double> result;
    double temp;
    int i,j,k;
    for(int i=0;i<n;++i)
    {
        cin>>temp;
        v.push_back(temp);
    }
    for(i=0;i<n;++i)
    {
        for( j=0;j<n;++j)
        {
            if(i==j)
            {
                result.push_back(v[i]);
            }
            else
            {
                for( k=i;k<=j;++k)
                {
                    result.push_back(v[k]);
                }
            }
        }
    }
    temp=0.0;
    for( unsigned int i=0;i<result.size();++i)
    {
        temp=temp+result[i];
    }
    printf("%.2f",temp);
    return 0;
}
