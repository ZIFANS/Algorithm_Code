class Solution {
public:
    int len(ListNode *head)
    {
        int len=0;
        while(  head )
        {
            len++;
            head=head->next;
        }
        return len;
    }
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        int m=len(headA),n=len(headB);
        ListNode *p,*q;
        for(p=headA;m>n;m--)
        {
            p=p->next;
        }
        for(q=headB;m<n;n--)
        {
            q=q->next;
        }
        while(  p!=q && p  && q )
        {
            p=p->next;
            q=q->next;
        }
       return p;
    }
};