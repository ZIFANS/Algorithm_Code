#include <iostream>
#include <string>
using namespace std;
bool is_symmetric(string s)     // 暴力解法，遍历
{
    int len=s.size();
    if(len==0)
        return false;
    for(int i=0;i<len/2;++i)
    {
        if(s[i]!=s[len-1-i])
            return false;
    }
    return true;
}
int main ()
{

    string test;
    getline(cin,test);
    int len=test.size(),ans=-1;
    if(len==1)
    {
        printf("1\n");
        return 0;
    }
   /*if(len==2)
    {
        if(is_symmetric(test))
        {
            printf("2\n");
            return 0;
        }
        else
        {
            printf("0\n");
            return 0;
        }
    }*/
    for(int i=0;i<len;++i)
    {
        for(int j=i+1;j<=len;++j)
        {
            string temp="";
            temp=test.substr(i,j);
            int tem_len=temp.size();
            if(is_symmetric(temp) && tem_len>ans)
            {
                ans=tem_len;
            }
        }
    }
    printf("%d\n",ans);
    return 0;
}


