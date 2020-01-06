#include <iostream>
using namespace std;
int main ()
{
    string pinyin[10]={"ling","yi","er","san","si","wu","liu","qi","ba","jiu"};
    string s;
    cin>>s;
    int len=s.size();
    int sum=0;
    for(int i=0;i<len;++i)
    {
        sum=sum+(s[i]-'0');
    }
    string stringsum=to_string(sum);
    for(unsigned int i=0;i<stringsum.size();++i)
    {
        if(i!=0)
        {
            cout<<" ";
        }
        cout<<pinyin[ (stringsum[i]-'0')%10 ];
    }
    return 0;
}
