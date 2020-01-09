ListNode* reverseBetween(ListNode* head, int m, int n){
    if(head==NULL)
        return NULL;
    ListNode *q=NULL,*p=head;
    for(int i = 0; i < m - 1; i++)
    {
            q = p;
            p = p->next;
    }
    ListNode *end1=p;
    ListNode *ppre=p;
    p=p->next;
    for(int i=m+1;i<=n;++i)
    {
        ListNode *temp=p->next;
        p->next=ppre;
        ppre=p;
        p=temp;
    }
    end1->next=p;
    if(q)
        q->next=ppre;
    else
        head=ppre;
    return head;
}
