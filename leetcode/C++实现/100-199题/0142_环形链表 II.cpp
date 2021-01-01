class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        ListNode *slow = head, *fast = head;

        while (fast != NULL && fast->next != NULL) {
            slow = slow->next;
            fast = fast->next->next;

            // 快慢指针相遇
            if (slow == fast) {
                ListNode *index1 = fast;
                ListNode *index2 = head;

                while (index1 != index2) {
                    index1 = index1->next;
                    index2 = index2->next;
                }

                return index1;              // 返回index1和index2都是一样
            }
        }

        return NULL;
    }
};