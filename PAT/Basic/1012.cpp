#include <iostream>
#include <climits>
#include <vector>
#include<iomanip>
using namespace std;
int main ()
{
    int n;
    scanf("%d",&n);
    int v[1001];
    int a1=0,a2=0,a3=0,a5=INT_MIN;
    int a4=0;
    int a4_sum=0;
    int flag=1;
    int t=0;
    for(int i=0;i<n;++i)
    {
       scanf("%d",&v[i]);
    }
    for(int i=0;i<n;++i)
    {
        if(v[i]%5==0)
        {
           a1=(v[i]%2==0)?a1+v[i]:a1;
        }
        else if(v[i]%5==1)
        {
            a2+=v[i]*flag;
            flag=flag*-1;
            t++;
            /*if(flag)
            {
                a2=a2+v[i];
                flag=false;
            }
            else
            {
                a2=a2-v[i];
                flag=true;
            }*/
        }
        else if(v[i]%5==2)
        {
            ++a3;
        }
        else if(v[i]%5==3)
        {
            ++a4;
            a4_sum+=v[i];
        }
        else if(v[i]%5==4)
        {
            a5=( v[i]>a5 )?v[i]:a5;
        }
    }
    double avg=(1.0)*a4_sum/a4;
    if(a1!=0)
    {
        printf("%d ",a1);
    }else{
        printf("N ");
    }
    if(t!=0)
    {
        printf("%d ",a2);
    }else{
        printf("N ");
    }
    if(a3!=0)
    {
        printf("%d ",a3);
    }else{
        printf("N ");
    }
    if(a4==0)
    {
         printf("N ");
    }else
    {
        printf("%.1f ",avg);
    }
    if(a5!=INT_MIN)
    {
        printf("%d",a5);
    }else
    {
        printf("N\n");
    }
    return 0;
}

