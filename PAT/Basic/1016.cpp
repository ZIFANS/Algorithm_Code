#include <iostream>
#include <string>
#include <cmath>
using namespace std;
int main ()
{
    string a,b;
    int da,db;
    cin>>a>>da>>b>>db;
    int count1=0;
    int sum=0;
    for(unsigned int i=0;i<a.size();++i)
    {
        if( a[i]-'0'==da)
        {
            sum+=(a[i]-'0')*pow(10,count1);
            ++count1;
        }
    }
    count1=0;
    for(unsigned int i=0;i<b.size();++i)
    {
        if(b[i]-'0'==db)
        {
            sum+=(b[i]-'0')*pow(10,count1);
            ++count1;
        }
    }
    cout<<sum<<endl;
    return 0;
}
