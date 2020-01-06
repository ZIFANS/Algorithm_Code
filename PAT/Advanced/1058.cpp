#include <iostream>
using namespace std;    
int main ()
{
    int g1,g2,s1,s2,k1,k2;
    scanf("%d.%d.%d",&g1,&s1,&k1);
    scanf("%d.%d.%d",&g2,&s2,&k2);
    int ansk=(k1+k2)%29;
    int anss=(s1+s2 + ((k1+k2)/29) ) %17;
    int ansg=g1+g2+  (s1+s2 +(k1+k2)/29) /17;
    printf("%d.%d.%d\n", ansg  ,anss,ansk   );
    return 0;
}


#include <iostream>     //这个解法是很久以前写的，现在看来以前的想法真辣鸡。
using namespace std;
int main ()
{
    int ag,as,ak;
    int bg,bs,bk;
    scanf("%d.%d.%d",&ag,&as,&ak);
    scanf("%d.%d.%d",&bg,&bs,&bk);
    int rg,rs,rk;
    int k_jin=0,s_jin=0;
    if( (ak+bk)>=29)
    {
        rk=(ak+bk)%29;
        k_jin+=1;
    }
    else
    {
        rk=ak+bk;
    }
    if(  k_jin!=0  )
    {
        if( (k_jin+as+bs)>=17 )
        {
            rs=(k_jin+as+bs)%17;
            s_jin+=1;
        }
        else
        {
            rs=k_jin+as+bs;
        }
    }
    else
    {
        if( (as+bs)>=17 )
        {
            rs=(as+bs)%17;
            s_jin+=1;
        }
        else
        {
            rs=as+bs;
        }
    }
    if( s_jin!=0 )
    {
        rg=s_jin+ag+bg;
    }
    else
    {
        rg=ag+bg;
    }
    printf("%d.%d.%d",rg,rs,rk);
    return 0;
}
