// 一遍遍历，用双指针的方法
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *dummy = new ListNode(0);
        
        if (!head)
            return head;
        dummy->next = head;
        ListNode *p = dummy, *q = dummy;

        for (int i = 0; i < n; ++i) {
            q = q->next;
        }
        while (q->next) {
            p = p->next;
            q = q->next;
        }
        p->next = p->next->next;

        return dummy->next;
    }
};