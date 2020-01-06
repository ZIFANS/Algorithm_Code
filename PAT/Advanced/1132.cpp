

#include <iostream>
#include <cmath>
#include <cstring>
using namespace std;
bool isEvenNumber(int m)
{
    string s=to_string(m);
    int len=s.size(),n1,n2;
    n1=stoi( s.substr(0,len/2) );
    n2=stoi(s.substr(len/2));
    if(n2==0)
        return false;
    if( n2!=0 && (m%(n1*n2)) ==0 )
        return true;
    else
        return false;
}
int main ()
{
    int n;
    cin>>n;
    for(int i=0;i<n;++i)
    {
        int temp;
        cin>>temp;
        if(isEvenNumber(temp) )
        {
            cout<<"Yes"<<endl;
        }
        else
        {
            cout<<"No"<<endl;
        }
    }
    return 0;
}
