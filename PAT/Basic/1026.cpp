#include <iostream>
using namespace std;
int main ()
{
    int c1,c2;
    scanf("%d %d",&c1,&c2);
    //int timecount= ((c2-c1)%100) >=5 ? ((c2-c1)/100)+1: ((c2-c1)/100);
    /*int hh=timecount/3600;
    int mm=(timecount- (hh*3600))/60;
    int ss=(timecount- (hh*3600)-(mm*60))%60;
    printf("%02d:%02d:%02d\n",hh,mm,ss);*/
    int n = ((c2 - c1) + 50) / 100;
    int hh=n/3600;
    int mm=n%3600/60;
    int ss=n%60;
    printf("%02d:%02d:%02d\n",hh,mm,ss);
    return 0;
}
