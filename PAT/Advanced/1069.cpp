#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;
bool cmp(char a,char b)
{
    return a>b;
}
int main ()
{
    string s;
    cin>>s;
    s.insert(0,4-s.size(),'0');    //字符串不足4位要加0 不然会超时    
    do
    {
        string temp1=s,temp2=s;
        sort(temp1.begin(),temp1.end(),cmp);
        sort(temp2.begin(),temp2.end());
        int zhen1=stoi(temp1),zhen2=stoi(temp2);
        int result=zhen1-zhen2;
        s=to_string(result);
        s.insert(0,4-s.size(),'0');
        cout<<temp1<<" - "<<temp2<<" = "<<s<<endl;

    }while (s != "6174" && s != "0000");
    return 0;
}
