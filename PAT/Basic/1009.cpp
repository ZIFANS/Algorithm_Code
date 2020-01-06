#include <iostream>
#include <string>
#include <vector>
using namespace std;
int main ()
{
    vector<string> a;
    while(true)
    {
        string temp;
        cin>>temp;
        a.push_back(temp);
        char c=cin.get();
        if(c=='\n')
            break;
    }
    for(int i=a.size()-1;i>=0;--i)
    {
        cout<<a[i];
        if(i>0)
            cout<<" ";
    }
    return 0;
}
