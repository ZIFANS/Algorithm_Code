// 这里没看题目，题目的描述太麻烦了， 直接用了剑指offer52的代码，AC掉了
// https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode *pA = headA, *pB = headB;

        while (pA != pB) {
            pA = pA ? pA->next: headB;
            pB = pB ? pB->next : headA;
        }

        return pA;
    }
};
