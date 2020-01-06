#include <iostream>
#include <algorithm>
#include <cstring>
#include <vector>
using namespace std;
struct info
{
    char name[10];
    int age;
    int net_worth;
};
bool cmp(info a,info b)
{
    if(a.net_worth!=b.net_worth)
        return a.net_worth>b.net_worth;
    else
        if(a.age!=b.age)
        return a.age<b.age;
    else
       return (strcmp(a.name,b.name)<0);
}
int main()
{
    int n,m;
    scanf("%d %d",&n,&m);
    vector<info> a(n),v;
    vector<int> book(205, 0);
    for(int i=0;i<n;++i)
    {
        scanf("%s %d %d",a[i].name,&a[i].age,&a[i].net_worth);
    }
    sort(a.begin(),a.end(),cmp);
    for(int i = 0; i < n; i++)
    {
        if(book[a[i].age] < 100)
        {
            v.push_back(a[i]);
            book[a[i].age]++;
        }
    }
    for(int i=0;i<m;++i)
    {
        int k,min_age,max_age;
        scanf("%d %d %d",&k,&min_age,&max_age);
        vector<info> temp;
        for(int j = 0; j < v.size(); j++)
        {
            if(v[j].age >= min_age && v[j].age <= max_age)
                temp.push_back(v[j]);
        }
        if(i != 0)
            printf("\n");
        printf("Case #%d:", i + 1);
        bool flag=false;
        for(int z=0;z<k && z<temp.size();++z)
        {
            printf("\n%s %d %d",temp[z].name,temp[z].age,temp[z].net_worth);
            flag=true;
        }
        if(flag==false)
        {
            printf("\nNone");
        }
    }
    return 0;
}
