#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;                // PAT 甲级 1083 AC 代码
struct info
{
    char name[11];
    char id[11];
    int grade;
};
bool cmp(int a,int b)
{
    return a>b;
}
int main ()
{
    int n;
    scanf("%d",&n);
    info a[n];
    for(int i=0;i<n;++i)
    {
        scanf("%s %s %d",a[i].name,a[i].id,&a[i].grade);
    }
    int grade1,grade2;
    scanf("%d %d",&grade1,&grade2);
    vector<int> v;
    for(int i=0;i<n;++i)
    {
        if( a[i].grade>=grade1 && a[i].grade<=grade2 )
        {
            v.push_back(a[i].grade);
        }
    }
    int v_size=v.size();
    sort(v.begin(),v.end(),cmp);
    if(v_size!=0)
    {
        for(int i=0;i<v_size;++i)
        {
            for(int j=0;j<n;++j)
            {
                if( v[i]==a[j].grade )
                {
                    printf("%s %s\n",a[j].name,a[j].id);
                }
            }
        }
    }
    else
    {
         printf("NONE");
    }
    return 0;
}
