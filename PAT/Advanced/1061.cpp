#include <iostream>
#include <string>
#include <vector>
#include <cctype>
using namespace std;
int main ()
{
    string s1,s2,s3,s4;
    cin>>s1>>s2>>s3>>s4;
    string day[7] = {"MON ", "TUE ", "WED ", "THU ", "FRI ", "SAT ", "SUN "};
    int len1=s1.size(),len2=s2.size(),len3=s3.size(),len4=s4.size();
    int day_index=-1,hh_index=-1,mm_index=-1;
    len1=len1<len2 ? len1:len2;
    len3=len3<len4 ? len3:len4;
    int i;
    for(i=0;i<len1;++i)
    {
        if( s1[i]==s2[i] && ( s1[i]>='A' && s1[i]<='G' ) )
        {
            day_index=s1[i]-'A';
            break;
        }

    }
    i=i+1;
    for(;i<len1;++i)
    {
        if( s1[i]==s2[i] &&  (  (s1[i]>='A' && s1[i]<='N') || isdigit(s1[i]) )  )
        {
            hh_index=isdigit(s1[i]) ? s1[i]-'0':(s1[i]-'A')+10;
            break;
        }
    }
    for(int j=0;j<len3;++j)
    {
        if(s3[j]==s4[j] && isalpha(s3[j]) )
        {
            mm_index=j;
            break;
        }
    }
    cout<<day[day_index];
    printf("%02d:%02d\n",hh_index,mm_index);
    return 0;
}
