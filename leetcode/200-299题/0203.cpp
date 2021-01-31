class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        while(head!=NULL && head->val==val)
        {
            head=head->next;
        }
        if(head==NULL)
        {
            return NULL;
        }
        ListNode *pre=head,*p=head->next;
        while(pre!=NULL && p!=NULL)
        {
            if(p->val==val)
            {
                pre->next=p->next;
                p=p->next;
            }
            else
            {
                pre=p;
                p=p->next;
            }
        }
        return head;
    }
};
