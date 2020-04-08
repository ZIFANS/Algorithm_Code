class Solution {
public:                                                     // 网上很多人想法是这样的
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        if(head==NULL || head->next==NULL)
            return NULL;
        ListNode *pre=head,*p=head;
        for(int i=0;i<n;++i)
            p=p->next;
        if(p==NULL)
            return head->next;
        while(p->next!=NULL)
        {
            p=p->next;
            pre=pre->next;
        }
        pre->next=pre->next->next;
        return head;
    }
};
