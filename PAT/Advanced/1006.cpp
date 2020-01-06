#include <iostream>
#include <climits>
using namespace std;
int main ()
{
    int n;
    scanf("%d",&n);
    string unlock="",lock="";
    int MIN=INT_MAX,MAX=INT_MIN;
    for(int i=0;i<n;++i)
    {
        string temp;
        int INhh,INmm,INss,OUThh,OUTmm,OUTss,INsum=0,OUTsum=0;
        cin>>temp;
        scanf("%d:%d:%d",&INhh,&INmm,&INss);
        INsum=INhh*3600+INmm*60+INss;
        if(INsum<MIN)
        {
            MIN=INsum;
            unlock=temp;
        }
        scanf("%d:%d:%d",&OUThh,&OUTmm,&OUTss);
        OUTsum=OUThh*3600+OUTmm*60+OUTss;
        if( OUTsum >MAX )
        {
            MAX=OUTsum;
            lock=temp;
        }
    }
    cout<<unlock<<" "<<lock<<endl;
    return 0;
}
