/*
题目描述：
在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 
例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
*/

/*
思想：
class Solution {
public:
    ListNode* deleteDuplication(ListNode* pHead)
    {
        if(pHead == NULL){
            return NULL;
        }
        // 指向当前结点前最晚访问过的不重复结点
        ListNode* pPre = NULL;
        // 指向当前处理的结点
        ListNode* pCur = pHead;
        // 指向当前结点后面的结点
        ListNode* pNext = NULL;
        
        while(pCur != NULL){
            // 如果当前结点与下一个结点相同
            if(pCur->next != NULL && pCur->val == pCur->next->val){
                pNext = pCur->next;
                // 找到不重复的最后一个结点位置
                while(pNext->next != NULL && pNext->next->val == pCur->val){
                    pNext = pNext->next;
                }
                // 如果pCur指向链表中第一个元素，pCur -> ... -> pNext ->... 
                // 要删除pCur到pNext, 将指向链表第一个元素的指针pHead指向pNext->next。
                if(pCur == pHead){
                    pHead = pNext->next;
                }
                // 如果pCur不指向链表中第一个元素，pPre -> pCur ->...->pNext ->... 
                // 要删除pCur到pNext，即pPre->next = pNext->next
                else{
                    pPre->next = pNext->next;
                }
                // 向前移动
                pCur = pNext->next;
            }
            // 如果当前结点与下一个结点不相同
            else{
                pPre = pCur;
                pCur = pCur->next;
            }
        }
        return pHead;
    }
};
*/

class Solution {
public:
    ListNode* deleteDuplication(ListNode* pHead) {
        if(pHead == nullptr)
            return nullptr;
        ListNode *pre = nullptr, *p = pHead, *pNext = nullptr;
        while(p != nullptr) {
            if(p->next != nullptr && p->val == p->next->val) {
                pNext = p->next;
                while(pNext->next != nullptr && pNext->next->val == p->val) {
                    pNext = pNext->next;
                }
                if(p == pHead) {
                    pHead = pNext->next;
                } else {
                    pre->next = pNext->next;
                }
                p = pNext->next;
            } else {
                pre = p;
                p = p->next;
            }
        }
        return pHead;
    }
};