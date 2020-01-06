class Solution {
public:
   ListNode * middleNode(ListNode * head) {  
       ListNode *p2=head;
       int len=0;
       while(p2)
       {
           ++len;
           p2=p2->next;
       }
       for(int i=0;i<len/2;++i)
       {
           head=head->next;
       }
       return head;
    }
};
