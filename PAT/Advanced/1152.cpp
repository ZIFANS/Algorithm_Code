#include <iostream>
#include <cmath>
#include <cstring>
#include <stdlib.h>
using namespace std;
bool IsPrime(int n)
{
    if(n < 2)
        return false;
    for(int i=2;i<=sqrt(n);++i)
    {
        if(n%i==0)
            return false;
    }
    return true;
}
int main ()
{

    int l,k;
    string s;
    cin>>l>>k>>s;
    bool flag=false;
    for(int i=0;i<=l-k;++i)
    {
        string temp=s.substr(i,k);
        int temp_int=stoi(temp);
        if(IsPrime(temp_int))
        {
            cout<<temp;
            flag=true;
            break;
        }
    }
    if(!flag)
    {
        cout<<"404"<<endl;
    }
    return 0;
}
