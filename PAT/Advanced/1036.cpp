#include <iostream>
#include <climits>
#include <cstring>
using namespace std;                     //  PAT 甲级 1036 AC 代码
struct info
{
    char name[11];
    char gender;
    char id[11];
    int grade;
};
int main ()
{
    int n;
    scanf("%d",&n);
    info a[n];
    int male_low=INT_MAX,female_high=INT_MIN;
    char male_name[11]="",male_id[11]="",female_name[11]="",female_id[11]="";
    for(int i=0;i<n;++i)
    {
        scanf("%s %c %s %d",a[i].name,&a[i].gender,a[i].id,&a[i].grade);
    }
    for(int i=0;i<n;++i)
    {
        if(a[i].gender=='M')
        {
            if( a[i].grade < male_low )
            {
                male_low=a[i].grade;
                strcpy(male_name,a[i].name);
                strcpy(male_id,a[i].id);
            }
        }
        else
            if(a[i].gender=='F')
            {
                if( a[i].grade>female_high)
                {
                    female_high=a[i].grade;
                    strcpy(female_name,a[i].name);
                    strcpy(female_id,a[i].id);
                }
            }

    }
    if( female_name[0]=='\0' )
    {
        printf("Absent\n");
        printf("%s %s\n",male_name,male_id);
        printf("NA");
    }
    else
        if( male_name[0]=='\0')
    {
        printf("%s %s\n",female_name,female_id);
        printf("Absent\n");
        printf("NA");
    }
    else
    {
        printf("%s %s\n",female_name,female_id);
        printf("%s %s\n",male_name,male_id);
        printf("%d", female_high-male_low);
    }
    return 0;
}
