class Solution {
public:
    bool isPalindrome(ListNode* head) {
         if(head==NULL || head->next==NULL)
            return true;
        ListNode *p=head;
        vector<int> v;
        while(p)
        {
            v.push_back( p->val);
            p=p->next;
        }
        int len=v.size();
        for(int i=0;i<=len/2;++i)
        {
            if( v[i]!=v[len-1-i] )
            {
                return false;
            }
        }
        return true;
    }
};
