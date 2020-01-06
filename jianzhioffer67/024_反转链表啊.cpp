/*
题目描述：
输入一个链表，反转链表后，输出新链表的表头。
*/

/* 思想：
剑指offer上的代码
 */

class Solution {
public:
    ListNode* ReverseList(ListNode* pHead) {
        ListNode *reverseHead = nullptr;
        ListNode *p = pHead;
        ListNode *pre = nullptr;

        while(p != nullptr) {
            ListNode *temp = p->next;

            if(temp == nullptr) 
                reverseHead = p;
            p->next = pre;
            pre = p;
            p = temp;
        }
        return reverseHead;
    }
};