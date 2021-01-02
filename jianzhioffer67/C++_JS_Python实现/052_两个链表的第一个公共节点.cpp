/*
题目描述：
输入两个链表，找出它们的第一个公共结点。
*/


/*
思想：先求两个链表的长度，然后让长的链表先走两个链表的长度之差。
*/


// 麻烦一点的代码
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        int lenA = getListLen(headA), lenB = getListLen(headB);
        int diff = lenA - lenB;
        ListNode *longNode = headA, *shortNode = headB;

        if (diff < 0) {
            longNode = headB;
            shortNode = headA;
            diff = lenB - lenA;
        }

        for (int i = 0; i < diff; ++i) {
            longNode = longNode->next;
        }

        while (longNode != shortNode) {
            longNode = longNode->next;
            shortNode = shortNode->next;
        }

        return longNode;
    }
    int getListLen(ListNode* head) {
        int len = 0;

        while (head) {
            ++len;
            head = head->next;
        }
        
        return len;
    }
};

// 另外一种方法
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode *pA = headA, *pB = headB;

        while (pA != pB) {
            pA = pA ? pA->next : headB;
            pB = pB ? pB->next : headA;
        }

        return pA;
    }
};