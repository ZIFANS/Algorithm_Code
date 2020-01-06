#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;            // PAT 1089 AC
int main ()
{
    int n;
    scanf("%d",&n);
    int *a=new int[n];
    int *b=new int[n];
    for(int i=0;i<n;++i)
    {
        cin>>a[i];
    }
    for(int i=0;i<n;++i)
    {
        cin>>b[i];
    }
    int check=0;
    while( b[check]<=b[check+1] )
        check++;
    int temp=++check;
    while(temp<n && a[temp]==b[temp])
        ++temp;
    if(temp==n)
    {
        cout<<"Insertion Sort"<<endl;
        sort(a,a+check+1);
    }
    else
    {
        cout<<"Merge Sort"<<endl;
        int k=1,flag=1;
        while(flag)
        {
            flag=0;
            for(int i=0;i<n;++i)
            {
                if(a[i]!=b[i])
                    flag=1;
            }
            k=k*2;
            for(int i=0;i<n/k;++i)
                sort(a+i*k,a+(i+1)*k);
            sort(a+n/k*k,a+n);
        }
    }
    for(int j=0;j<n;++j)
    {
        if(j!=0)
            cout<<" ";
        cout<<a[j];
    }
    delete[] a;
    delete[] b;
    return 0;
}
