// 与LeetCode86题一样
class Solution {
public:
    ListNode* partition(ListNode* head, int x) {
        ListNode *h1 = new ListNode(-1);    // 记录比x小的节点组成的链表
        ListNode *h2 = new ListNode(-1); 
        ListNode *p1 = h1, *p2 = h2;

        while (head) {
            if (head->val < x) {
                p1->next = head;
                p1 = p1->next;
            } else {
                p2->next = head;
                p2 = p2->next;
            }
            head = head->next;
        }

        p2->next = NULL;
        p1->next = h2->next;

        return h1->next;
    }
};