#include <iostream>
#include <vector>
using namespace std;
int main ()
{
    int n;
    vector<int> v;
    vector<int> ans;
    while( scanf("%d",&n)!=EOF )
    {
        v.push_back(n);
    }
    int len=v.size();
    for(int i=0;i<len;i=i+2)
    {
        if( v[i]!=0 && v[i+1]!=0)
        {
            ans.push_back( (v[i]*v[i+1]) );
            ans.push_back( (v[i+1]-1) );
        }
          else
            if( (v[i]!=0) && (v[i+1]==0))
        {
             continue;
        }
        else
            if( (v[i]==0) && (v[i+1]!=0) )
        {
            ans.push_back( 0 );
            ans.push_back( (v[i+1]-1) );
        }
        else
          if( (v[i]==0) && (v[i+1]==0) )
          {
             ans.push_back(0);
            ans.push_back(0);
          }

    }
    len=ans.size();
    for(int i=0;i<len;++i)
    {
        if(i!=0)
            cout<<" ";
        cout<<ans[i];
    }
    return 0;
}
