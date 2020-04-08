/*
题目描述：
输入一个链表，反转链表后，输出新链表的表头。
*/

/* 思想：
剑指offer上的代码
 */

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode *pre = NULL, *cur = head;
        
        while (cur) {
            ListNode *temp = cur->next;
            cur->next = pre;
            pre = cur;
            cur = temp;
        }

        return pre;
    }
};