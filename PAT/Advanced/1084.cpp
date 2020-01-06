#include <iostream>
#include <cctype>
using namespace std;
int main()
{
    string s1, s2, ans;
    cin >> s1 >> s2;
    for (int i = 0; i < s1.length(); i++)
    {
        if (! s2.find(s1[i])  && !ans.find(toupper(s1[i])))
             ans += toupper(s1[i]);
    }
    cout << ans;
    return 0;
}



#include <iostream>
#include <cstring>
using namespace std;
int remove_repeat(char a[], int l)      // PAT 甲级 1084  18/20
{
    int i,j, r=0; 
     
    for(i = 0; i < l; i ++)
    {
        for(j = 0; j < r; j ++)
            if(a[j] == a[i]) 
            break;
        if(j == r)
            a[r++] = a[i]; 
    }
     
    return r;
}
int main ()
{
    char a[81],b[81];
    bool flagb[256]={false};
    cin.getline(a,81);
    cin.getline(b,81);
    int lena=strlen(a),lenb=strlen(b);
    for(int i=0;i<lena;++i)
    {
        if(a[i] >= 'a'&&a[i] <= 'z')
            a[i] -= 32;
    }
    for(int i=0;i<lenb;++i)
    {
        if(b[i] >= 'a'&&b[i] <= 'z')
            b[i] -= 32;
    }
    int new_lena=remove_repeat(a,lena);
    for(int i=0;i<lenb;++i)
    {
        flagb[ b[i]]=true; 
    }
    for(int i=0;i< new_lena;++i)
    {
       if( !flagb[ a[i] ])
        {
           printf("%c",a[i]);
        }
    }
   
    return 0;
}
