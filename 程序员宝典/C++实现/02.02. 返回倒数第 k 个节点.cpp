// 1、快慢指针
class Solution {
public:
    int kthToLast(ListNode* head, int k) {
        ListNode *slow = head, *fast = head;

        for (int i = 0; i < k; ++i) {
            fast = fast->next;
        }

        while (fast) {
            slow = slow->next;
            fast = fast->next;
        }

        return slow->val;
    }
};