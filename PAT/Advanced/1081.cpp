#include <iostream>
using namespace std;            // PAT 甲级1081 AC 代码
long long max1(long long  a,long long  b)        // 求两个数的最大公约数
{   long long  c;
    if(a<b)
    {   a=a+b;
        b=a-b;
        a=a-b;
    }
    c=a%b;
    while(a%b!=0)
    {   a=b;
        b=c;
        c=a%b;
    }
    return b;
}
long long  min1(long long  a,long long  b)           // 求两个数的最小公倍数
{
    long long  min, max;
    long long  r;
    max=a>b?a:b;
    min=a<b?a:b;
    if(max%min==0)
        return max;
    while(max%min!=0)
    {
        r=max%min;
        max=min;
        min=r;
    }
    return a*b/min;
}
int main ()
{
    int n;
    scanf("%d",&n);
    int result_integer=0;                   // 最后结果的整数部分
    long long  result_numerator=0,result_denominator=0;           // 最后结果的 分子和分母
    for(int i=0;i<n;++i)
    {
        long long  numerator,denominator;
        long long  min_number;
        scanf("%lld/%lld",&numerator,&denominator);     //  numerator 分子， denominator 分母
        if( i==0 )
        {
           result_numerator=numerator;
           result_denominator=denominator;
           continue;
        }
        else
        {
            min_number=min1(result_denominator,denominator);
            result_numerator= (min_number/denominator)*numerator + (min_number/result_denominator)*result_numerator;
            result_denominator=min_number;
        }
    }
    if( result_numerator>=result_denominator)
    {
        result_integer=result_numerator/result_denominator;
        result_numerator= result_numerator%result_denominator;
    }
    if(result_numerator!=0)
    {
        long long  max_number=max1(result_numerator,result_denominator);
        result_numerator/=max_number;
        result_denominator/=max_number;
    }
    if(result_integer!=0)
    {
        printf("%lld",result_integer);
        if(result_numerator!=0)
        {
          printf(" %lld/%lld",result_numerator,result_denominator);
        }
    }
    else
        if(result_integer==0 && result_numerator!=0)
    {
        printf("%lld/%lld",result_numerator,result_denominator);
    }
    else
        if( result_integer==0 && result_numerator==0 )
    {
        printf("0");
    }
    return 0;
}




