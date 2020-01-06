#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
bool cmp(char a,char b)
{
    return a>b;
}
int main ()
{
    string n;
    cin>>n;
    n.insert(0,4-n.length(),'0');
    do
    {
        string a=n,b=n;
        sort(a.begin(),a.end(),cmp);
        sort(b.begin(),b.end());
        int ans=stoi(a)-stoi(b);
        n=to_string(ans);
        n.insert(0, 4 - n.length(), '0');
        cout << a << " - " << b << " = " << n << endl;
    }while( n!="6174" && n!="0000");
    return 0;
}
