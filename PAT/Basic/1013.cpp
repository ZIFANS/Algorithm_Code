#include <iostream>
#include <cmath>
#include <vector>
using namespace std;
bool IsPrime(int n)
{
    if(n<2)
        return false;
    for(int i=2;i<=sqrt(n);++i)
    {
        if(n%i==0)
        {
            return false;
        }
    }
    return true;
}
int main ()
{
    int m,n,num=2,count1=0;
    scanf("%d %d",&m,&n);
    vector<int> primev;     //存放 m-n个 所有素数
    while(count1<n)
    {
        if(IsPrime(num))
        {
            ++count1;
            if(count1>=m)
            {
                primev.push_back(num);
            }
        }
        ++num;
    }
    int temp=0;
    for(unsigned int i=0;i<primev.size();++i)
    {
        ++temp;
        if(temp%10!=1)          //空格输出
            printf(" ");
        printf("%d",primev[i]);
        if(temp%10==0)
            printf("\n");           //10个一个换行
    }
    return 0;
}
