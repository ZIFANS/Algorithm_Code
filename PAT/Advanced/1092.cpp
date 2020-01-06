#include <iostream>
#include <cstring>
#include <cmath>
using namespace std;
int color1[1001]={0};
int color2[1001]={0};
int main ()
{
    char owner[1001],buyer[1001];                         // PAT 甲级 1092  13/20
    cin>>owner>>buyer;
    int len_owner=strlen(owner),len_buyer=strlen(buyer);
    for( int i=0;i<len_owner;++i)
    {
        color1[ owner[i] -'0']++;
    }
    for( int i=0;i<len_buyer;++i)
    {

        color2[ buyer[i] -'0']++;
    }
    bool flag=false;
    int c1=0,c2=0;
    for(int i=0;i<1001;++i)
    {
        if( (color1[i]-color2[i])<0  )
        {
            flag=true;
            c1+=color2[i]-color1[i];
        }
        else
            if( ( color1[i]-color2[i])>=0 && color2[i]!=0)
            {
                c2+=color1[i]-color2[i];
            }
    }
    if(flag)
    {
        cout<<"No"<<" ";
        cout<<c1;
    }
    else
    {
        cout<<"Yes"<<" ";
        cout<<c2+len_buyer;
    }
    return 0;
}
