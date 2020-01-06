#include <iostream>
#include <algorithm>
using namespace std;
int main()
{
    int r,g,b;
    scanf("%d %d %d",&r,&g,&b);
    char mars[13]={'0','1','2','3','4','5','6','7','8','9','A','B','C'};
    cout<<"#";
    printf("%c%c",mars[r/13],mars[r%13]);
    printf("%c%c",mars[g/13],mars[g%13]);
    printf("%c%c",mars[b/13],mars[b%13]);
    return 0;
}
