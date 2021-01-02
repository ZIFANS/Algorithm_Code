/*
题目描述：
输入一个链表，输出该链表中倒数第k个结点。
*/

/*
双指针
*/
class Solution {
public:
    ListNode* getKthFromEnd(ListNode* head, int k) {
        if (!head)
            return head;
        
        ListNode* slow = head, *fast = head;

        for (int i = 0; i < k; ++i) {
            fast = fast->next;
        }

        while (fast) {
            slow = slow->next;
            fast = fast->next;
        }

        return slow;
    }
};