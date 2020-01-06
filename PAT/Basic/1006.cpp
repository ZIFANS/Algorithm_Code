#include <iostream>
using namespace std;
int main ()
{
    string n;
    cin>>n;
    int len=n.size();
    switch(len)
    {
        case 1:
          for(int i=1;i<=n[0]-'0';++i)
          {
              cout<<i;
          }
        break;
        case 2:
          for(int i=0;i<n[0]-'0';++i)
          {
              cout<<"S";
          }
          for(int i=1;i<=n[1]-'0';++i)
          {
              cout<<i;
          }
        break;
        case 3:
          for(int i=0;i<n[0]-'0';++i)
          {
              cout<<"B";
          }
          for(int i=0;i<n[1]-'0';++i)
          {
              cout<<"S";
          }
           for(int i=1;i<=n[2]-'0';++i)
          {
              cout<<i;
          }
        break;
    }
    return 0;
}
