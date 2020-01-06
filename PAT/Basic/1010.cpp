#include <iostream>
using namespace std;
int main ()
{
  int a,b,flag=0;
  while(scanf("%d %d",&a,&b)!=EOF)
  {
    if(b!=0)
    {
      if(flag==1)
        cout<<" ";
        cout<<a*b<<" "<<b-1;
        flag=1;
    }
  }
  if(flag==0)
  {
    printf("0 0\n");
  }
  return 0;
}
