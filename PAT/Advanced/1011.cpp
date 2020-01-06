#include <iostream>
using namespace std;
int main ()
{
    float ans=1.0;
    char c[3]={'W','T','L'};
    for(int i=0;i<3;++i)
    {
        float maxvalue=0.0;
        int sub=0;
        for(int j=0;j<3;++j)
        {
            float temp=0.0;
            scanf("%f",&temp);
            if( temp>=maxvalue )
            {
                maxvalue=temp;
                sub=j;
            }
        }
        printf("%c ",c[sub]);
        ans*=maxvalue;
    }
    printf("%.2f\n",(ans*0.65-1)*2);
    return 0;
}
