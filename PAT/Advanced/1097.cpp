#include <iostream>
#include <vector>
#include <cmath>
#include <set>
using namespace std;
struct node
{
    int add;
    int data;
    int next;
};
node a[100005];
int main ()
{
    int first,n;
    scanf("%d %d",&first,&n);
   // cin>>first>>n;
    vector<node> link_list,remove_list;
    set<int> exist_node;
    int add, val, next;
    for(int i=0;i<n;++i)
    {
        //scanf("%d %d %d",&a[i].add,&a[i].data,&a[i].next); 不用变量输入，会内存超限
        scanf("%d %d %d",&add,&val,&next);
        /*a[add].add=add;
        a[add].data=val;
        a[add].next=next;这种写法也可以
        */
        a[add]={add,val,next};
    }
    int p=first;
    for(;p!=-1;p=a[p].next)
    {
          if (exist_node.find((a[p].data <0?-a[p].data:a[p].data)) != exist_node.end()) {
			remove_list.push_back(a[p]);
		}
		else
        {
			link_list.push_back(a[p]);
			exist_node.insert((a[p].data < 0 ? -a[p].data : a[p].data));
		}
    }
    int i;
	for (i = 0; i < link_list.size(); ++i) 
    {
		if(i==link_list.size()-1) 
            printf("%05d %d -1\n", link_list[i].add, link_list[i].data);
		else 
            printf("%05d %d %05d\n", link_list[i].add, link_list[i].data, link_list[i + 1].add);
	}
	for (i = 0; i < remove_list.size(); ++i) 
	{
		if(i==remove_list.size()-1) 
            printf("%05d %d -1", remove_list[i].add, remove_list[i].data);
		else  
            printf("%05d %d %05d\n", remove_list[i].add, remove_list[i].data, remove_list[i + 1].add);
	}
    return 0;
}


