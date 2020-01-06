#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;
struct info             
{
    int id;
    char name[10];
    int grade;
};
bool cmp1(info a,info b)        /* 也可以把c作为全局变量，这样不需要用做个排序和swtich和case语句了*/
{
    return a.id<b.id;
}
bool cmp2(info a,info b)
{
    return strcmp(a.name,b.name)==0?a.id<b.id:strcmp(a.name,b.name)<0;
}
bool cmp3(info a,info b)
{
    return a.grade==b.grade?a.id<b.id:a.grade<b.grade;
}
int main ()
{
    int n,c;
    scanf("%d %d",&n,&c);
    info input[n];
    for(int i=0;i<n;++i)
    {
       //cin>>input[i].id>>input[i].name>>input[i].grade;
       scanf("%d %s %d",&input[i].id,input[i].name,&input[i].grade);
    }
    switch(c)
    {
        case 1:
            sort(input,input+n,cmp1);
            break;
        case 2:
            sort(input,input+n,cmp2);
            break;
        case 3:
            sort(input,input+n,cmp3);
            break;
    }
    for(int i=0;i<n;++i)
    {
        printf("%06d %s %d\n",input[i].id,input[i].name,input[i].grade);
    }
    return 0;
}
