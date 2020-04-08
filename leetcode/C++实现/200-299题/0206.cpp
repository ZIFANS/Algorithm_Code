class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if(head==NULL)
            return head;
        ListNode *p=head,*pre=NULL,*Next=NULL;
        while(p)
        {
            Next=p->next;
            p->next=pre;
            pre=p;
            p=Next;
        }
        return pre;
    }
};