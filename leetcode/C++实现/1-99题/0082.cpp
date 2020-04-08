class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if(!head)
            return NULL;
        ListNode *temp=new ListNode(0);
        temp->next=head;
        ListNode *pre=temp,*p=pre->next;
        while(p->next)
        {
            if(p->next->val!=p->val)
            {
                if(pre->next==p)
                    pre=p;
                else
                    pre->next=p->next;
            }
            p=p->next;
        }
        if(pre->next!=p)
            pre->next=NULL;
        return temp->next;
    }
};
