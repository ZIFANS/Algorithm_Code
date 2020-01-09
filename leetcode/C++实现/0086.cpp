class Solution {                //在评论区看到别人的代码
public:
    ListNode* partition(ListNode* head, int x) {
       ListNode node1(-1),node2(-1);
       ListNode *p1=&node1,*p2=node2;
       while(head)
       {
       		if(head->val<x)
       		{
       			p1=p1->next=head;
       		}
       		else
       		{
       			p2=p2->next=head;
       		}
       		head=head->next;
       }
       p2->next=NULL;
       p1->next=node2.next;
       return node1.next;
    }
};
