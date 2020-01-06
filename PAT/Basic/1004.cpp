#include <iostream>
using namespace std;
int main ()
{
    int n;
    scanf("%d",&n);
    int max_grade=-1,min_grade=101;
    string ans_maxid,ans_maxname,ans_minid,ans_minname;
    for(int i=0;i<n;++i)
    {
        string name,id;
        int grade;
        cin>>name>>id>>grade;
        if(grade>max_grade)
        {
            max_grade=grade;
            ans_maxid=id;
            ans_maxname=name;
        }
        if(grade<min_grade)
        {
            min_grade=grade;
            ans_minid=id;
            ans_minname=name;
        }
    }
    cout<<ans_maxname<<" "<<ans_maxid<<endl<<ans_minname<<" "<<ans_minid;
    return 0;
}
