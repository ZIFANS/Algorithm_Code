#include <iostream>
#include <vector>
using namespace std;
int main ()
{
    int n1,m1,n2,m2,k;
    vector<int> v;
    scanf("%d/%d",&n1,&m1);
    scanf("%d/%d",&n2,&m2);
    scanf("%d",&k);
    int temp=(m1*m2)/k;
    int min1,max1;
    if(n1*m2<n2*m1)
    {
         max1=(n2*m1)/temp;
        if(   ((n1*m2)%temp)!=0 )
        {
            min1=((n1*m2)/temp)+1;
        }
        else
        {
            min1=(n1*m2)/temp;
        }
        for(int i=min1;i<=max1;++i)
        {
            v.push_back(i);
        }
    }
    else
    {
        max1=(n1*m2)/temp;
        if(  ((n2*m1)%temp)!=0  )
        {
            min1= ((n2*m1)/temp)+1;
        }
        else
        {
             min1=(n2*m1)/temp;
        }
        for(int i=min1;i<=max1;++i)
        {
            v.push_back(i);
        }
    }
    for(unsigned int i=0;i<v.size();++i)
    {
         if(i!=0)
            cout<<" ";
         if( k%v[i]!=0)
         {
             cout<<v[i]<<"/"<<k;
         }
    }
    return 0;
}
