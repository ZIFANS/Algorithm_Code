/*
题目描述：
输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
*/

/*
思想：(剑指offer上的代码)
没啥想法的挺简单的，就是注意鲁棒性，pHead1 与 pHead2比较，有谁小就插入到合并后的节点，
且将自己向后移动
*/

class Solution {
public:
    ListNode* Merge(ListNode* pHead1, ListNode* pHead2) {
        if(pHead1 == nullptr)
            return pHead2;
        if(pHead2 == nullptr)
            return pHead1;
        ListNode *AfterMerge = nullptr;
        if(pHead1->val < pHead2->val) {
            AfterMerge = pHead1;
            AfterMerge->next = Merge(pHead1->next, pHead2);
        } else {
            AfterMerge = pHead2;
            AfterMerge->next= Merge(pHead1, pHead2->next);
        }
        return AfterMerge;
    }
};