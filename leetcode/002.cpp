class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *head=NULL,*pre=NULL;
        int c=0;
        while(l1 || l2)
        {
            int value1=l1?l1->val:0;
            int value2=l2?l2->val:0;
            int temp=value1+value2+c;
            c=temp/10;
            int val=temp%10;
            ListNode *current=new ListNode(val);
            if(!head)
                head=current;
            if(pre)
                pre->next=current;
            pre=current;
            l1=l1?l1->next:NULL;
            l2=l2?l2->next:NULL;
        }
        if(c)
        {
            ListNode *end=new ListNode(c);
            pre->next=end;
        }
        return head;
    }    
};
