// 与LeetCode 141 一样的题
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        ListNode *slow = head, *fast = head;

        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;

            if (slow == fast) {
                ListNode *index1 = fast;
                ListNode *index2 = head;

                while (index1 != index2) {
                    index1 = index1->next;
                    index2 = index2->next;
                }

                return index2;
            }
        }

        return NULL;
    }
};