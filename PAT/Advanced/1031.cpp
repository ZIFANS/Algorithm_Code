#include <iostream>
using namespace std;
int main ()
{
    string s;
    cin>>s;
    int len=s.size(),n1,n2,n3;
    n1=n3=(len+2)/3;
    n2=len-(n1*2)+2;
    int front1=0,rear=len-1;
    for(int i=0;i<n1-1;++i)     //先输出除最下面一排的字符。
    {
        cout<<s[front1++];  
        for(int j=0;j<n2-2;++j)     
            cout<<" ";          //输出空格
        cout<<s[rear--]<<endl;
    }
    for(int i=0;i<n2;++i)
    {
        cout<<s[front1++];
    }
    return 0;
}


//下面是柳婼大神的想法，填空一个二维数组，然后输出
#include <iostream>
#include <string.h>
using namespace std;
int main() {
    char c[81], u[30][30];
    memset(u, ' ', sizeof(u));
    scanf("%s", c);
    int n = strlen(c) + 2;
    int n1 = n / 3, n2 = n / 3 + n % 3, index = 0;
    for(int i = 0; i < n1; i++) u[i][0] = c[index++];
    for(int i = 1; i <= n2 - 2; i++) u[n1-1][i] = c[index++];
    for(int i = n1 - 1; i >= 0; i--) u[i][n2-1] = c[index++];
    for(int i = 0; i < n1; i++) {
        for(int j = 0; j < n2; j++) 
            printf("%c", u[i][j]);
        printf("\n");
    }
    return 0;
}
