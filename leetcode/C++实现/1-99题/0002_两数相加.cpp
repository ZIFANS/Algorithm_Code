class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        if (l1->val == 0 && !l1->next)
            return l2;
        if (l2->val == 0 && !l2->next)
            return l1;

        ListNode *dummyHead = new ListNode(-1);
        ListNode *pointer = dummyHead;
        int carry = 0;  // 进位

        while (l1 || l2) {
            int v1 = l1 ? l1->val : 0;
            int v2 = l2 ? l2->val : 0;
            int sum = v1 + v2 + carry;

            carry = sum / 10;
            pointer->next = new ListNode(sum % 10);
            pointer = pointer->next;

            if (l1)
                l1 = l1->next;
            if (l2)
                l2 = l2->next;  
        }
        if (carry) {
            pointer->next = new ListNode(1);
        }

        return dummyHead->next;
    }
};


