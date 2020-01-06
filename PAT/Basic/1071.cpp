#include <iostream>
using namespace std;
int main ()
{
    int T,k,n1,b,t,n2;
    scanf("%d%d",&T,&k);
    int x=T;                         // x代表当前的筹码数
    for(int i=0;i<k;++i)
    {
        scanf("%d%d%d%d",&n1,&b,&t,&n2);
        if( x!=0 && x<t)
        {
            cout<<"Not enough tokens.  Total = "<<x<<"."<<endl;
            continue;
        }
        else if( x>=t)
        {
            if(b==0)
            {
                if(n2<n1)         // 赌小时  n2 小于n1 win
                {
                    x=x+t;
                    cout<<"Win "<<t<<"!"<<"  Total = "<<x<<"."<<endl;
                     continue;
                }
                else
                {
                    x=x-t;
                    cout<<"Lose "<<t<<"."<<"  Total = "<<x<<"."<<endl;
                     continue;
                }
            }
            else
                if(b==1)
            {
                if(n2>n1)         // 赌大时  n2 小于n1 win
                {
                    x=x+t;
                    cout<<"Win "<<t<<"!"<<"  Total = "<<x<<"."<<endl;
                    continue;
                }
                else
                {
                     x=x-t;
                    cout<<"Lose "<<t<<"."<<"  Total = "<<x<<"."<<endl;
                     continue;
                }
            }
        }
        else
            if(x==0)
        {
            cout<<"Game Over.";
            break;
        }
    }
    return 0;
}
