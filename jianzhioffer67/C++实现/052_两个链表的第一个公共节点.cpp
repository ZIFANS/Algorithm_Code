/*
题目描述：
输入两个链表，找出它们的第一个公共结点。
*/


/*
思想：先求两个链表的长度，然后让长的链表先走两个链表的长度之差。
*/


// 自己的代码
class Solution {
public:
    ListNode* FindFirstCommonNode(ListNode* pHead1, ListNode* pHead2) {
        int len1 = LengthList(pHead1), len2 = LengthList(pHead2);
        ListNode *longNode = pHead1, *shortNode = pHead2;
        int lendiff = len1 - len2;
        if(len2 > len1) {
            lendiff = len2 - len1;
            longNode = pHead2;
            shortNode = pHead1;
        }
        for(int i = 0; i < lendiff; ++i) {
            longNode = longNode->next;
        }
        while(longNode != shortNode) {
            longNode = longNode->next;
            shortNode = shortNode->next;
        }
        return longNode;
    }
    int LengthList(ListNode *head) {
        int len = 0;
        while(head != nullptr) {
            ++len;
            head = head->next;
        }
        return len;
    }
};