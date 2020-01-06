#include <iostream>
#include <string>
using namespace std;
int main ()
{
    string s;
    cin>>s;
    string num[10]={"zero","one","two","three","four","five","six","seven","eight","nine"};
    int len=s.size();
    long long int temp=0;
    for(int i=0;i<len;++i)
    {
        temp+=( s[i]-'0') ;
    }
    string ans=to_string(temp);
    for(unsigned int i=0;i<ans.size();++i)
    {
         if( i!=0 )
            cout<<" ";
         cout<< num[ ans[i]-'0' ];
    }
    return 0;
}
