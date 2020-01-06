class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if(head==NULL)
             return head;
         ListNode *newhead=head,*tail=head,*p=head;
         int len=0;
         while(p!=NULL)
        {
            if(p->next==NULL)
                tail=p;
            ++len;
            p=p->next;
        }
        int movelong=len-k%len;
        if(movelong==len)
           return head;
        for(int i=0;i<movelong-1;++i)
        {
          newhead=newhead->next;
        }
        ListNode *temp=newhead;
         newhead=newhead->next;
         temp->next=NULL;
        tail->next=head;
        return newhead;
    }
};
